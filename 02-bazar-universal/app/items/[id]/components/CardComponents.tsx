import { CartButton, HeartButton } from "@/app/components/Buttons"
import { ProductExtended } from "@/types/Product"
import { Carousel } from "flowbite-react"

export function HeaderMainCardInfo({ product }: { product: ProductExtended | undefined }) {
    if (product === undefined) return null
    return (
        <header className="flex w-full items-center gap-x-4">
            <h2 className="text-3xl font-bold capitalize  text-white">{product?.title}   </h2>
            {
                product?.hasStock ?
                    <p className="text-lg min-w-max text-green-500">In Stock! - {product.stock}</p>
                    :
                    <p className="text-lg min-w-max w-max text-red-500">Out of Stock</p>
            }
            <div className='flex flex-1 justify-end'>
                <HeartButton {...product} />
            </div>
        </header>
    )
}
export function MainCardInfo({ product }: { product: ProductExtended | undefined }) {
    if (product === undefined) return null
    return (
        <main className='flex flex-col gap-y-5 max-w-lg'>
            {
                product?.discountPrice ?
                    <section>
                        <h2 className="text-white text-2xl">Price: {product?.discountPrice.toFixed(2)} €
                            <span className='text-red-400'> -{product.discountPercentage} %</span></h2>
                        <small className='text-white  text-sm p-0'>Previous price: <span className="line-through text-red-500">{product?.price.toFixed(2)} €</span></small>
                    </section>
                    :
                    <h2>{product?.price.toFixed(2)} €</h2>
            }
            <section>
                <p className="text-lg text-white">Description:</p>
                <p className="text-lg text-white">{product?.description}</p>
            </section>
            <p className="text-lg text-white">Brand: {product?.brand}</p>
            <p className="text-lg text-white">{product?.hasStock}</p>
        </main>
    )
}
export function FooterMainCardInfo({ product }: { product: ProductExtended | undefined }) {

    if (product === undefined) return null
    return (
        <footer className="flex flex-1 items-end justify-between ">
            <small className="text-sm capitalize text-white">Category:  {product?.category}</small>
            <CartButton {...product} />
        </footer>
    )
}
export function StarComponent({ rating }: { rating: number | undefined }) {

    if (rating === undefined) return null
    const boolArray = new Array(5).fill(true).map((_, i) => (i + 1) < rating)
    return (
        <div className="flex items-center">
            {
                boolArray.map((bool, i) => (
                    <svg key={i} className={`w-4 h-4 ${bool ? 'text-yellow-300' : 'text-gray-300'} me-1`} aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))
            }
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
        </div>

    )

}
export function Slider({ images }: { images: string[] | undefined }) {
    if (images === undefined) return null
    return (
        <Carousel >
            {
                images.map((image, i) => (
                    <img key={i} src={image} alt="Image" />
                ))
            }
        </Carousel>
    )

}