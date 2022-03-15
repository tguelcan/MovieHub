<script>
	import { createEventDispatcher, tick } from 'svelte';
	import { goto } from '$app/navigation';
	import { sineInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import Movie from '$lib/service/Movie';

	const dispatch = createEventDispatcher();

	export let show = false;
	let pending = false;
	let searchVal, timer;
	let response = {
		results: []
	};

	const reset = async () => {
		await tick();
		searchVal = null;
		response = {
			results: []
		};
	};

	const hide = () => {
		dispatch('hide');
		show = false;
		reset();
	};

	const handleWindowKeyDown = (event) => {
		if (event.key === 'Escape') {
			hide();
		}

		if (event.key === 'Enter') {
			show = true;
			reset();
		}
	};

	const handleClick = (movie) => {
		hide();
		goto(`/${movie.id}`);
	};

	const debounce = (v) => {
		clearTimeout(timer);
		timer = setTimeout(async () => {
			pending = true;
			const res = await Movie.getSearch(v);
			response = await res.json();
			pending = false;
		}, 750);
	};

	const getYear = (date) => {
		const d = new Date(date);
		return d.getFullYear();
	};

	$: if (searchVal) {
		debounce(searchVal);
	}

	const init = (el) => {
		el.focus();
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
			class="mx-auto max-w-xl transform divide-y divide-gray divide-opacity-10 overflow-hidden rounded-xl bg-white dark:bg-dark shadow-2xl dark:shadow-none ring-2 ring-white dark:ring-gray ring-opacity-10 dark:ring-opacity-5 transition-all"
		>
			<div class="relative">
				<!-- Heroicon name: solid/search -->
				{#if pending}
					<div in:fade>
						<img
							src="/img/loading.svg"
							alt="Loading"
							class="pointer-events-none absolute top-3.5 left-4 h-5 w-5"
						/>
					</div>
				{:else}
					<div in:fade>
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
					</div>
				{/if}

				<input
					type="text"
					class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray placeholder-gray-400 focus:ring-0 sm:text-sm"
					placeholder="Search..."
					role="combobox"
					aria-expanded="false"
					aria-controls="options"
					bind:value={searchVal}
					use:init
				/>
			</div>

			<!-- Results, show/hide based on command palette state -->
			{#if response.total_results}
				<ul
					class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray divide-y divide-gray divide-opacity-10"
					id="options"
					role="listbox"
				>
					{#each response.results as movie, index}
						<li
							in:fade={{ duration: 300, delay: index * 100 }}
							class="group cursor-pointer select-none px-4 py-2 flex hover:bg-gray hover:text-dark dark:hover:text-light hover:bg-opacity-10 hover:text-white flex space-x-2 items-center transition-all"
							id="option-{index + 1}"
							role="option"
							tabindex="-1"
							on:click={handleClick(movie)}
						>
							<div class="shrink-0 hidden sm:inline-block">
								<img
									class="object-cover object-bottom w-10 sm:w-16"
									src={movie?.poster_path
										? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
										: '/img/mesh.png'}
									alt="poster"
									on:error={(ev) => (ev.target.src = '/img/mesh.png')}
								/>
							</div>
							<div class="flex-1">
								<div class="font-semibold text-lg">{movie.title}</div>
								<div class="hidden sm:line-clamp-3 ">{movie.overview}</div>
								{#if movie.release_date}
									<div class="text-xs sm:mt-2">{getYear(movie.release_date)}</div>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			{:else if response.total_results === 0}
				<!-- Empty state, show/hide based on command palette state -->
				<p class="p-4 text-sm text-gray text-center">No movie found.</p>
			{/if}
		</div>
	</div>
{/if}
