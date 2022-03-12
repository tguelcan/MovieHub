<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import MoviePreview from '$components/elements/MoviePreview.svelte';

	import 'swiper/css';

	export let popular;
	export let movies = {
		results: []
	};
	onMount(() => (movies = popular));
</script>

<Swiper spaceBetween={10} slidesPerView={3}>
	{#each movies.results as movie, index}
		<SwiperSlide>
			<div in:fade={{ duration: 300, delay: index * 100 }}><MoviePreview {movie} /></div>
		</SwiperSlide>
	{/each}
</Swiper>
