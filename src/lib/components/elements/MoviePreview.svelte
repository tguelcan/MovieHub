<script>
	import { Icon, Star } from 'svelte-hero-icons';

	export let movie;

	const getYear = (date) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<a href="/" class=" bg-light dark:bg-gray-dark dark:text-gray-light rounded-lg">
	<div class="overflow-hidden relative group">
		<div class="absolute flex flex-col justify-between  w-full h-full z-20 text-light">
			<div class="p-6 text-md sm:text-xs flex space-x-1">
				<Icon src={Star} class="w-3" solid /><span>{movie.vote_average}/10</span>
			</div>
			<div class="p-6 flex flex-col">
				<span class="text-2xl sm:text-lg font-medium group-hover:text-2xl transition-all"
					>{movie.title}</span
				><span class="text-xs">{getYear(movie.release_date)}</span>
			</div>
		</div>
		<div
			class="bg-gradient-to-t from-dark to-transparent absolute z-10 w-full h-full hover:opacity-0"
		/>
		<div
			class="bg-gradient-to-tr from-primary to-primary-light absolute z-10 w-full h-full opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out"
		/>
		<img
			class="object-cover object-bottom bg-light w-full h-56 sm:h-48 group-hover:scale-105 transition-all duration-200"
			src="https://image.tmdb.org/t/p/w500{movie.backdrop_path}"
			alt="poster"
		/>
	</div>
</a>
