'use client'
import { useSearchParams } from 'next/navigation'
export function Form() {

    const params = useSearchParams()
    const search = params.get('q')

    return (
        <form className="lg:w-1/2 w-full mx-auto my-12" action="/items" >
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-yellow-orange-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input defaultValue={search?.toString()} list='search-options' name="q" type="q" id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-yellow-orange-50 border
           border-yellow-orange-50 placeholder-gray-300 rounded-lg bg-gray-600 focus:ring-orange-600 
           "
                    placeholder="Laptop,smartphones..." ></input>
                <button type="submit"
                    className="text-black font-bold absolute right-2.5 bottom-2.5 bg-yellow-orange-50
            focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-yellow-300 duration-200
         rounded-lg text-sm px-4 py-2">Search</button>
            </div>
            <datalist id="search-options">
                <option value="laptops" />
                <option value="smartphones" />
                <option value="fragrances" />
                <option value="skincare" />
                <option value="groceries" />
                <option value="home-decoration" />
            </datalist>
        </form>
    )
}