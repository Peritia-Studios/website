<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>Plebis Online</title>
	<meta name="description" content={m.example()} />
</svelte:head>

<h2 class="h2">Plebis Online</h2>
<p>Some Cool Banner and Animations from Ingame stuff</p>

<div class="container mx-auto">
	<h2 class="h2">Real Content</h2>
	<p>Readable Content should be wrapped inside a containter like</p>
	<h2 class="h2">{m.example()}</h2>
</div>
