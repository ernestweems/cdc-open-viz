import React, { useEffect, useState } from 'react'

// context & initial state
import ConfigContext from './ConfigContext'
import defaults from './data/initial-state'

// components
import Title from '@cdc/core/components/ui/Title'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'
import EditorPanel from './components/EditorPanel'

// helpers
import DataTransform from '@cdc/core/helpers/DataTransform'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import Layout from '@cdc/core/components/Layout'

// external
import parse from 'html-react-parser'

// styles
import './scss/main.scss'

const CdcFilteredText = ({ dashboardConfig, config: configObj, configUrl, isDashboard = false, isEditor = false, setConfig: setParentConfig }) => {
  const getAllData = () => {
    let data = []
    if (dashboardConfig) {
      Object.entries(dashboardConfig?.datasets)?.forEach(([dataSetName, dataSet]) => data.push(...dataSet.data))
    } else {
      data = configObj?.data || []
    }
    return data
  }
  const transform = new DataTransform()
  // Default States
  const [config, setConfig] = useState(defaults)
  const [loading, setLoading] = useState(true)
  const [stateData, setStateData] = useState(getAllData())
  const [excludedData, setExcludedData] = useState()
  let { title, filters } = config
  const fontSize = config.fontSize === 'small' ? '16px' : config.fontSize === 'medium' ? '22px' : '27px'

  const { contentClasses, innerContainerClasses } = useDataVizClasses(config)

  // Default Functions

  const loadConfig = async () => {
    let response = dashboardConfig || configObj || (await (await fetch(configUrl)).json())
    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)

      data = await dataString.json()
      if (response.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, response.dataDescription)
      }
    }

    if (data) {
      setStateData(data)
      setExcludedData(data)
    }

    if (dashboardConfig) {
      setStateData(getAllData())
    }

    let newConfig = { ...config, ...response }
    const processedConfig = { ...(await coveUpdateWorker(newConfig)) }

    updateConfig(processedConfig)
    setLoading(false)
  }

  const updateConfig = newConfig => {
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    newConfig.runtime = {}
    newConfig.runtime.uniqueId = Date.now()

    newConfig.runtime.editorErrorMessage = ''

    setConfig(newConfig)
  }

  const filterByTextColumn = () => {
    let filteredData = []

    if (filters.length || dashboardConfig.dashboard?.sharedFilters?.length) {
      const filtersToUse = dashboardConfig.dashboard?.sharedFilters || filters
      filtersToUse.map(filter => {
        let selected = filter.columnValue ? filter.columnValue : filter.active
        let columnName = filter.columnName
        if (filter.columnName && selected) {
          return (filteredData = stateData.filter(data => {
            return data[filter.columnName] === selected
          }))
        } else {
          return null
        }
      })
    } else {
      // filter by textColumn if selected
      return (filteredData = stateData.filter((e, index) => {
        return e[config.textColumn] && index === 0
      }))
    }

    return filteredData
  }

  //Load initial config
  useEffect(() => {
    loadConfig().catch(err => console.log(err))
  }, []) // eslint-disable-line

  useEffect(() => {
    if (configObj && !configObj.dataUrl) {
      updateConfig({ ...defaults, ...configObj })
      setStateData(getAllData())
      setExcludedData(configObj.data)
    }
  }, [configObj?.data, dashboardConfig]) // eslint-disable-line

  let content = <Loading />

  if (loading === false) {
    let body = (
      <>
        <Layout.Responsive isEditor={isEditor}>
          <div className={`cove-component__content`}>
            <Title classes={[`${config.theme}`]} title={title} style={{ fontSize }} />
            <div className={`${contentClasses.join(' ')} body`}>
              {filterByTextColumn()
                .slice(0, 1)
                .map((el, i) => (
                  <p style={{ fontSize }} key={i}>
                    {' '}
                    {parse(el[config.textColumn] || '')}{' '}
                  </p>
                ))}
            </div>
          </div>
        </Layout.Responsive>
      </>
    )

    content = (
      <>
        {isEditor && <EditorPanel />}
        {body}
      </>
    )
  }
  const values = {
    config,
    updateConfig,
    loading,
    setParentConfig,
    isDashboard,
    stateData,
    unfilteredData: stateData
  }

  return (
    <ErrorBoundary component='CdcFilteredText'>
      <ConfigContext.Provider value={values}>
        <Layout.VisualizationWrapper config={config} isEditor={isEditor} showEditorPanel={config?.showEditorPanel}>
          {content}
        </Layout.VisualizationWrapper>
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
