<script lang="ts">
    import { goto } from '$app/navigation';
</script>


<div class="fixed top-0 z-50 flex h-[74px] w-full bg-gray-700 md:sticky sm:text-2xl">
    <div class="sm:w-[77.5%] w-[50%] px-5 flex items-center">
        <div class="animate-home flex font-bold text-5xl">
            <button class="text-7xl py-5 font-cor" on:click={() => {goto('/'); console.log('clicked home')}}>
                V
            </button>
        </div>
		
    </div>
	<div class="flex">
		<div class="flex justify-items-end">
			<div class="animate-link">
				<button class="sm:text-4xl text-2xl p-5 mx-5 font-cor" on:click={() => {goto('/blog'); console.log('clicked blog')}}>
					blog
				</button>
			</div>
			<div class="animate-link">
				<button class="sm:text-4xl text-2xl py-5 mx-5 font-cor" on:click={() => {goto('/about'); console.log('clicked about')}}>
					About
				</button>
			</div>
		</div>
	</div>
</div>

<style>
    * {
		box-sizing: border-box;
		overflow: hidden;
	}
	.font-cor {
		font-family: "Major Mono Display", sans-serif;
	}
	.animate-link:hover {
		animation: link 0.5s ease-in-out;
		animation-fill-mode: forwards;
	
	}
	.animate-home {
		animation-duration: home-reverse 1s ease-in-out;
		animation-fill-mode: forwards;
	}
	.animate-home:hover {
		animation : home 1s ease-in-out;
		animation-fill-mode: forwards;
	}
	@keyframes link {
		0% {
			color: auto;
		}
		100% {
			color: violet;
		}
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