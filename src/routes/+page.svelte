<script>
	export let data;
</script>

<div class="container">
	<aside class="sidebar">
		{#each data.sections as section}
			<pre>{section.title}</pre>
		{/each}
	</aside>

	<main class="main">
		{#each data.sections as section}
			<h2>{section.title}</h2>
			<pre>{section.content}</pre>
		{/each}
	</main>
</div>

<style>
	:global {
		* {
			padding: 0;
			margin: 0;
		}
	}

	.container {
		display: flex;
		height: 100vh;
	}

	.sidebar {
		width: 500px;
		background-color: grey;
		color: white;
		overflow-y: auto;
		padding: 10px;
	}

	.main {
		overflow-x: hidden;
		padding: 1rem;
	}
</style>
