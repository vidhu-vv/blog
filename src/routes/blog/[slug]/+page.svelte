<script lang="ts">
    import { formatDate } from '$lib/utils.js';

    import { goto } from '$app/navigation';
    export let data;
</script>

<svelte:head>
    <title>
        Vidhu's Villa - {data.meta.title}
    </title>
    <div
				class="my-16 bg-gray-700 text-6xl h-30 mx-auto grid place-items-center rounded-3xl"
	>
    {data.meta.title}   
    </div>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />

</svelte:head>

<article class="prose-sm">
        <div class="flex flex-col bg-gray-700 h-full w-100">
                <div class="my-16 border-b-0 bg-gray-700 h-10 mx-auto grid place-items-center rounded-3xl">
                    <div class="font-bold text-purple-300 text-2xl h-fit">
                        <h1 class="title">
                            <span class="text-purple-300">
                                {data.meta.title}
                            </span>
                            <span class="text-purple-500">
                                on {formatDate(data.meta.date)}
                            </span>
                                
                        </h1>
                    </div>
                </div>
                <div class="grid place-items-start text-custom h-11 font-extrabold text-purple-300">
                    <p>{data.meta.description}</p>
                </div>
                <div class="py-0">
                    <hr>
                </div>
                <div class="grid place-items-center">
                    <img src="{data.meta.thumbnail}" alt="Thumbnail"/>
                </div>
            <div class="text-white"> 
                <svelte:component this={data.content} />
            </div>
        </div>
</article>

<style>
    .text-custom {
        font-size: 1.1rem;
    }
    hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgb(192, 139, 228),
            rgba(0, 0, 0, 0)
        );
        width: 100%;
    }
    article {
        max-inline-size: 1200px;
        margin-inline: auto;
    }

    

    * {
        font-family: 'Raleway', sans-serif;
    }

    /* .prose {
        font-family: 'Raleway', sans-serif;
    } */
</style>