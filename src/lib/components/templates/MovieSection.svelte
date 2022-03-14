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
			slidesPerView = 4.3;
		} else if (w >= 768) {
			slidesPerView = 3.3;
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

<div class="relative">
	<div class="absolute bg-gradient-to-l from-gray-dark to-transparent h-full right-0 z-20 w-20" />
	<Swiper spaceBetween={10} {slidesPerView}>
		{#each movies.results as movie, index}
			<SwiperSlide>
				<div in:fade={{ duration: 300, delay: index * 100 }}><MoviePreview {movie} /></div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>
