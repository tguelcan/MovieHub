<script context="module">
	import Movies from '$lib/service/Movie';
	// @type {import('@sveltejs/kit').Load}
	export async function load() {
		const [upcoming, discover] = await Promise.allSettled([
			Movies.getUpcoming(),
			Movies.getDiscover()
		]);
		return {
			props: {
				upcoming: upcoming.value.ok && (await upcoming.value.json()),
				discover: discover.value.ok && (await discover.value.json())
			}
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import MoviePreview from '$components/elements/MoviePreview.svelte';
	import MovieSection from '$components/templates/MovieSection.svelte';
	import HeroSection from '$components/templates/HeroSection.svelte';

	export let upcoming, discover;
</script>

<svelte:head>
	<title>MOVIE:HUB</title>
</svelte:head>

<div class="mb-6">
	<HeroSection collection={upcoming} />
</div>

<div class="container space-y-6">
	<div>
		<h2>Upcoming</h2>
		<MovieSection collection={upcoming} />
	</div>
</div>
<div class="container mt-2">
	<h2>Discover</h2>
	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
		{#each discover.results as movie, index}
			<div in:fade={{ duration: 300, delay: index * 100 }}><MoviePreview {movie} /></div>
		{/each}
	</div>
</div>
