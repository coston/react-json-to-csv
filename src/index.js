import React from 'react'
import csvDownload from 'json-to-csv-export'

const Json2Csv = props => {
  const { data, filename, ...others } = props

  return (
    <button onClick={() => csvDownload(props.data, props.filename)} {...others}>
      {props.children || 'Download Data'}
    </button>
  )
}
export default Json2Csv
