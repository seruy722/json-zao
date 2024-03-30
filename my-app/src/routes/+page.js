/** @type {import('./$types').PageLoad} */
export async function load() {
	const request = await fetch('https://dummyjson.com/products?limit=20');
	const response = await request.json();
	console.log('product', response);
	return {
		product: response.products
	};
}
