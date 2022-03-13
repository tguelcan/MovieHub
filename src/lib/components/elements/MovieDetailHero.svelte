<script>
	import { Icon, Clock, Link } from 'svelte-hero-icons';

	import Rating from '$components/elements/Rating.svelte';

	export let movie;
	const getYear = (date) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<div class="sm:flex items-top space-y-4  sm:space-y-0 sm:space-x-4 z-20">
	<img
		class="h-48 sm:h-56 mt-1"
		src="https://image.tmdb.org/t/p/w300{movie.poster_path}"
		alt="poster"
	/>
	<div class="flex flex-col space-y-4 dark:text-light">
		<span class="text-sm">{movie.tagline}</span>
		<div class="text-4xl font-secondary font-bold">
			{movie.title}
		</div>
		<div class="text-xs flex items-center space-x-2">
			<span class="font-medium">{getYear(movie.release_date)}</span>
			<Rating value={movie.vote_average} />
		</div>
		<p>{movie.overview}</p>
		<div class="flex items-center space-x-4 text-xs text-gray">
			<div class="flex items-center space-x-1">
				<Icon src={Clock} class="w-3" />
				<span>{movie.runtime}</span>
			</div>
			{#if movie.homepage}
				<div class="flex items-center space-x-1">
					<Icon src={Link} class="w-3" />
					<a rel="external" href={movie.homepage} target="_blank">Homepage</a>
				</div>
			{/if}
		</div>
	</div>
</div>
