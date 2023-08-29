import { Brush } from '@visx/brush'
import BaseBrush from '@visx/brush/lib/BaseBrush'
import { Group } from '@visx/group'
import { PatternLines } from '@visx/pattern'
import { bisector } from 'd3-array'
import { useRef, useContext, useState, Fragment } from 'react'
import ConfigContext from '../ConfigContext'
import useMinMax from '../hooks/useMinMax'
import useScales from '../hooks/useScales'
import useReduceData from '../hooks/useReduceData'
import { ScaleSVG } from '@visx/responsive'

// this is just the rectangle part you drag
const BrushHandle = props => {
  let { x, height, isBrushActive } = props
  const pathWidth = 8
  const pathHeight = 15

  // test messing with x
  x = 100
  height = 700
  console.log('BrushHandle x, height, isBrushActive=', x, height, isBrushActive)

  if (!isBrushActive) {
    return null
  }
  return (
    <Group left={x + pathWidth / 2} top={(height - pathHeight) / 2}>
      <path fill='#f2f2f2' d='M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12' stroke='#999999' strokeWidth='1' style={{ cursor: 'ew-resize' }} />
    </Group>
  )
}

const withBrush = Component => {
  const styles = {
    border: '2px solid red'
  }

  const BrushComponent = props => {
    console.log('##### BrushComponent props', props)
    const { transformedData: data, config, isDebug, parseDate, formatDate } = useContext(ConfigContext)
    const { pattern_id, accent_color } = config.brush
    const getDate = d => new Date(d[config.xAxis.dataKey])
    const getXAxisData = d => (config.runtime.xAxis.type === 'date' ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
    const xAxisDataMapped = data.map(d => getXAxisData(d))

    const [xAxisBrushData, setXAxisBrushData] = useState(data)
    const brushData = undefined !== xAxisBrushData && xAxisBrushData.length ? xAxisBrushData : data

    // for Brush, using original data
    let { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, data)
    const ref = useRef(BaseBrush)
    const isBrush = true
    const { xMax, yMax, svgRef, seriesScale, height } = props
    console.log('heaight ', height)
    let origHeight = height
    const properties = { data, config, minValue, maxValue, isAllLine, existPositiveValue, xAxisDataMapped, xMax, yMax, isBrush }
    let { min, max } = useMinMax(properties)
    const { xScale, yScale } = useScales({ ...properties, min, max })

    // for Component using filtered brush data
    const xMaxComp = xMax
    let dynamicMarginTop = 0 || config.dynamicMarginTop
    const marginTop = 20
    let yMaxComp = config.isResponsiveTicks && config.showChartBrush && isBrush ? yMax + config.dynamicMarginTop / 4 + marginTop : yMax
    {/* prettier-ignore */ }
    ;({ minValue, maxValue } = useReduceData(config, brushData))
    const xAxisDataMappedComp = brushData.map(d => getXAxisData(d))
    const propsComp = { data: brushData, config, minValue, maxValue, isAllLine, existPositiveValue, xAxisDataMapped: xAxisDataMappedComp, xMax: xMaxComp, yMax: yMaxComp, isBrush }
    {/* prettier-ignore */}
    ;({ min, max } = useMinMax(propsComp))
    const { xScale: xScaleComp, yScale: yScaleComp } = useScales({ ...propsComp, min, max })

    // you can also specify y position but AreaChart did not require it at all
    const initialBrushPosition = {
      start: { x: 0 },
      end: { x: xMax }
    }
    // Helper for getting data to the closest date/category hovered.
    const getXValueFromCoordinateDate = x => {
      if (config.xAxis.type === 'categorical' || config.visualizationType === 'Combo') {
        let eachBand = xScale.step()
        let numerator = x
        const index = Math.floor(Number(numerator) / eachBand)
        return xScale.domain()[index - 1] // fixes off by 1 error
      }

      if (config.xAxis.type === 'date' && config.visualizationType !== 'Combo') {
        const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
        const x0 = xScale.invert(xScale(x)) // GETTING INVALID DATE ****
        const index = bisectDate(config.data, x0, 1)
        const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
        return val
      }
    }

    const onBrushChange = domain => {
      if (!domain) return
      const { x0, x1 } = domain
      let brushFilteredData = []
      brushFilteredData = config.data.filter(s => {
        const x = getDate(s).getTime()
        if (x > x0 && x < x1) {
          let date = formatDate(getXValueFromCoordinateDate(x))
          return s
        }
      })

      // dont let the number of points go below config.xAxis.numTicks ??? (TT)
      if (undefined !== brushFilteredData && brushFilteredData.length >= config.xAxis.numTicks) {
        setXAxisBrushData(brushFilteredData)
      }
    }

    // if brush not enabled, just return the chart with no brush
    if (!config.showChartBrush) {
      return <Component {...props} />
    }

    const disableMouseOver = () => {
      return false
    }

    //console.log('withBRUSH xScaleComp, yScaleComp', xScaleComp, yScaleComp)
    console.log('#### withBRUSH called, seriesScale props, origHeight, pattern_id, accent_color', props, origHeight, pattern_id, accent_color)
    return (
      <>
        {<Component {...props} seriesScale={seriesScale} brushData={xAxisBrushData} xScale={xScaleComp} yScale={yScaleComp} width={xMaxComp} height={yMaxComp} />}

        {/* <text>Brush should appear next</text> */}
        <Component
          id={'brush-chart'}
          className='brush-chart'
          hideBottomAxis
          hideLeftAxis
          seriesScale={seriesScale}
          xScale={xScale}
          yScale={yScale}
          yMax={yMax}
          xMax={xMax}
          height={yMax / 5}
          chartRef={svgRef}
          handleTooltipMouseOver={disableMouseOver}
          handleTooltipMouseOff={disableMouseOver}
          isDebug={isDebug}
          isBrush={true}
        >
          <PatternLines id={pattern_id} height={138} width={18} stroke={accent_color} strokeWidth={1} orientation={['diagonal']} style={styles} />
          <Brush
            id='theBrush'
            className='theBrush'
            xScale={xScale}
            yScale={yScale}
            width={xMax}
            height={yMax / 4}
            margin={0}
            handleSize={8}
            innerRef={ref}
            resizeTriggerAreas={['left', 'right']}
            brushDirection='horizontal'
            initialBrushPosition={initialBrushPosition}
            onChange={onBrushChange}
            selectedBoxStyle={{ fill: `url(#${pattern_id})` }}
            useWindowMoveEvents
            renderBrushHandle={props => <BrushHandle {...props} />}
            style={styles}
          />
        </Component>
      </>
    )
  }

  return BrushComponent
}

export default withBrush
