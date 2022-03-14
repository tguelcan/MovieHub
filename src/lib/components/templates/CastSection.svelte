<script>
	import { onMount, tick } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import CastPreview from '$components/elements/CastPreview.svelte';

	import 'swiper/css';

	let innerWidth;
	let slidesPerView;
	export let collection;
	export let cast = [];

	const setSlidesPerView = async (w) => {
		await tick();
		if (w >= 1024) {
			slidesPerView = 8;
		} else if (w >= 768) {
			slidesPerView = 5;
		} else {
			slidesPerView = 3.2;
		}
	};

	$: if (collection) {
		cast = collection;
	}

	$: if (innerWidth) {
		setSlidesPerView(innerWidth);
	}
</script>

<svelte:window bind:innerWidth />

<Swiper spaceBetween={10} {slidesPerView}>
	{#each cast as person, index}
		<SwiperSlide>
			<div in:fade={{ duration: 300, delay: index * 100 }}><CastPreview {person} /></div>
		</SwiperSlide>
	{/each}
</Swiper>
