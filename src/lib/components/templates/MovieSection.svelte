<script>
	import { tick } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import MoviePreview from '$components/elements/MoviePreview.svelte';

	import 'swiper/css';
	export let collection;

	let innerWidth;
	let slidesPerView;
	let movies = {
		results: []
	};

	const setSlidesPerView = async (w) => {
		await tick();
		if (w >= 1024) {
			slidesPerView = 4;
		} else if (w >= 768) {
			slidesPerView = 3;
		} else {
			slidesPerView = 1.2;
		}
	};

	$: if (collection) {
		movies = collection;
	}

	$: if (innerWidth) {
		setSlidesPerView(innerWidth);
	}
</script>

<svelte:window bind:innerWidth />

<Swiper spaceBetween={10} {slidesPerView}>
	{#each movies.results as movie, index}
		<SwiperSlide>
			<div in:fade={{ duration: 300, delay: index * 100 }}><MoviePreview {movie} /></div>
		</SwiperSlide>
	{/each}
</Swiper>
