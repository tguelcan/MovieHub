<script context="module">
	import Movies from '$lib/service/Movie';
	// @type {import('@sveltejs/kit').Load}
	export async function load() {
		const [popular, upcoming] = await Promise.allSettled([
			Movies.getPopular(),
			Movies.getUpcoming()
		]);
		return {
			props: {
				popular: popular.value.ok && (await popular.value.json()),
				upcoming: upcoming.value.ok && (await upcoming.value.json())
			}
		};
	}
</script>

<script>
	import MovieSection from '$components/templates/MovieSection.svelte';
	import HeroSection from '$components/templates/HeroSection.svelte';

	export let popular, upcoming;
</script>

<svelte:head>
	<title>MOVIE:HUB</title>
</svelte:head>

<div class="mb-6">
	<HeroSection collection={upcoming} />
</div>

<div class="container space-y-6">
	<div>
		<h2>Discover Popular Movies</h2>
		<MovieSection collection={popular} />
	</div>
	<div>
		<h2>Upcoming</h2>
		<MovieSection collection={upcoming} />
	</div>
</div>
