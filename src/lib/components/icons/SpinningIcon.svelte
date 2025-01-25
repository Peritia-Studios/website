<script lang="ts">
	import { onMount, onDestroy, type Snippet } from 'svelte';

	interface Props {
		Icon: Snippet;
		ActiveIcon?: Snippet;
		active?: boolean;
		rotation?: number;
	}

	let { Icon, ActiveIcon, active, rotation = $bindable(0) }: Props = $props();

	let baseSpeed = 30; // Degrees per second (slow)
	let hoverSpeed = 180; // Degrees per second (fast)
	let currentSpeed = baseSpeed; // Current rotation speed

	let lastTimestamp: number | null = null; // To calculate time delta
	let animationFrameId: number;

	let isHovered = false;
	let mounted = false;

	/**
	 * Updates the current speed based on hover state.
	 */
	function updateSpeed() {
		currentSpeed = isHovered ? hoverSpeed : baseSpeed;
	}

	function animate(timestamp: number | null) {
		if (lastTimestamp !== null && timestamp) {
			const deltaTime = (timestamp - lastTimestamp) / 1000; // Convert to seconds
			rotation = rotation + currentSpeed * deltaTime;
		}
		lastTimestamp = timestamp;
		animationFrameId = requestAnimationFrame(animate);
	}

	/**
	 * Handles mouse enter event to increase rotation speed.
	 */
	function handleMouseEnter() {
		isHovered = true;
		updateSpeed();
	}

	/**
	 * Handles mouse leave event to reset rotation speed.
	 */
	function handleMouseLeave() {
		isHovered = false;
		updateSpeed();
	}

	/**
	 * Handles click event to reset rotation.
	 */
	function handleClick() {
		rotation += 360;
	}

	// Start the animation loop when the component mounts
	onMount(() => {
		animationFrameId = requestAnimationFrame(animate);
		mounted = true;
	});

	// Clean up the animation loop when the component is destroyed
	onDestroy(() => {
		if (mounted) cancelAnimationFrame(animationFrameId);
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onclick={handleClick}
	style="display: inline-block; transform: rotate({rotation}deg); transition: transform 0.1s linear;"
>
	{#if ActiveIcon && active}
		{@render ActiveIcon()}
	{:else}
		{@render Icon()}
	{/if}
</div>
