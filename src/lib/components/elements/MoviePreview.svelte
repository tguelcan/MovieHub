<script>
	import Rating from '$components/elements/Rating.svelte';
	export let movie;
	const getYear = (date) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<a href="/{movie.id}" sveltekit:prefetch class="bg-light dark:bg-gray-dark dark:text-gray-light ">
	<div class="overflow-hidden relative group rounded-lg sm:rounded-xl">
		<div class="absolute flex flex-col justify-between w-full h-full z-20 text-light">
			<div class="p-6">
				<Rating value={movie.vote_average} />
			</div>
			<div class="p-6 flex flex-col space-y-1">
				<div class="sm:text-lg font-secondary font-bold transition-all">
					{movie.title}
				</div>
				<div class="text-xs">{getYear(movie.release_date)}</div>
			</div>
		</div>
		<div
			class="bg-gradient-to-t from-dark to-transparent absolute z-10 w-full h-full hover:opacity-0"
		/>
		<div
			class="bg-gradient-to-tr from-primary to-primary-light absolute z-10 w-full h-full opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out"
		/>
		<img
			class="object-cover object-bottom w-full h-56 sm:h-48 group-hover:scale-105 transition-all duration-200"
			src="https://image.tmdb.org/t/p/w500{movie.backdrop_path}"
			alt="poster"
			on:error={(ev) => (ev.target.src = '/img/mesh.png')}
		/>
	</div>
</a>
