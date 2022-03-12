<script>
	import { Icon, Search } from 'svelte-hero-icons';

	// @ts-ignore:disable-next-line
	import Logo from '$assets/img/Logo.svg?src';
</script>

<div class="container">
	<div class="flex justify-between items-center">
		<div class="w-10 py-2 md:py-4">
			<a href="/" class="text-primary hover:text-primary-light transition-all">
				{@html Logo}
			</a>
		</div>
		<div>
			<button
				class="inline-flex items-center p-2 border border-transparent rounded-full text-gray hover:bg-light  dark:hover:bg-opacity-10 focus:outline-none focus:ring-2  focus:ring-primary-light"
				><Icon src={Search} class="w-5" /></button
			>
		</div>
	</div>
</div>
