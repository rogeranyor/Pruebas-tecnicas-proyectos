'use client'
import { createContext, useEffect, useState } from "react"

export const cartContext = createContext<any>({});

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        setCart(cart)
        setTotal(cart.length)
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
        setFavorites(favorites)

    }, [])
    useEffect(() => {
        setTotal(cart.length)
    }, [cart])

    return (
        <cartContext.Provider value={{
            cart,
            total,
            setCart,
            setTotal,
            favorites,
            setFavorites
        }}>
            {children}
        </cartContext.Provider>

    )
}