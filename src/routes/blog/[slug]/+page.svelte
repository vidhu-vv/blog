<script lang="ts">
  import { formatDate } from '$lib/utils.js';

    export let data;
</script>

<svelte:head>
    <div
				class="my-16 bg-gray-700 text-6xl h-30 mx-auto grid place-items-center rounded-3xl"
	>
    {data.meta.title}   
    </div>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />

</svelte:head>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p> Published at {formatDate(data.meta.date)}</p>
    </hgroup>

    <div class="tags">
        {#each data.meta.categories as category}
            <span class="surface-4">&num;{category}</span>
        {/each}
    </div>

    <div class="prose"> 
        <svelte:component this={data.content} />
    </div>
</article>

<style>
    article {
        max-inline-size: 800px;
        margin-inline: auto;
    }

    h1 {
        text-transform: capitalize;
    }

    h1 + p {
        margin-top: -1rem;
        color: #d8b4fe;
    }

    .tags > * {
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
</style>