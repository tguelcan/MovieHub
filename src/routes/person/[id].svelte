<script context="module">
	import Person from '$lib/service/Person';
	// @type {import('@sveltejs/kit').Load}
	export async function load({ params }) {
		const pageId = params.id;
		const [person, credits] = await Promise.allSettled([
			Person.getDetail(pageId),
			Person.getCredits(pageId)
		]);
		return {
			maxage: 0,
			props: {
				person: person.value?.ok && (await person.value.json()),
				credits: credits.value?.ok && (await credits.value.json())
			}
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import PersonDetailHero from '$components/elements/PersonDetailHero.svelte';
	import MoviePreview from '$components/elements/MoviePreview.svelte';

	export let person, credits;
</script>

<svelte:head>
	<title>{person.name}</title>
</svelte:head>

<div>
	<div class="bg-dark">
		<div class="sm:container">
			<PersonDetailHero {person} />
		</div>
	</div>
</div>
<div class="container mt-2">
	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
		{#each credits.cast as movie, index}
			<div in:fade={{ duration: 300, delay: index * 100 }}><MoviePreview {movie} /></div>
		{/each}
	</div>
</div>
