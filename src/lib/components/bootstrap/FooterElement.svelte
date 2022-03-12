<script>
	import { Icon, Sun, Moon } from 'svelte-hero-icons';
	import theme from '$lib/store/theme';
</script>

<footer class="bg-gray-light border-t dark:border-0 dark:bg-gray-dark">
	<div class="container py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
		<div class="flex justify-center space-x-6 md:order-2">
			<button
				on:click={() => ($theme === 'dark' ? ($theme = 'light') : ($theme = 'dark'))}
				class="text-gray"><Icon src={$theme === 'dark' ? Sun : Moon} class="w-6" /></button
			>
		</div>
		<div class="mt-8 md:mt-0 md:order-1">
			<p class="text-center text-sm text-gray">&copy; 2022 Movie HUB. All rights reserved.</p>
		</div>
	</div>
</footer>
