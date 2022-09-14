import React from 'react'
import csvDownload from 'json-to-csv-export'

const CsvDownload = (props) => {
  const { data, filename, ...others } = props

  return (
    <button onClick={() => csvDownload({ data, filename })} {...others}>
      {props.children || 'Download Data'}
    </button>
  )
}
export default CsvDownload
