import { ProductExtended } from "@/types/Product";
import { CartButton, HeartButton } from "./Buttons";

export default function CardProduct(item: ProductExtended) {
    return (
        <a href={`/items/${item.id}`} key={item.id}
            className="flex  justify-between w-[450px] max-w-[90vw] px-3 py-3 mx-auto border border-solid border-transparent
            hover:border hover:border-yellow-orange-50 hover:border-solid duration-200 rounded-lg gap-x-7 
             bg-persian-blue-950 bg-opacity-70 ">
            <img className="rounded-full my-auto w-40 h-40 object-cover" src={item.thumbnail} alt={item.title + " photo"} />
            <section className="px-2 py-3 flex flex-1 w-full flex-col justify-between ">
                <main>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-orange-50 ">{item.title}</h5>
                    <p className="mb-3 leading-[1.2rem] line-clamp-2 text-persian-blue-400 opacity-90 ">{item.description}</p>
                </main>
                <footer className=' justify-between flex'>
                    <HeartButton {...item} />
                    <CartButton {...item} />
                </footer>
            </section>
        </a>
    )
}
