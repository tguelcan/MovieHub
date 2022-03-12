<script>
	import theme from '$lib/store/theme';
	import FooterElement from '$components/bootstrap/FooterElement.svelte';
	import NavigationElement from '$components/bootstrap/NavigationElement.svelte';

	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="{$theme} flex flex-col h-screen">
	<NavigationElement />
	<main class="bg-gray-light dark:bg-gray-dark flex-grow"><slot /></main>
	<FooterElement />
</div>
