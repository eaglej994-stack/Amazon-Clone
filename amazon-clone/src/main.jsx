import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataProvider from './Component/DataProvider/DataPorvider.jsx'
import { initialState,reducer } from './Utility/reducer.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider> 
  </React.StrictMode>,
)
