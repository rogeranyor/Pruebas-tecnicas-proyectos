// api/items.js
import type { IProduct, ProductDBResponse, ProductExtended, ProductsApiResponse } from '../../../../types/Product.ts'
import { getAllProducts } from '../../services/obtainItems'


export async function GET(request: Request, response: Response): Promise<Response> {
    try {
        const { href } = new URL(request.url);

        const id = parseInt(href.split('/')?.pop() || '');

        const rest = await getAllProducts()

        if (!id) throw new Error('No id provided')
        rest.products = rest.products.filter((product: IProduct) => product.id === id);
        rest.total = rest.products.length;

        return Response.json(rest.products[0]);

    } catch (err: any) {
        return Response.json({ "err": err.message });
    }
}


