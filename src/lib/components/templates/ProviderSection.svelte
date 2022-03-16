<script>
	import { onMount } from 'svelte';
	import { CurrencyDollar, Film } from 'svelte-hero-icons';
	import { fade } from 'svelte/transition';
	import ProviderPreview from '$components/elements/ProviderPreview.svelte';

	export let collection;

	let p = {
		buy: [],
		flatrate: [],
		rent: []
	};

	$: if (collection) {
		p = Object.assign(p, collection?.results?.GB);
	}
</script>

<div class="flex max-w-2xl mt-2 flex-wrap">
	{#each p.flatrate as flatrate, index}
		<div in:fade={{ duration: 300, delay: index * 100 }} class="mr-2 mt-2">
			<ProviderPreview provider={{ ...flatrate, icon: Film }} />
		</div>
	{/each}
	{#each p.buy as buy, index}
		<div in:fade={{ duration: 300, delay: index * 100 }} class="mr-2 mt-2">
			<ProviderPreview provider={{ ...buy, icon: CurrencyDollar }} />
		</div>
	{/each}
	{#each p.rent as buy, index}
		<div in:fade={{ duration: 300, delay: index * 100 }} class="mr-2 mt-2">
			<ProviderPreview provider={{ ...buy, icon: Film }} />
		</div>
	{/each}
</div>
