import React, { useRef, useContext, useEffect } from 'react'
import { changeSelection, generateBar, updateBar } from '../../helpers/helpers'
import { booksProvider } from '../../context/bookscontext'

function SelectorFilter() {
    const context = useContext(booksProvider);
    const selectedBook = context?.selectedBook || null;
    const filteredBooks = context?.filteredBooks || [];
    const booksSaved = context?.booksSaved || [];
    const bottomLineRef = useRef<HTMLDivElement>(null)

    const librosDisponibles = document.getElementById('libros-disponibles') as HTMLElement
    const librosGuardados = document.getElementById('libros-guardados') as HTMLElement

    const initialPosition = librosDisponibles?.getBoundingClientRect()

    if (bottomLineRef.current?.style.getPropertyValue('--opacity') !== '1' || bottomLineRef.current === null) {
        generateBar(initialPosition?.left, initialPosition?.width, initialPosition?.bottom, bottomLineRef.current)
    }

    window.addEventListener('resize', () => updateBar(librosDisponibles, librosGuardados, bottomLineRef.current))

    window.addEventListener('scroll', () => updateBar(librosDisponibles, librosGuardados, bottomLineRef.current))

    useEffect(() => {
        if (selectedBook) {
            const { left, width, bottom } = librosDisponibles.getBoundingClientRect();
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
        <div style={{ display: "flex", gap: "15px", justifyContent: "space-around", marginTop: "10px" }}>
            <button onClick={() => changeSelection("libros-disponibles")} id='libros-disponibles' className="change-selection active">Libros disponibles: {filteredBooks.length}</button>
            <button onClick={() => changeSelection("libros-guardados")} id='libros-guardados' className="change-selection">Libros guardados: {booksSaved.length}</button>
            <div ref={bottomLineRef} className='bottomLine' id='bottom-line'></div>
        </div>
    )
}

export default SelectorFilter