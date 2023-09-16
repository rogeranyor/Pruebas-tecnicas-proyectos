import React, { useContext } from 'react'
import '../../styles/Filters.css'
import { booksProvider } from '../../context/bookscontext'
import PagesFilter from './PagesFilter'
import GenreFilter from './GenreFilter'
import SelectorFilter from './SelectorFilter'



function Filters() {
  return (
    <main style={{ zIndex: "10", paddingBottom: "15px" }}>
      <section className="filters">
        <PagesFilter />
        <GenreFilter />
      </section>
      <SelectorFilter />
    </main>
  )
}

export default Filters