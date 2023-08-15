import React from 'react'
import Header from './components/header'
import Filters from './components/Filters'
import InfoBook from './components/info-book'
import GridLibrosDisponibles from './components/GridLibrosDisponibles'
import GridLibrosGuardados from './components/GridLibrosGuardados'
import './App.css'
import { BooksProvider } from './context/bookscontext'
function App() {


  return (
    <>
      <BooksProvider>
        <Header />
        <div className='main-layout' >
          <div className='main-container'>
            <Filters />
            <div id="books-container" className="content-container">
              <GridLibrosDisponibles />
              <GridLibrosGuardados />
            </div>
          </div>
          <InfoBook />
        </div>
      </BooksProvider>
    </>
  )
}

export default App
