import React, { useRef, useContext, useEffect } from 'react'
import { changeSelection, generateBar, updateBar } from '../../helpers/helpers'
import { booksProvider } from '../../context/bookscontext'

function SelectorFilter() {
    const context = useContext(booksProvider);
    const selectedBook = context?.selectedBook || null;
    const filteredBooks = context?.filteredBooks || [];
    const booksSaved = context?.booksSaved || [];
    const bottomLineRef = useRef<HTMLDivElement>(null)

    const librosDisponibles = document.getElementById('libros-disponibles') as HTMLButtonElement
    const librosGuardados = document.getElementById('libros-guardados') as HTMLButtonElement

    window.addEventListener('resize', () => updateBar(librosDisponibles, librosGuardados, bottomLineRef.current))
    
    // generates the first bar on load
    librosDisponibles?.dispatchEvent(new Event('dblclick'))

    librosDisponibles?.addEventListener('dblclick', () => {
        if (bottomLineRef.current?.style.getPropertyValue('--opacity') !== '1' || bottomLineRef.current === null) {
            const { left, width, bottom } = librosDisponibles.getBoundingClientRect();
            generateBar(left, width, bottom, bottomLineRef.current)
        }
    })

    useEffect(() => {
        if (selectedBook) {
            updateBar(librosDisponibles, librosGuardados, bottomLineRef.current)
        }
    }, [selectedBook])

    librosDisponibles?.addEventListener('click', () => {
        const { left, width, bottom } = librosDisponibles.getBoundingClientRect();
        generateBar(left, width, bottom, bottomLineRef.current, true)

    })

    librosGuardados?.addEventListener('click', () => {
        const { left, width, bottom } = librosGuardados.getBoundingClientRect();
        generateBar(left, width, bottom, bottomLineRef.current, true)

    })


    return (
        <div className='selector-filter' >
            <button onClick={() => changeSelection("libros-disponibles")} id='libros-disponibles' className="change-selection active">Libros disponibles: {filteredBooks.length}</button>
            <button onClick={() => changeSelection("libros-guardados")} id='libros-guardados' className="change-selection">Libros guardados: {booksSaved.length}</button>
            <div ref={bottomLineRef} className='bottomLine' id='bottom-line'></div>
        </div>
    )
}

export default SelectorFilter