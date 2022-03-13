<script>
	import Rating from '$components/elements/Rating.svelte';

	export let movie;

	const getYear = (date) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<a href="/{movie.id}" class=" bg-light dark:bg-gray-dark dark:text-gray-light">
	<div class="relative group">
		<div class="absolute flex flex-col justify-between  w-full h-full z-20 text-light">
			<div class="p-6">
				<Rating value={movie.vote_average} />
			</div>
			<div class="p-6 flex flex-col space-y-1">
				<div class="text-6xl font-secondary font-bold group-hover:text-6xl transition-all">
					{movie.title}
				</div>
				<div class="text-sm">{getYear(movie.release_date)}</div>
				<p class="font-light max-w-xl line-clamp-3 leading-snug">{movie.overview}</p>
			</div>
		</div>
		<div
			class="bg-gradient-to-tr from-dark to-transparent mix-blend-multiply absolute z-10 w-full h-full transition-all group-hover:opacity-50"
		/>
		<img
			class="object-cover object-center bg-light w-full h-80 sm:h-[32rem] group-hover:scale-105 transition-all duration-200"
			src="https://image.tmdb.org/t/p/original{movie.backdrop_path}"
			alt="poster"
		/>
	</div>
</a>
