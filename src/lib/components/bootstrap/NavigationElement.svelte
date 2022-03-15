<script>
	import { getContext } from 'svelte';
	import { Icon, Search } from 'svelte-hero-icons';

	// @ts-ignore:disable-next-line
	import Logo from '$assets/img/Logo.svg?src';
	import SearchModal from '$components/templates/SearchModal.svelte';

	let show = getContext('activeSearch');
</script>

<SearchModal show={$show} on:hide={() => ($show = false)} />
<div class="container">
	<div class="flex justify-between items-center">
		<div class="flex items-center">
			<div class="w-10 py-2 md:py-4">
				<a href="/" class="text-primary group hover:text-primary-light transition-all">
					{@html Logo}
				</a>
			</div>
			<div class="font-bold font-secondary select-none text-gray text-primary">HUB</div>
		</div>

		<div>
			<button
				class="inline-flex items-center p-2 border border-transparent rounded-full text-gray hover:bg-light transition-all dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 {show &&
					'ring-2 dark:text-white'}  ring-primary-light"
				on:click={() => ($show = true)}><Icon src={Search} class="w-5" /></button
			>
		</div>
	</div>
</div>
