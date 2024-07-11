import React from 'react'                                 //import react library
import Weather from './components/Weather'                //import component 'weather'

const App =()=>{                                          //renders the weather component
  return (
    <div className='app'> 
      <Weather/>                                          
    </div>
  )
}

export default App
