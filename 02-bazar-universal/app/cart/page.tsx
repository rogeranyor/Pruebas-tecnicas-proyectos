'use client'
import { useContext } from "react"
import { cartContext } from "../context/cart-context"
import { ProductExtended } from "@/types/Product"
import { CartButton, HeartButton } from "../components/Buttons"

export default function CartPage() {
    const context = useContext(cartContext)
    return (
        <div className="text-white px-10">
            <h1 className="text-4xl pb-5 font-semibold">Cart</h1>
            <div className="flex flex-col w-full gap-5 ">
                <section className="flex gap-10 flex-wrap ">
                    {context.cart.map((item: ProductExtended) => {
                        return (
                            <div key={item.id} className="flex gap-x-5 w-[400px] bg-persian-blue-950 bg-opacity-70 p-5 rounded-lg">
                                <img src={item.thumbnail} className="w-32 h-32 rounded-full object-cover" />
                                <div className="flex flex-col gap-y-5">
                                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                                    <h2 className="text-2xl font-semibold">{item.discountPrice.toFixed(2)} €</h2>
                                </div>
                                <div className="flex flex-1 justify-end">
                                    <CartButton {...item} />
                                </div>
                            </div>
                        )
                    })}
                    {context.cart.length === 0 && <h1 className="text-4xl px-10 pb-10 font-semibold">Cart is empty</h1>}
                </section>
                <h1 className="text-4xl font-semibold">Favorites</h1>
                <section className="flex gap-10 flex-wrap">
                    {context.favorites.map((item: ProductExtended) => {
                        return (
                            <div key={item.id} className="flex gap-x-5  w-[400px] bg-persian-blue-950 bg-opacity-70 p-5 rounded-lg">
                                <img src={item.thumbnail} className="w-32 h-32 rounded-full object-cover" />
                                <div className="flex flex-col gap-y-5">
                                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                                    <h2 className="text-2xl font-semibold">{item.discountPrice.toFixed(2)} €</h2>
                                </div>
                                <div className="flex flex-1 justify-end">
                                    <HeartButton {...item} />
                                </div>
                            </div>
                        )
                    })}
                    {context.favorites.length === 0 && <h1 className="text-4xl px-10 pb-10 font-semibold">Favorites is empty</h1>}
                </section>
            </div>
        </div>
    )
}