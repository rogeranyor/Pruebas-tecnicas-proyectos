import { ProductExtended } from '@/types/Product'
import { svgHeart } from '../svgs/svgs'
import { cartContext } from '../context/cart-context'
import { useContext } from 'react'

export function HeartButton(item: ProductExtended | undefined) {
    const context = useContext(cartContext)
    return (
        <button onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (context.favorites.find((i: ProductExtended) => i.id === item?.id)) {
                context.setFavorites(context.favorites.filter((i: ProductExtended) => i.id !== item?.id))
                localStorage.setItem('favorites', JSON.stringify(context.favorites.filter((i: ProductExtended) => i.id !== item?.id)))
                return
            }
            context.setFavorites([...context.favorites, item])
            localStorage.setItem('favorites', JSON.stringify([...context.favorites, item]))
        }} aria-label={'addToFavorites ' + item?.title} className="inline-flex  items-center 
              self-end  text-sm font-medium text-center text-white   
               focus:outline-solid  focus:ring-blue-300 ">
            {svgHeart(context.favorites.find((i: ProductExtended) => i.id === item?.id))}

        </button>
    )
}
import { svgCart } from '../svgs/svgs'

export function CartButton(item: ProductExtended | undefined) {
    const context = useContext(cartContext)
    return (
        <button onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (context.cart.find((i: ProductExtended) => i.id === item?.id)) {
                context.setCart(context.cart.filter((i: ProductExtended) => i.id !== item?.id))
                localStorage.setItem('cart', JSON.stringify(context.cart.filter((i: ProductExtended) => i.id !== item?.id)))
                return
            }
            context.setCart([...context.cart, item])
            localStorage.setItem('cart', JSON.stringify([...context.cart, item]))

        }} aria-label={'addToCart ' + item?.title} className="inline-flex  items-center 
              self-end  text-sm font-medium text-center text-white   
               focus:outline-solid  focus:ring-blue-300 ">
            {svgCart(context.cart.find((i: ProductExtended) => i.id === item?.id))}
        </button>
    )
}