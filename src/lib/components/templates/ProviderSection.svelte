<script>
	import { fade } from 'svelte/transition';
	import ProviderPreview from '$components/elements/ProviderPreview.svelte';

	export let collection;
	export let p = [];

	$: if (collection) {
		p = collection;
	}
</script>

<div class="flex max-w-2xl mt-2 flex-wrap">
	{#each p as provider, index}
		<div in:fade={{ duration: 300, delay: index * 100 }} class="mr-2 mt-2">
			<ProviderPreview {provider} />
		</div>
	{/each}
</div>
