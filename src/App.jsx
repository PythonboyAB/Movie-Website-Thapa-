import { useState } from 'react'
import './App.css'
import { BrowserRouter ,  Routes , Route } from "react-router-dom";
import { Home } from "./Components/Home";
import  SingleMovie  from "./Components/SingleMovie";
import { Error } from "./Components/Error";


function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='movie/:id' element={<SingleMovie/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    
      
    
    </>
     )
}

export default App
