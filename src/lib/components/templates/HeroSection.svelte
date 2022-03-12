<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import MovieHero from '$components/elements/MovieHero.svelte';
	import { EffectFade, Autoplay } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/effect-fade';
	import 'swiper/css/pagination';

	export let collection;
	export let movies = {
		results: []
	};
	onMount(() => (movies = collection));
</script>

<div class="sm:container">
	<Swiper
		modules={[EffectFade, Autoplay]}
		effect="fade"
		autoplay={{
			delay: 5000,
			disableOnInteraction: false
		}}
		slidesPerView={1}
	>
		{#each movies.results as movie}
			<SwiperSlide>
				<div in:fade={{ duration: 1000 }}><MovieHero {movie} /></div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>
