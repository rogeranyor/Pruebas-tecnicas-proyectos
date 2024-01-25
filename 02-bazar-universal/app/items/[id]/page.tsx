/* eslint-disable @next/next/no-img-element */
'use client'
import { ProductExtended } from '@/types/Product';
import { useEffect, useState } from 'react';
import { FooterMainCardInfo, HeaderMainCardInfo, MainCardInfo, Slider, StarComponent } from './components/CardComponents';

export default function Item() {
    const [product, setProducts] = useState<ProductExtended | undefined>()
    const [loading, setLoading] = useState(true)

    const id = parseInt(document.location.href.split('/')?.pop() || '');

    useEffect(() => {
        fetch(process.env.REACT_APP_BE_URL + `/api/items/${id}`)
            .then(response => response.json())
            .then(data => {
                const product = data as ProductExtended
                setProducts(product)
            })
            .finally(() => setLoading(false))
    }, [id])

    return (
        <div className="flex flex-col py-10 gap-y-5 w-full xl:w-5/6 mx-auto">
            {
                loading ?
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    </div>
                    :
                    <div className="w-full xl:w-5/6 mx-auto">
                        <main className="mx-auto flex flex-col justify-between lg:flex-row gap-y-5 gap-x-10 max-w-6xl p-5 rounded-lg lg:justify-center bg-persian-blue-950 bg-opacity-70 ">
                            <section className="h-[350px] w-[100%] max-w-md mx-auto lg:w-[450px] object-cover rounded-lg" >
                                <Slider images={product?.images || []} />
                            </section>
                            <section className='flex flex-col  gap-y-5 w-full'>
                                <HeaderMainCardInfo product={product} />
                                <StarComponent rating={product?.rating} />
                                <MainCardInfo product={product} />
                                <FooterMainCardInfo product={product} />
                            </section>
                        </main>
                    </div>
            }
        </div>

    )
}
