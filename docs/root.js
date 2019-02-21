// example Root component
import React from 'react'
import { StyleProvider } from 'mdx-go'
import Csv2Json from '../src/index'
import mockData from './mockData.js'


const components = {
  Csv2Json,
  mockData,
}

const theme = {
  LiveCode: {
    borderRadius: '4px',
  },
  LiveEditor: {
    color: 'plum',
    backgroundColor: 'black',
    overflow: 'scroll'
  }
}


export const Root = props =>(
  <StyleProvider components={components} theme={theme}>
  <div style={{
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '32px',
    paddingBottom: '32px',
    maxWidth: '1000px'
  }}>
    {props.children}
  </div>
  
  </StyleProvider>
)