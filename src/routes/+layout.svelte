<script lang="ts">
	import '../app.css';
	import NavBar from './NavBar.svelte';
	import PageTransition from './transition.svelte';

	export let data;

</script>

<svelte:head>
	<!-- <NavBar /> -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> -->
	<link
		href="https://fonts.googleapis.com/css?family=Major+Mono+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="bg-gray-700 flex flex-col">
	<NavBar />
	<main class="bg-gray-700 mt-24 md:mt-0 flex-1 w-full h-full">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
		
</div>

