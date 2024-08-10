import { useState } from 'react'
import Header from './component/Header/Header'
import Code from './component/Header/Code'
import DataProvider from './context/DataProvider'
import Result from './component/Result'
function App() {

  return (
    < >
    <DataProvider>
      <Header/>
      <Code />
      <Result/>
      </DataProvider>
    </>
  )
}

export default App
