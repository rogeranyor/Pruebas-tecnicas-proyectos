// api/items.js
import type { IProduct, ProductDBResponse, ProductExtended, ProductsApiResponse } from '../../../../types/Product.ts'
import { getAllProducts } from '../../services/obtainItems'

export async function GET({ params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);

        const rest = await getAllProducts()

        if (!id) throw new Error('No id provided')
        rest.products = rest.products.filter((product: IProduct) => product.id === id);
        rest.total = rest.products.length;

        return {
            props: {
                product: rest.products[0],
            },
        };
    } catch (err: any) {
        return {
            props: {
                error: err.message,
            },
        };
    }
}

