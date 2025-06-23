<script lang="ts">
	import { marked } from 'marked';

	interface mdContent {
		content: string;
		title: string;
	}

	export let data;
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
			<pre class="link">
                                <a href="#{section.title.trim()}" class="link">
                                    {section.title}
                                </a>
                        </pre>
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
		width: 1500px;
		background-color: grey;
		color: white;
		overflow-y: auto;
		padding: 10px;
	}

	.main {
		overflow-x: hidden;
		padding-left: 50px;
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
		padding: 0px;
		margin: 0px;
	}

	.content {
		font-size: 18px;
	}
</style>
