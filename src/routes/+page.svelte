<script>
	export let data;
	console.log(data);
</script>

<div class="container">
	<aside class="sidebar">
		{#each data.sections as section}
			<pre>
				<a href="#{section.id}" class="link">
					{section.title}
				</a>
			</pre>
		{/each}
	</aside>

	<main class="main">
		{#each data.sections as section}
			<h2 class="title" id={section.id}>{section.title}</h2>
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

	.title {
		padding-bottom: 20px;
		padding-top: 20px;
	}

	.link {
		text-decoration: none;
	}
</style>
