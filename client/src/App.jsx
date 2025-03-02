import React from 'react'

import Homepage from "./pages/Homepage"

import Editorpage from "./pages/Editorpage"

import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage/>} />
          <Route path={"/editor/:roomID"} element={<Editorpage/>} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App