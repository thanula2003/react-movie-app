// import { useState } from 'react'
import "./css/index.css";
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Route ,Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='favorites' element= {<Favorites/>}></Route>
    </Routes>
     
    </>
  )
}


export default App
