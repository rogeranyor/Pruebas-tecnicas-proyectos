'use client'
import Link from "next/link";
import { cartContext } from "../context/cart-context";
import { useContext } from "react";
import { svgCart } from "../svgs/svgs";

export function Header() {
    const context = useContext(cartContext)
    return (
        <header className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-4xl text-yellow-orange-50 ">Universal bazar</Link>
            <div className="group flex items-center justify-between gap-x-2 hover:cursor-pointer">
                {svgCart()}
                <Link href="/cart" className="text-yellow-orange-50 font-semibold text-xl">{context.total} items</Link>
            </div>
        </header>
    )
}