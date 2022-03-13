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

<div>
	<HeroSection collection={upcoming} />
</div>

<div class="container">
	<h2 class="text-2xl sm:text-3xl my-4 dark:text-light font-secondary font-bold select-none">
		Discover Popular Movies
	</h2>
	<MovieSection collection={popular} />
	<h2 class="text-2xl sm:text-3xl my-4 dark:text-light font-secondary font-bold select-none">
		Upcoming
	</h2>
	<MovieSection collection={upcoming} />
</div>
