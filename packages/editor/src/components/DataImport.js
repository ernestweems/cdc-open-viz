import React, { useState, useContext, useEffect, useRef } from 'react';
import { useTable } from 'react-table';
import '../scss/data-import.scss';
import * as d3 from 'd3';
import TabPane from './TabPane';
import Tabs from './Tabs';
import Context from '../context';

import UploadIcon from '../assets/icons/upload-solid.svg';
import LinkIcon from '../assets/icons/link.svg';

export default function DataImport() {
  const [data, setData] = useState(null);

  const [columns, setColumns] = useState(null);

  const [uploadFile, setUploadFile] = useState(false);

  const [error, setError] = useState();

  let fileInput = useRef(null);

  let urlInput = useRef(null);

  let dataUploadLabel = useRef(null);

  let errorPresent = false;

  const dataTypes = ['.csv', '.json'];

  const reader = new FileReader();

  const toggleUpload = (currState) => {
    setUploadFile(!currState);
    setError(false); // reset errors

    dataUploadLabel.current.innerHTML = 'Choose File';

    if (!currState) {
      document.getElementById('file-uploader').click();
    } else {
      setData(null);
    }
  };

  /**
   * validateData:
   * Check data for common issues
   */
  function validateData(userData, dataType) {
    setError(null);

    if (userData[1] && typeof userData[1][0] !== 'undefined' && dataType === 'json') {
      // is the json a bunch of arrays instead of objects?
      errorPresent = true;
      setError('Please check the formatting of your data. JSON files need be formatted in an array of objects [ {"name":"data1", .... },{...},{...}]');

    } else if (userData.columns && userData.columns.includes('')) {
      // are any of the column headers empty?
      setError('It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.');

    } else if ( userData === null || userData === 'undefined' ) {
      errorPresent = true;
      setError('Your data is empty.')
    }
  }

  /**
   * populateColumns:
   * build columns for the table display
   */
  function populateColumns(colData) {
    // Format table data
    const newHeaders = [];
    let x = 0;

    if (!colData.columns) {
      // create columns if they don't exist
      colData.columns = [];
      const tblRow = Object.entries(colData[0]);
      tblRow.forEach((item) => {
        colData.columns.push(item[0]);
      });
    }
    // format table header data
    colData.columns.forEach((cell) => {
      // create a placeholder to map data to
      const cellVal = (
        cell === ''
          ? `X.${x += 1}`
          : cell);
      const th = {};
      // if we generated the cell value write nothing to the th
      th.Header = (
        cellVal === `X.${x}`
          ? ''
          : cellVal);
      th.accessor = cellVal.replace(/[^A-Z0-9]/ig, '_');

      newHeaders.push(th);
    });
    setColumns(newHeaders);
    x = 0; // reset column counter for columns
  }

  /**
   * populateRows:
   * build rows for the table display
   */
  function populateRows(rowData) {
    // Format table data
    const newRows = [];
    let x = 0;
    // format table data rows
    rowData.forEach((row) => {
      const rowArr = Object.entries(row);
      const td = {};
      rowArr.forEach((cell) => {
        // fill in empty cells
        const cellVal = (
          cell[0] === ''
            ? `X_${x += 1}`
            : cell[0].replace(/[^A-Z0-9]/ig, '_'));
        td[cellVal] = cell[1];
      });
      x = 0; // reset column counter for rows
      newRows.push(td);
    });
    setData(newRows);
  }

  /**
   * CSV Parsing: collect the data and format it
   * to be handled by React-Table
   */

  function parseCsvFile( extData = null ) {
    // check for external data
    const fileData = extData.length ? extData : d3.csvParse(reader.result, (d) => d);

    validateData(fileData, 'csv');

    if (!errorPresent) {
      populateColumns(fileData);
      populateRows(fileData);
    }
  }

  /**
   * JSON Parsing: collect the data and format it
   * to be handled by React-Table
   */

  function parseJsonFile( extData = null ) {
    let jsonData;
    // check for external data
    if ( extData.length ) {
      jsonData = extData;
      validateData(jsonData, 'json');
    } else {
      try {
        jsonData = JSON.parse(reader.result);
        validateData(jsonData, 'json');
      } catch (err) {
        errorPresent = true;
        setError(`There was an issue parsing your json file: ${err.toString()}`);
      }
    }

    if (!errorPresent) {
      populateColumns(jsonData);
      populateRows(jsonData);
    }
  }

  function loadData(dataType, dataTypes) {
    // let renderData;
    errorPresent = null;
    switch (dataType) {
      case 'file': {
        const userData = fileInput.current.files[0];
        // update the label with the document name
        const fileUpload = fileInput.current.value.replace(/^.*[\\/]/, '');
        // document.getElementById('data-upload-label').innerHTML = fileUpload;

        dataUploadLabel.current.innerHTML = fileUpload;

        if (userData) {
          const fileType = userData.type;
          reader.readAsText(userData);

          switch (fileType) {
            case 'text/csv':
              reader.addEventListener('load', parseCsvFile);
              break;
            case 'application/json':
              reader.addEventListener('load', parseJsonFile);
              break;
            default:
              setError('The file type that you are trying to upload is not supported.');
          }
        }
        break;
      }
      case 'external': {
        const externalInput = urlInput.current.value;
        // const urlRegEx = new RegExp('^(https?:\\/\\/)'+ // protocol
        //                             '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        //                             '((\\d{1,3}\\.){3}\\d{1,3}))|'+ // OR ip (v4) address
        //                             '/(localhost).'+ // OR localhost:xxxx
        //                             '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        //                             '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        //                             '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

                                    // ^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))|/(localhost).(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$','i'

        const urlRegEx = new RegExp(/^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/);
        // create a URL to make error checking easier
        if ( urlRegEx.test( externalInput )  ) {
          const dataUrl  = new URL(externalInput);
          const fileName = dataUrl.pathname.split('/').pop();
          const fileExt  = fileName.slice( ( fileName.lastIndexOf(".") - 1 ) + 1 );

          // does the URL contain an acceptable filetype?
          if ( dataTypes.includes( fileExt ) ) {
            switch (fileExt) {
              case '.csv':
                d3.csv(dataUrl)
                  .then(function(csvData) {
                    parseCsvFile(csvData);
                  })
                  .catch(err => { 
                    errorPresent = true;
                    setError( 'Check to make sure the URL is correct: ' + err.toString() )
                  });
                break;
              case '.json':
                d3.json(dataUrl)
                  .then(function(jsonData) {
                    parseJsonFile(jsonData);
                  })
                  .catch(err => { 
                    errorPresent = true;
                    setError( 'Check to make sure the URL is correct: ' + err.toString() )
                  });
                break;
              default:
                setError('The file type that you are trying to upload is not supported.');
          }
          } else {
            setError( fileExt + ' is not an acceptible document type. Please upload your document in ' + dataTypes.join(', ') );
          }
        } else {
          setError('Please make sure to use a valid URL.');
        }
        break;
      }
      case 'freeform': {
      // todo build textbox to build these
      }
      break;

      default: {
        setError('Your datatype is not supported.');
      }
    }
  }

  useEffect(() => {
    let { current } = urlInput;
  });

  useEffect(() => {
    let { current } = dataUploadLabel;
  });

  useEffect(() => {
    let { current } = fileInput;
  });

  const DataTable = () => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data });

    return (
      <table className="table-responsive table-bordered table-hover" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {/* <th className="index-col">...</th> */}
              {headerGroup.headers.map((column) => (
                <th scope="col" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {/* <th>{row.index + 1}</th> */}
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const DataPlaceholder = () => (
    <div>
      <div className="overlay-empty">Add Data to Get Started</div>
      <table className="table-bordered table-empty">
        <thead>
          <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>
        </thead>
        <tbody>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="container-fluid">
      <div className={(uploadFile) ? 'loaded' : 'not-loaded'}>
        <div className="row">
          <div className="col data-loader">
            <Tabs>
              <TabPane title="Link from URL" icon={<LinkIcon className="inline-icon" />}>
                <div className="input-group mb-3">
                  <input id="external-data" type="text" className="form-control" placeholder="e.g., https://data.cdc.gov/resources/file.json" aria-label="Load data from external URL" aria-describedby="load-data" ref={urlInput} />
                  <div className="input-group-append">
                    <button className="input-group-text btn btn-primary" type="button" id="load-data" onClick={() => loadData('external', dataTypes)}>Load</button>
                  </div>
                </div>
              </TabPane>
              <TabPane title="Upload File" icon={<UploadIcon className="inline-icon" />}>
                <button className="btn btn-primary btn-block upload-file-btn" type="button" htmlFor="file-uploader" onClick={() => toggleUpload(uploadFile)}>Upload File</button>
                <form className="input-group loader-ui">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="file-uploader" accept={dataTypes.join(',')} onChange={() => loadData('file', dataTypes)} ref={fileInput}  />
                    <label id="data-upload-label" className="custom-file-label" htmlFor="file-uploader" ref={dataUploadLabel}>Choose file</label>
                  </div>
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={() => toggleUpload(uploadFile)}>Clear</button>
                  </div>
                </form>
              </TabPane>
            </Tabs>
            { error
              ? <p className="data-error alert alert-warning">{error} - {errorPresent}</p>
              : <p>Upload a data file to use ({dataTypes.join(', ')})</p> }

            <p className="pb-3">Data Format Help</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</li>
              <li>Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Proin sodales pulvinar tempor.</li>
              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
            </ul>
          </div>
          <div className="col col-sm-8 data-import-preview">
            {data ? <DataTable /> : <DataPlaceholder />}
          </div>
        </div>
      </div>
    </section>
  );
}

