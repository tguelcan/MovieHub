<script>
	import { Icon, Star } from 'svelte-hero-icons';
	export let value;
</script>

<div class="p-6 text-xs flex">
	<div class="flex space-x-0.5 px-1.5 py-1 bg-white text-primary-dark rounded-xl">
		<Icon src={Star} class="w-3" solid />
		<div>{value}/10</div>
	</div>
</div>
