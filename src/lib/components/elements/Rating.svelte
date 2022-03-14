<script>
	import { Icon, Star } from 'svelte-hero-icons';
	export let value;
</script>

<div class="text-xs flex select-none">
	<div class="flex space-x-0.5 px-1.5 py-1 bg-gray-light text-primary-dark rounded-xl font-medium">
		<Icon src={Star} class="w-3" solid />
		<div>{Math.ceil(value)}/10</div>
	</div>
</div>
