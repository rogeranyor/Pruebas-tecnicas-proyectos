import React, { useContext, useEffect, useRef } from 'react'
import { booksProvider } from '../../context/bookscontext'
import { updateFilters } from '../../services/filtersLogic'
import { PAGES } from '../../consts/filters'    

function pagesFilter() {
    const context = useContext(booksProvider);
    const setFilters = context?.setFilters || (() => { });
    const filters = context?.filters
    const maxPagesContext = context?.maxPages || 0

    return (
        <section style={{ margin: "5px", width: "300px", textAlign: "initial" }} >
            <h4>Filtrar por páginas</h4>
            <div style={{ display: "flex", marginTop: "40px" }}>
                <input type='range' min='0' max={maxPagesContext} style={{ width: "175px" }}
                    onChange={(e) => { updateFilters(setFilters, filters, PAGES, parseInt(e.target.value)) }}
                    defaultValue={maxPagesContext}
                >
                </input>
                <p style={{ color: "white", margin: "0", marginLeft: "10px", width: "100px" }}>Máximo: {filters?.PAGES}</p>
            </div>
        </section>
    )
}

export default pagesFilter