<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import NavLinks from './NavLinks.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="min-h-screen">
		<header
			class="sticky top-0 z-50 flex h-[70px] w-full items-center border-b-[1px] border-surface-500/20 bg-surface-50/90 backdrop-blur dark:bg-surface-950/90"
		>
			<div
				class="container mx-auto grid max-w-screen-2xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 xl:grid-cols-[1fr_auto_1fr] xl:px-10"
			>
				<NavLinks />
			</div>
		</header>

		<div class="container mx-auto space-y-4 px-4 py-5 xl:px-10">
			{@render children?.()}
		</div>
	</div>
</ParaglideJS>
