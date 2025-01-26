<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.nav_about()} - Plebis Online</title>
	<meta name="description" content={m.nav_about()} />
</svelte:head>

<div class="content">
	<h2 class="h2">{m.about_journey()}</h2>
	{@html m.about_journey_text()}
	<h2 class="h2">{m.about_team()}</h2>
	{@html m.about_team_text()}
</div>
