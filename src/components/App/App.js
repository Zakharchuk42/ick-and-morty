import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from '../Header/Header'
import Characters from '../../pages/Characters'
import ToDo from '../../pages/ToDo'
import NotFound from '../../pages/NotFound'

import './App.scss'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/rick-and-morty/' element={<Characters/>} />
        <Route path='/rick-and-morty/to-do' element={<ToDo/>} />
        <Route path='/rick-and-morty/error-page' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
