import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import React, { MouseEventHandler, useContext, useMemo } from 'react'
import Toggle from './Toggle'
import _ from 'lodash'
import { DashboardConfig } from '../types/DashboardConfig'
import { ConfigRow } from '../types/ConfigRow'
import DataTransform from '@cdc/core/helpers/DataTransform'
import CdcMap from '@cdc/map'
import CdcChart from '@cdc/chart'
import CdcDataBite from '@cdc/data-bite'
import CdcWaffleChart from '@cdc/waffle-chart'
import CdcMarkupInclude from '@cdc/markup-include'
import CdcFilteredText from '@cdc/filtered-text'
import Filters, { APIFilterDropdowns } from './Filters'
import { FilterBehavior } from './Header/Header'
import { DashboardContext } from '../DashboardContext'
import { ViewPort } from '@cdc/core/types/ViewPort'
import { getVizConfig } from '../helpers/getVizConfig'

type VizRowProps = {
  filteredDataOverride?: Object[]
  row: ConfigRow
  rowIndex: number
  setSharedFilter: Function
  updateChildConfig: Function
  applyFilters: MouseEventHandler<HTMLButtonElement>
  apiFilterDropdowns: APIFilterDropdowns
  handleOnChange: Function
  currentViewport: ViewPort
}

const VisualizationRow: React.FC<VizRowProps> = ({ filteredDataOverride, row, rowIndex: index, setSharedFilter, updateChildConfig, applyFilters, apiFilterDropdowns, handleOnChange, currentViewport }) => {
  const { config, filteredData: dashboardFilteredData, data: rawData } = useContext(DashboardContext)
  const [show, setShow] = React.useState(row.columns.map((col, i) => i === 0))
  const setToggled = (colIndex: number) => {
    setShow(show.map((_, i) => i === colIndex))
  }
  const inNoDataState = useMemo(() => {
    const vals = Object.values(rawData)
    if (!vals.length) return true
    return vals.some(val => val === undefined)
  }, [rawData])
  const GoButton = ({ autoLoad }: { autoLoad?: boolean }) => {
    if (config.filterBehavior === FilterBehavior.Apply && !autoLoad) {
      return <button onClick={applyFilters}>GO!</button>
    }
    return null
  }
  return (
    <div className={`dashboard-row ${row.equalHeight ? 'equal-height' : ''} ${row.toggle ? 'toggle' : ''}`} key={`row__${index}`}>
      {row.toggle && <Toggle row={row} visualizations={config.visualizations} active={show.indexOf(true)} setToggled={setToggled} />}
      {row.columns.map((col, colIndex) => {
        if (col.width) {
          if (!col.widget) return <div key={`row__${index}__col__${colIndex}`} className={`dashboard-col dashboard-col-${col.width}`}></div>

          const visualizationConfig = getVizConfig(col.widget, index, config, rawData, dashboardFilteredData)
          if (filteredDataOverride) {
            visualizationConfig.data = filteredDataOverride
            if (visualizationConfig.formattedData) {
              visualizationConfig.formattedData = filteredDataOverride
            }
          }

          const setsSharedFilter = config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget).length > 0
          const setSharedFilterValue = setsSharedFilter ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget)[0].active : undefined
          const tableLink = (
            <a href={`#data-table-${visualizationConfig.dataKey}`} className='margin-left-href'>
              {visualizationConfig.dataKey} (Go to Table)
            </a>
          )
          const hideFilter = visualizationConfig.autoLoad && inNoDataState

          const shouldShow = row.toggle === undefined || (row.toggle && show[colIndex])
          return (
            <React.Fragment key={`vis__${index}__${colIndex}`}>
              <div className={`dashboard-col dashboard-col-${col.width} ${!shouldShow ? 'hidden-toggle' : ''}`}>
                {visualizationConfig.type === 'chart' && (
                  <CdcChart
                    key={col.widget}
                    config={visualizationConfig}
                    dashboardConfig={config}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                    isDashboard={true}
                    link={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                    configUrl={undefined}
                    setEditing={undefined}
                    hostname={undefined}
                    setSharedFilterValue={undefined}
                  />
                )}
                {visualizationConfig.type === 'map' && (
                  <CdcMap
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    showLoader={false}
                    setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                    setSharedFilterValue={setSharedFilterValue}
                    isDashboard={true}
                    link={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                  />
                )}
                {visualizationConfig.type === 'data-bite' && (
                  <CdcDataBite
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    isDashboard={true}
                  />
                )}
                {visualizationConfig.type === 'waffle-chart' && (
                  <CdcWaffleChart
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    isDashboard={true}
                    configUrl={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                  />
                )}
                {visualizationConfig.type === 'markup-include' && (
                  <CdcMarkupInclude
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    isDashboard={true}
                    configUrl={undefined}
                  />
                )}
                {visualizationConfig.type === 'filtered-text' && (
                  <CdcFilteredText
                    key={col.widget}
                    config={visualizationConfig}
                    isEditor={false}
                    setConfig={newConfig => {
                      updateChildConfig(col.widget, newConfig)
                    }}
                    isDashboard={true}
                    configUrl={undefined}
                  />
                )}
                {visualizationConfig.type === 'filter-dropdowns' && !hideFilter && (
                  <React.Fragment key={col.widget}>
                    <Filters hide={visualizationConfig.hide} filters={config.dashboard.sharedFilters} apiFilterDropdowns={apiFilterDropdowns} handleOnChange={handleOnChange} />
                    <GoButton autoLoad={visualizationConfig.autoLoad} />
                  </React.Fragment>
                )}
                {visualizationConfig.type === 'table' && <DataTableStandAlone key={col.widget} visualizationKey={col.widget} config={visualizationConfig} viewport={currentViewport} />}
              </div>
            </React.Fragment>
          )
        }
        return <React.Fragment key={`vis__${index}__${colIndex}`}></React.Fragment>
      })}
    </div>
  )
}

export default VisualizationRow