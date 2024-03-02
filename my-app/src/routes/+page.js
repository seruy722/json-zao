/** @type {import('./$types').PageLoad} */
export async function load() {
	const request = await fetch('https://dummyjson.com/products/21');
	const response = await request.json();
	console.log('product', response);
	return {
		product: response
	};
}
