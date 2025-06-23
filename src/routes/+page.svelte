<script lang="ts">
	import { marked } from 'marked';

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
			<div class="content">{@html marked(md.content)}</div>
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
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.main {
		overflow-x: hidden;
                width: 100%;
		padding-left: 50px;
                padding-bottom: 20px;
	}

	.title {
		padding-bottom: 20px;
		padding-top: 20px;
		font-size: 30px;
		font-weight: 700;
	}

	.link {
		text-decoration: none;
		color: white;
		padding: 3px;
		margin: 0px;
	}

	.link:hover {
		color: black;
                background-color: white;
	}

	.content {
		font-size: 18px;
		white-space: pre-wrap;
	}
</style>
