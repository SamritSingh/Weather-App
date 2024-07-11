import React from 'react'               
import ReactDOM from 'react-dom/client'                                   //imports DOM specific methods
import App from './App.jsx'                                                   
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(              //creates a root for rendering react app
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
