'use client'
import { ProductDBResponse, ProductExtended } from '@/types/Product';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import CardProduct from '../components/card-product';


export default function Item() {

    const params = useSearchParams()
    const search = params.get('q')
    const [products, setProducts] = useState<ProductDBResponse>({ products: [], total: 0 })
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("/api/items?q=" + search)
            .then(response => response.json())
            .then(data => {
                const products = data as ProductDBResponse
                setProducts(products)
            })
            .finally(() => setLoading(false))
    }, [search])


    return (
        <div className="flex flex-col gap-y-5 w-full xl:w-5/6 mx-auto">
            {
                loading ?
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-solid border-b-4 border-white"></div>
                    </div>
                    :
                    <div>
                        <section className="flex gap-10 sm:px-5 pb-10 justify-between flex-wrap ">
                            <h1 className="text-2xl font-bold   text-white">Search results for: {search}</h1>
                            <h2 className="text-2xl font-bold  text-white">Total: {products?.total}</h2>
                        </section>
                        <div className='grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-y-5 sm:gap-10'>
                            {products?.products?.map(CardProduct)}
                        </div>
                    </div>

            }
        </div>

    )
}