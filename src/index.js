import React from 'react'
import csvDownload from 'json-to-csv-export'

const CsvDownload = props => {
  const { data, filename, ...others } = props

  return (
    <button onClick={() => csvDownload(props.data, props.filename)} {...others}>
      {props.children || 'Download Data'}
    </button>
  )
}
export default CsvDownload
