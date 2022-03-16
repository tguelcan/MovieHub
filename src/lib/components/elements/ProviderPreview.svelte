<script>
	import { Icon } from 'svelte-hero-icons';
	export let provider;
</script>

<div
	class="flex w-full items-center space-x-1 bg-gray rounded-xl text-white font-medium py-1 px-2 select-none"
>
	<div class="text-sm whitespace-nowrap">
		{provider.provider_name}
	</div>
	<div class="font-secondary transition-all text-xs opacity-75">
		<Icon src={provider.icon} class="w-4" />
	</div>
</div>
