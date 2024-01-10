<script lang="ts">
    import { page } from '$app/stores';
    import { Hammer } from 'lucide-svelte';
</script>

<svelte:head>
    <title>Vidhu's Villa - {$page.status}</title>
</svelte:head>

<div class="h-screen grid place-content-center overflow-hidden bg-gray-700 error">
    <div class="text-9xl text-purple-300 grid place-items-center py-32">Oops!</div>
    <br>
    <div class="grid place-items-center py-32"> 
        <Hammer size={128} color='#ffffff'/>
    </div>
    <span class="text-6xl text-purple-300">Error {$page.status}: {$page.error?.message}</span>
</div>

<style>
    .error {
        display: grid;
        place-content: center; 
        transform: translate(0, -12.5%);
        color: var(--secondary);
    }
</style>