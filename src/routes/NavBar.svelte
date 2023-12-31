<script lang="ts">
    import { goto } from '$app/navigation';
</script>


<div class="fixed top-0 z-50 flex h-[74px] w-full bg-gray-700 md:sticky">
    <div class="w-screen max-w-6xl px-5 flex items-center">
        <div class="animate-home flex font-bold text-5xl">
            <button class="text-7xl py-5" on:click={() => {goto('/'); console.log('clicked home')}}>
                V
            </button>
        </div>
    </div>
</div>

<style>
    * {
		box-sizing: border-box;
	}
	.animate-home {
		animation-duration: home-reverse 1s ease-in-out;
		animation-fill-mode: forwards;
	}
	.animate-home:hover {
		animation : home 1s ease-in-out;
		animation-fill-mode: forwards;
	}

	@keyframes home-reverse {
		0% {
			rotate: 360deg;
			color: violet;
			scale: 1.1;
		}
		100% {
			rotate: 0deg;
			color: auto;
			scale: 1;
		}
	}

	@keyframes home {
		0% {
			rotate: 0deg;
			color: auto;
			scale: 1;
		}
		100% {
			rotate: 360deg;
			color: violet;
			scale: 1.1;
		}
	}
</style>