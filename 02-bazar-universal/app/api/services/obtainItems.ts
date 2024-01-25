import type { IProduct, ProductDBResponse, ProductExtended } from '../../../types/Product.ts'
import { promises as fs } from 'fs';

const PRODUCTS_PATH = process.cwd() + '/public/products.json';

export async function getAllProducts(): Promise<ProductDBResponse> {
    try {
        const products = await fs.readFile(PRODUCTS_PATH, 'utf8')

        const parsedProducts = JSON.parse(products)
        const mappedProducts: Array<ProductExtended> = parsedProducts.products.map((product: IProduct) => {
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

export async function getProductById(id: Number): Promise<ProductExtended> {

    const products = await getAllProducts()
    const product = products.products.find((product: ProductExtended) => product.id === id)

    if (!product) throw new Error('Product not found')

    return product
}
