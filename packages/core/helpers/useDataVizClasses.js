export default function useDataVizClasses(config, viewport = null) {
  let lineDatapointClass = ''
  let barBorderClass = ''

  if (config?.lineDatapointStyle === 'hover') {
    lineDatapointClass = ' chart-line--hover'
  }
  if (config?.lineDatapointStyle === 'always show') {
    lineDatapointClass = ' chart-line--always'
  }
  if (config?.barHasBorder === 'false') {
    barBorderClass = ' chart-bar--no-border'
  }

  let innerContainerClasses = ['cove-component__inner']

  config?.subtext && innerContainerClasses.push('component--has-subtext')
  config?.biteStyle && innerContainerClasses.push(`bite__style--${config.biteStyle}`)
  config?.general?.isCompactStyle && innerContainerClasses.push(`component--isCompactStyle`)

  // ! these two will be retired.
  config?.shadow && innerContainerClasses.push('shadow')
  config?.visual?.roundedBorders && innerContainerClasses.push('bite--has-rounded-borders')

  let sparkLineStyles = {
    width: '100%'
  }

  // Starting work on combining legend classes.
  // Using short circuiting to check between charts & maps for now.
  const getListPosition = () => {
    if (config?.legend?.position === 'side' && config?.legend?.singleColumn) return 'legend-container__ul--single-column'
    if (config?.legend?.position === 'bottom' && config?.legend?.singleRow) return 'single-row'
    if (config?.legend?.verticalSorted && !config?.legend?.singleRow) return 'vertical-sorted'
    return ''
  }

  const getUlClasses = () => {
    const ulClasses = ['legend-container__ul']
    ulClasses.push(getListPosition())
    return ulClasses
  }
  const legendOuterClasses = [`${config?.legend?.position}`, `${getListPosition()}`, `cdcdataviz-sr-focusable`, `${viewport}`]

  const legendClasses = {
    aside: legendOuterClasses,
    section: ['legend-container'],
    ul: getUlClasses(),
    li: ['single-legend-item', 'legend-container__li'],
    title: ['legend-container__title'],
    resetButton: ['legend-container__reset-button', 'btn', 'clear'],
    description: ['legend-container__description']
  }

  return { innerContainerClasses, barBorderClass, lineDatapointClass, sparkLineStyles, legendClasses }
}
