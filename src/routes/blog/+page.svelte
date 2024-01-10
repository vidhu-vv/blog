<script lang="ts">
    import { goto } from '$app/navigation';
    import { formatDate } from '$lib/utils';
    export let data;
</script>
<svelte:head>
    <title>Vidhu's Villa - Blogs</title>
</svelte:head>
<div class="flex flex-col bg-gray-700 h-full overflow-hidden w-full">
    <div
				class="my-16 bg-gray-700 text-6xl h-30 text-custom mx-auto grid place-items-center rounded-3xl"
	>
    blogs   
    </div> 
    <div class="flex flex-col items-center justify-center">
        <ul class="posts grid place-items-center">
            {#each data.posts as blog}
                <li class="post">
                    <a href="/blog/{blog.slug}" class ="title grid place-items-center bg2">
                        <p class="date h-12 bg2">{formatDate(blog.date)}</p>
                        {blog.title}
                            <p class="description bg2">{blog.description}</p>
                    </a>
    
            {/each}
        </ul>
    </div>
</div>

<style>
    .bg2 {
        background: #2d3748;
    }
    .posts {
        display: grid;
        gap: var(--size-7);  
    }

    .post {
        max-inline-size: var(--size-content-3);
        margin: 1em 0;
        padding: 1em;
        border-radius: 0.5em;
        border-color: aqua;
        background: #2d3748;
    }
    .post:hover {
        background: #3c4858;
        transition: background 0.5s ease;
    }
    .post:hover .title {
        color: #d8b4fe;
        transition: color 0.5s ease;
    }
    .post:hover .bg2 {
        background: #3c4858;
        transition: background 0.5s ease;
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
        color: var(--secondary);
        text-transform: capitalize;
    }

    .date {
        font-size: 0.8em;
        color: #999;
    }

    .description {
        font-size: 1rem;
        color: #fff;
    }
    .text-custom {
        font-family: 'Major Mono Display';
    }
</style>