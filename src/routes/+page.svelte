<script lang="ts">
	// import { goto } from '$app/navigation';
	import { Instagram, Youtube, Github } from 'lucide-svelte';
	import { onDestroy, onMount } from 'svelte';
	const goto = (url: string) => (window.location.href = url);
	let links = [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/_vidhu.v_/'
		},
		{
			name: 'Youtube',
			url: 'https://www.youtube.com/channel/UCtmu8Za0aVINeXYz5a6yeJw'
		},
		{
			name: 'Github',
			url: 'https://github.com/vidhu-vv'
		}
	];
	let index = 0;

	let roller: any;

	onMount(() => {
		roller = setInterval(() => {
			if (index === links.length - 1) index = 0;
			else index++;
		}, 5000);
	});

	onDestroy(() => {
		clearInterval(roller);
	});
	let visible = false;
</script>
<svelte:head>
	<title>
		Vidhu's Villa
	</title>
</svelte:head>

<div class="flex flex-col bg-gray-700 h-full overflow-hidden w-full">
	<div class="h-full flex flex-col col-span-3">
		<div class="flex-1 w-full">
			<div
				class="my-16 bg-gray-700 border-4 border-secondary w-[90%] h-80 mx-auto grid place-items-center rounded-3xl"
			>
				<div class="animate-text text-justify text-secondary w-[90%] flex justify-center place-items-center overflow-hidden">
					<button
						class="text-7xl font-bold transition duration-200 ease-in-out hover:scale-110 hover:text-purple-300"
						on:click={() => {
							goto('/blog');
							console.log('clicked');
						}}
					>
						VIDHU'S VILLA
					</button>
				</div>
			</div>
		</div>
		<div class="flex-1 w-full overflow-hidden">
			<div class="my-16 p-4 h-1/2 bg-gray-700 mx-auto grid place-items-center rounded-3xl overflow-hidden">
				{#key index}
					<button
						class="animate-text flex text-3xl font-bold transition duration-200 hover:scale-110 hover:text-purple-300"
						on:click={() => {
							goto(links[index].url);
							console.log('clicked');
						}}
						on:mouseenter={() => {
							visible = true;
						}}
					>
						{#if index === 0}
							<Instagram size={128} />
						{:else if index === 1}
							<Youtube size={128} />
						{:else if index === 2}
							<Github size={128} />
						{/if}
					</button>
				{/key}
			</div>
		</div>
	</div>
</div>

<style>
	div {
		font-family: 'Major Mono Display';
		font-size: 22px;
		overflow-x: hidden;
	}

	.animate-text {
		animation: idle 5s infinite;
	}
	@keyframes idle {
		0%,
		100% {
			scale: 1;
			rotate: 0deg;
		}
		25% {
			rotate: 5deg;
		}
		50% {
			scale: 1.1;
		}
		75% {
			rotate: -5deg;
		}
	}
</style>
