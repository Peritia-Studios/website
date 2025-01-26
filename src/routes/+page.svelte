<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	let loaded = false;
</script>

<svelte:head>
	<title>Plebis Online</title>
	<meta name="description" content={m.example()} />
</svelte:head>

<div class={loaded ? '' : 'placeholder animate-pulse'}>
	<img
		src="banner.png"
		alt="Banner"
		onload={() => (loaded = true)}
		class="aspect-[21/9] w-full object-cover transition-opacity duration-300 {loaded
			? 'opacity-100'
			: ' opacity-0'}"
		loading="lazy"
	/>
</div>

<div class="content">
	<h2 class="text-glowing h2">{m.example()}</h2>
</div>
