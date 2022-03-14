<script>
	import { lazyLoad } from '$lib/helper';

	// receive props, but have default fallbacks
	export let src = 'https://via.placeholder.com/600/24f355';
	export let alt = 'Dummy title';
	export let styling;
</script>

<img use:lazyLoad={src} {alt} class={styling} />
