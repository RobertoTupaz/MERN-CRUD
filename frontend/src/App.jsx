import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import UpdateBook from './pages/UpdateBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/books/create' element={ <CreateBook></CreateBook> } />
      <Route path='/books/details/:id' element={ <ShowBook></ShowBook> } />
      <Route path='/books/delete/:id' element={ <DeleteBook></DeleteBook> } />
      <Route path='/books/update/:id' element={ <UpdateBook></UpdateBook> } />
    </Routes>
  )
}

export default App