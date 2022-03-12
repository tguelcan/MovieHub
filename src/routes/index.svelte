<script context="module">
	import Movies from '$lib/service/Movie';
	// @type {import('@sveltejs/kit').Load}
	export async function load({ params, fetch, session, stuff }) {
		const [popular, upcoming] = await Promise.allSettled([
			Movies.getPopular(),
			Movies.getUpcoming()
		]);
		return {
			status: popular.value.status,
			props: {
				popular: popular.value.ok && (await popular.value.json()),
				upcoming: upcoming.value.ok && (await upcoming.value.json())
			}
		};
	}
</script>

<script>
	import PopularSection from '$components/templates/PopularSection.svelte';
	import UpcomingSection from '$components/templates/UpcomingSection.svelte';
	import HeroSection from '$components/templates/HeroSection.svelte';

	export let popular, upcoming;
</script>

<div>
	<HeroSection collection={upcoming} />
</div>

<div class="container">
	<h2 class="text-2xl sm:text-3xl my-4 dark:text-light font-secondary font-bold">
		Discover Popular Movies
	</h2>
	<PopularSection {popular} />
	<h2 class="text-2xl sm:text-3xl my-4 dark:text-light font-secondary font-bold">Upcoming</h2>
	<UpcomingSection {upcoming} />
</div>
