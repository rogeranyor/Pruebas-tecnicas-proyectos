import type { IProduct, ProductDBResponse, ProductsApiResponse } from '../../../types/Product.ts'
import fs from 'fs/promises'

const PRODUCTS_PATH = process.cwd() + '/public/products.json';

export async function getAllProducts(): Promise<ProductDBResponse> {
    try {
        const products = await fs.readFile(PRODUCTS_PATH, 'utf8')
        const parsedProducts = JSON.parse(products)
        const mappedProducts = parsedProducts.products.map((product: IProduct) => {
            const { price, discountPercentage } = product
            const discountPrice = price - (price * (discountPercentage / 100))
            return {
                ...product,
                discountPrice,
                hasStock: Boolean(product.stock),
            }
        })
        return { products: mappedProducts, total: parsedProducts.total }
    } catch (error) {
        throw new Error((error as Error).message)
    }
}