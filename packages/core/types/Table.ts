export type Table = {
  caption?: string
  cellMinWidth?: number
  collapsible?: boolean
  dateDisplayFormat?: string
  download?: boolean
  downloadImageButton?: boolean
  downloadPdfButton?: boolean
  excludeColumns?: string[]
  expanded?: boolean
  fontSize: 'small' | 'medium' | 'large'
  height?: number
  indexLabel?: string
  label?: string
  limitHeight?: boolean
  show?: boolean
  showDataTableLink?: boolean
  showDownloadImgButton?: boolean
  showDownloadPdfButton?: boolean
  showDownloadUrl?: boolean
  showVertical?: boolean
}
