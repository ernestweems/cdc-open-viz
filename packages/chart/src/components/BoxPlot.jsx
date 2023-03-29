import React, { useContext, useEffect } from 'react'
import { BoxPlot } from '@visx/stats'
import { Group } from '@visx/group'
import ConfigContext from '../ConfigContext'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

const CoveBoxPlot = ({ xScale, yScale }) => {
  const { config, setConfig } = useContext(ConfigContext)
  const boxWidth = xScale.bandwidth()
  const constrainedWidth = Math.min(40, boxWidth)
  const color_0 = colorPalettesChart[config?.palette][0] ? colorPalettesChart[config?.palette][0] : '#000'

  // tooltips
  const tooltip_id = `cdc-open-viz-tooltip-${config.runtime.uniqueId}`
  const handleTooltip = d => {
    return `
      <strong>${d.columnCategory}</strong></br>
      ${config.boxplot.labels.q1}: ${d.columnFirstQuartile}<br/>
      ${config.boxplot.labels.q3}: ${d.columnThirdQuartile}<br/>
      ${config.boxplot.labels.iqr}: ${d.columnIqr}<br/>
      ${config.boxplot.labels.median}: ${d.columnMedian}
    `
  }

  useEffect(() => {
    if (config.legend.hide === false) {
      setConfig({
        ...config,
        legend: {
          ...config.legend,
          hide: true
        }
      })
    }
  }, []) // eslint-disable-line

  return (
    <ErrorBoundary component='BoxPlot'>
      <Group className='boxplot' key={`boxplot-group`}>
        {config.boxplot.plots.map((d, i) => {
          const offset = boxWidth - constrainedWidth
          const radius = 4
          return (
            <Group key={`boxplotplot-${i}`}>
              {config.boxplot.plotNonOutlierValues &&
                d.nonOutlierValues.map((value, index) => {
                  return <circle cx={xScale(d.columnCategory) + Number(config.yAxis.size) + boxWidth / 2} cy={yScale(value)} r={radius} fill={'#ccc'} style={{ opacity: 1, fillOpacity: 1, stroke: 'black' }} key={`boxplot-${i}--circle-${index}`} />
                })}
              <BoxPlot
                data-left={xScale(d.columnCategory) + config.yAxis.size + offset / 2 + 0.5}
                key={`box-plot-${i}`}
                min={Number(d.columnMin)}
                max={Number(d.columnMax)}
                left={Number(xScale(d.columnCategory)) + Number(config.yAxis.size) + offset / 2 + 0.5}
                firstQuartile={Number(d.columnFirstQuartile)}
                thirdQuartile={Number(d.columnThirdQuartile)}
                median={Number(d.columnMedian)}
                boxWidth={constrainedWidth}
                fill={color_0}
                fillOpacity={0.5}
                stroke='black'
                valueScale={yScale}
                outliers={config.boxplot.plotOutlierValues ? d.columnOutliers : []}
                outlierProps={{
                  style: {
                    fill: `${color_0}`,
                    opacity: 1
                  }
                }}
                medianProps={{
                  style: {
                    stroke: 'black'
                  }
                }}
                boxProps={{
                  style: {
                    stroke: 'black',
                    strokeWidth: config.boxplot.borders === 'true' ? 1 : 0
                  }
                }}
                maxProps={{
                  style: {
                    stroke: 'black'
                  }
                }}
                container
                containerProps={{
                  'data-tooltip-html': handleTooltip(d),
                  'data-tooltip-id': tooltip_id
                }}
              />
            </Group>
          )
        })}
      </Group>
    </ErrorBoundary>
  )
}

export default CoveBoxPlot