<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import MoviePreview from '$components/elements/MoviePreview.svelte';

	import 'swiper/css';

	export let upcoming;
	export let movies = {
		results: []
	};
	onMount(() => (movies = upcoming));
</script>

<Swiper
	pagination={{ clickable: true }}
	spaceBetween={10}
	slidesPerView={3}
	on:slideChange={() => console.log('slide change')}
>
	{#each movies.results as movie, index}
		<SwiperSlide>
			<div in:fade={{ duration: 300, delay: index * 100 }}><MoviePreview {movie} {index} /></div>
		</SwiperSlide>
	{/each}
</Swiper>
