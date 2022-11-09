import React from 'react'
import csvDownload from 'json-to-csv-export'

const CsvDownload = (props) => {
  const { data, filename, delimiter, ...others } = props

  return (
    <button onClick={() => csvDownload({ data, filename, delimiter })} {...others}>
      {props.children || 'Download Data'}
    </button>
  )
}
export default CsvDownload
