import { ConfigRow } from '../types/ConfigRow'

export const getVizRowColumnLocator = (rows: ConfigRow[]) =>
  rows.reduce((acc, curr, index) => {
    curr.columns?.forEach((column, columnIndex) => {
      if (column.widget !== undefined) acc[column.widget] = { row: index, column: columnIndex }
    })
    if (curr.footnotesId) acc[curr.footnotesId] = { row: index, column: 0 }
    return acc
  }, {})
