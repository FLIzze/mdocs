<script lang="ts">
	export let data;

	interface mdContent {
		content: string;
		title: string;
	}

	const mdContent: mdContent[] = [];

	data.sections.forEach((section) => {
		mdContent.push({
			content: section.content, 
			title: section.title
		});
	});
</script>

<div class="container">
	<aside class="sidebar">
		{#each data.sections as section}
			<a
				href="#{section.title.trim()}"
				class="link"
				style="padding-left: {section.title.length -
					section.title.trimStart().length}ch"
			>
				{section.title.trim()}
			</a>
		{/each}
	</aside>

	<main class="main">
		{#each mdContent as md}
			<div class="title" id={md.title.trim()}>{md.title}</div>
                        <div>{md.content}</div>
		{/each}
	</main>
</div>

<style>
	:global {
		* {
			padding: 0;
			margin: 0;
			font-family: 'Courier New', Courier, monospace;
		}
	}

	.title {
		padding: 25px 0;
		font-size: 25px;
		font-weight: 700;
	}

	.container {
		display: flex;
		flex-direction: row;
                height: 100vh;
	}

	.sidebar {
		background-color: #f8f8f8;
                width: 500px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		padding-top: 30px;
	}

	.main {
		width: 100%;
		overflow-y: auto;
		padding: 5px 30px;
	}

	.link {
		text-decoration: none;
	}

	.link:hover {
		color: red;
	}
</style>
