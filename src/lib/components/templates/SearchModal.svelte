<script>
	import { createEventDispatcher } from 'svelte';
	import { sineInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let show = false;

	const hide = () => {
		dispatch('hide');
		show = false;
	};

	const handleWindowKeyDown = (event) => {
		if (event.key === 'Escape') {
			hide();
		}
	};
</script>

<svelte:window on:keydown={handleWindowKeyDown} />
{#if show}
	<div
		class="fixed inset-0 z-10 overflow-y-auto px-1 py-1 sm:p-6 md:p-20"
		role="dialog"
		aria-modal="true"
	>
		<div
			in:fade={{ duration: 200 }}
			out:fade
			class="fixed inset-0 bg-gray bg-opacity-75 dark:bg-gray-dark dark:bg-opacity-90 transition-opacity"
			aria-hidden="true"
			on:click={hide}
		/>

		<div
			in:fly={{ y: 15, duration: 300, easing: sineInOut }}
			out:fade
			class="mx-auto max-w-xl transform divide-y divide-gray divide-opacity-10 overflow-hidden rounded-xl bg-white dark:bg-dark shadow-2xl dark:shadow-none ring-2 ring-white dark:ring-gray ring-opacity-10 transition-all"
		>
			<div class="relative">
				<!-- Heroicon name: solid/search -->
				<svg
					class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
				<input
					type="text"
					class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray placeholder-gray-400 focus:ring-0 sm:text-sm"
					placeholder="Search..."
					role="combobox"
					aria-expanded="false"
					aria-controls="options"
				/>
			</div>

			<!-- Results, show/hide based on command palette state -->
			<ul
				class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray"
				id="options"
				role="listbox"
			>
				<!-- Active: "bg-indigo-600 text-white" -->
				<li class="cursor-default select-none px-4 py-2" id="option-1" role="option" tabindex="-1">
					Leslie Alexander
				</li>
				<li class="cursor-default select-none px-4 py-2" id="option-2" role="option" tabindex="-1">
					Michael Foster
				</li>
				<li class="cursor-default select-none px-4 py-2" id="option-3" role="option" tabindex="-1">
					Dries Vincent
				</li>
				<li class="cursor-default select-none px-4 py-2" id="option-4" role="option" tabindex="-1">
					Lindsay Walton
				</li>
				<li class="cursor-default select-none px-4 py-2" id="option-5" role="option" tabindex="-1">
					Courtney Henry
				</li>
			</ul>

			<!-- Empty state, show/hide based on command palette state -->
			<p class="p-4 text-sm text-gray">No people found.</p>
		</div>
	</div>
{/if}
