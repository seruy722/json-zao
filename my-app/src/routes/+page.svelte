<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Welcome to first project</h1>

<div>ID {data.product.id}</div>
<div>TITLE {data.product.title}</div>
<img src={data.product.thumbnail} alt="thumbnailImage" />
