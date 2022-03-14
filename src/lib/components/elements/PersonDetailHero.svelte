<script>
	export let person;
	let readMore = false;
	const getYear = (date) => {
		const d = new Date(date);
		return d.getFullYear();
	};

	$: longBiography = person.biography.length > 400;
</script>

<div class="sm:flex items-top sm:space-x-4 z-20 bg-dark py-6 px-2 sm:px-0 text-white">
	<img
		class="h-48 sm:h-56 mt-1"
		src="https://image.tmdb.org/t/p/w300{person.profile_path}"
		alt="poster"
		on:error={(ev) => (ev.target.src = '/img/mesh.png')}
	/>
	<div class="flex flex-col dark:text-light">
		<div class="text-sm mt-4 sm:mt-0">{person.known_for_department}</div>
		<div class="text-4xl font-secondary font-bold">
			{person.name}
		</div>

		<div class="text-xs flex items-center space-x-1 text-gray font-medium">
			<div>*{getYear(person.birthday)} <span>in {person.place_of_birth}</span></div>
		</div>
		<div class="max-w-2xl relative select-none">
			<p class="mt-2 {readMore ? 'line-clamp-none' : 'line-clamp-6'}">
				{person.biography}
			</p>
			<div
				class="{!readMore &&
					longBiography &&
					'bg-gradient-to-t from-dark to-transparent'} h-16 absolute w-full -mt-16"
			/>
			{#if longBiography}
				<div class="text-center">
					<button
						class="text-sm text-gray hover:text-white transition-all"
						on:click={() => (readMore = !readMore)}
						>{readMore ? 'Read less' : 'Read more'}
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>
