<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		pictures: string[];
	}

	let { pictures }: Props = $props();

	let elemCarousel: HTMLDivElement;
	let autoInterval: NodeJS.Timeout | undefined = $state();
	let currentPicture = $state(0);

	onMount(() => {
		currentPicture = getCurrentPicture();
		newAutoScroll();
	});

	function getCurrentPicture(): number {
		let scrollLeft = elemCarousel?.scrollLeft || 0;
		let clientWidth = elemCarousel?.clientWidth || 1;
		return Math.round(scrollLeft / clientWidth);
	}

	function carouselThumbnail(index: number) {
		elemCarousel?.scroll(elemCarousel.clientWidth * index, 0);
	}

	function newAutoScroll() {
		autoInterval = setTimeout(() => {
			let newI = currentPicture + 1;
			if (newI < pictures.length) {
				carouselThumbnail(newI);
			} else {
				carouselThumbnail(0);
			}
		}, 5000);
	}
</script>

<div class="space-y-4">
	<div
		bind:this={elemCarousel}
		onscroll={() => {
			currentPicture = getCurrentPicture();
			clearTimeout(autoInterval);
			newAutoScroll();
		}}
		class="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
	>
		{#each pictures as picture}
			<img
				class="rounded-container-token w-fit snap-center"
				src="gameplay/{picture}"
				alt={picture}
				loading="lazy"
			/>
		{/each}
	</div>

	<div class="flex space-x-2">
		{#each pictures as picture, i}
			<button
				type="button"
				class={i == currentPicture ? 'outline-primary-500 outline outline-offset-2' : ''}
				onclick={() => carouselThumbnail(i)}
			>
				<img src="gameplay/{picture}" alt={picture} loading="lazy" />
			</button>
		{/each}
	</div>
</div>
