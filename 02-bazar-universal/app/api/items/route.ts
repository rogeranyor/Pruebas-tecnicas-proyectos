// api/items.js
import type { IProduct, ProductDBResponse, ProductsApiResponse } from '../../../types/Product.ts'
import { getAllProducts } from '../services/obtainItems'


export async function GET(request: Request, response: Response): Promise<Response> {
    try {

        const { searchParams } = new URL(request.url);

        // Ensure 'q' query parameter is provided in the URL
        const category = searchParams.get('q');

        const rest = await getAllProducts()
        if (!category) return Response.json(rest)

        rest.products = rest.products.filter((product: IProduct) => product.category === category)
        rest.total = rest.products.length
        return Response.json(rest)

    } catch (err: any) {
        return Response.json({ "err": err.message });
    }
}


