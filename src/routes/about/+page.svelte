<script lang="ts">
    import { onMount } from 'svelte';
    import { fade} from 'svelte/transition';
    let mounted = false;
    onMount(() => {
        mounted = true;
    });

</script>

<svelte:head>
    <title>
        Vidhu's Villa - About
    </title>
</svelte:head>

<div class="flex flex-col bg-gray-700 h-full overflow-hidden">
    <div
				class="my-16 bg-gray-700 text-6xl h-3 text-custom mx-auto grid place-items-center rounded-3xl"
	>
    About Me  
    </div> 
    <div class="flex flex-col items-center justify-center">
        {#if mounted}
            <div class="text-9xl text-purple-400 py-16">
                <span in:fade={{ delay: 200 }} class="text-purple-300">
                    Hi,
                </span>
                <span in:fade={{ delay: 800 }} class="text-purple-300">
                    I'm
                </span> 
                <span in:fade={{ delay: 1000 }} class="text-purple-300 ">
                    Vidhu 
                </span>
            </div>
            <span in:fade={{ delay: 1800 }} class="text-purple-300 grid place-items-center">
                <img src="/blog/vidhu.jpg" class="rounded-full h-64 w-64 inline-block " alt="vidhu pic"/>
            </span>
            <div in:fade={{ delay: 2000 }} class="text-4xl text-purple-300 py-16">
                <span class="text-purple-300">
                    More about me
                </span>
                <span class="text-purple-400">
                    <a href="/blog"> in the blogs!</a>
                </span>
            </div>
        {/if}
    </div>
</div>

<style>
    .text-custom {
        font-family: 'Major Mono Display';
    }
</style>