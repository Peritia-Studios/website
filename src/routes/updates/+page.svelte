<script lang="ts">
	import { page } from '$app/state';
	import { updates } from '$lib';
	import * as m from '$lib/paraglide/messages';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';

	let value = $state(['']);
	onMount(() => {
		value = [page.url.searchParams.get('version') || updates[0].version];
		let el = document.getElementById(value[0]);
		if (el) el.scrollIntoView();
	});
</script>

<svelte:head>
	<title>{m.nav_updates()} - Plebis Online</title>
	<meta name="description" content={m.nav_updates()} />
</svelte:head>

<div class="content">
	<p>{m.updates_description()}!</p>

	<Accordion {value} collapsible>
		{#each updates as { title, date, version, description }}
			<div id={version}>
				<Accordion.Item value={version} controlHover="hover:preset-tonal-warning">
					{#snippet control()}
						<div class="flex items-center justify-between">
							<p class="text-glowing">{title}</p>
							<p>{date}</p>
						</div>
					{/snippet}
					{#snippet panel()}<p>{@html description}</p>{/snippet}
				</Accordion.Item>
				<hr class="hr" />
			</div>
		{/each}
	</Accordion>
</div>
