<script context="module">
	import Movies from '$lib/service/Movie';
	// @type {import('@sveltejs/kit').Load}
	export async function load({ params }) {
		const [movie, similar] = await Promise.allSettled([
			Movies.getDetail(params.id),
			Movies.getSimilar(params.id)
		]);
		return {
			props: {
				movie: movie.value.ok && (await movie.value.json()),
				similar: similar.value.ok && (await similar.value.json())
			}
		};
	}
</script>

<script>
	import MovieSection from '$components/templates/MovieSection.svelte';
	import MovieDetailHero from '$components/elements/MovieDetailHero.svelte';
	export let movie, similar;
	console.log(movie);
</script>

<svelte:head>
	<title>{movie.title}</title>
</svelte:head>

<div>
	<div class="container">
		<MovieDetailHero {movie} />

		<h2 class="text-2xl sm:text-3xl my-4 dark:text-light font-secondary font-bold select-none">
			Similar Movies
		</h2>
		<MovieSection collection={similar} />
	</div>
</div>
