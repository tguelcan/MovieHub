<script>
	export let person;
</script>

<a href="/{person.id}" class=" bg-light dark:bg-gray-dark dark:text-gray-light">
	<div class="overflow-hidden relative group">
		<div class="absolute flex flex-col justify-between  w-full h-full z-20 text-light">
			<div class="p-6 flex flex-col space-y-1 ">
				<div class="font-secondary font-medium transition-all ">
					{person.name}
				</div>
			</div>
		</div>
		<div
			class="bg-gradient-to-t from-dark to-transparent absolute z-10 w-full h-full hover:opacity-0"
		/>
		<div
			class="bg-gradient-to-tr from-primary to-primary-light absolute z-10 w-full h-full opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out"
		/>
		<img
			class="object-cover object-center bg-light w-full h-36 sm:h-48 group-hover:scale-105 transition-all duration-200"
			src="https://image.tmdb.org/t/p/w500{person.profile_path}"
			alt={person.name}
		/>
	</div>
</a>
