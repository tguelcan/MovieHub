<script>
	import { Icon, Clock, Link } from 'svelte-hero-icons';

	import Rating from '$components/elements/Rating.svelte';

	export let movie;
	const getYear = (date) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<div class="sm:flex items-top sm:space-x-4 z-20">
	<img
		class="h-48 sm:h-56 mt-1"
		src="https://image.tmdb.org/t/p/w300{movie.poster_path}"
		alt="poster"
	/>
	<div class="flex flex-col  dark:text-light">
		<span class="text-sm">{movie.tagline}</span>
		<div class="text-4xl font-secondary font-bold">
			{movie.title}
		</div>
		<div class="text-xs flex items-center space-x-6 mt-2 text-gray">
			<div class="flex space-x-1 items-center">
				{#each movie.genres as genre, index}
					<div>{genre.name}</div>
					{#if movie.genres.length - 1 !== index}
						<div>|</div>
					{/if}
				{/each}
			</div>
			<Rating value={movie.vote_average} />
		</div>
		<div class="text-xs flex items-center space-x-1 text-gray font-medium">
			<div>{getYear(movie.release_date)}</div>
			<div class="flex items-center space-x-1 ">
				<Icon src={Clock} class="w-3" />
				<span>{movie.runtime}</span>
			</div>
		</div>
		<p class="mt-2">{movie.overview}</p>
		<div class="flex items-center space-x-4 text-xs text-gray mt-2">
			{#if movie.homepage}
				<div class="flex items-center space-x-1">
					<Icon src={Link} class="w-3" />
					<a rel="external" href={movie.homepage} target="_blank">Homepage</a>
				</div>
			{/if}
		</div>
	</div>
</div>
