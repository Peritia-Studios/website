<script>
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import Discord from '$lib/components/icons/Discord.svelte';
	import BlueSky from '$lib/components/icons/BlueSky.svelte';
	import Instagram from '$lib/components/icons/Instagram.svelte';
	import MobileDrawer from './MobileDrawer.svelte';
	import PlebisOnline from '$lib/components/icons/PlebisOnline.svelte';

	let real_route = $derived(i18n.route(page.url.pathname));
</script>

<div class="flex items-center justify-start gap-6">
	<MobileDrawer />
	<a href="/" title={m.nav_home()} class="hidden items-center justify-center md:flex">
		<PlebisOnline
			size={42}
			class={real_route === '/' || real_route === '' ? 'icon-glowing' : 'opacity-80'}
		/>
	</a>
	<a
		class="hidden hover:underline md:flex {i18n.route(page.url.pathname) === '/updates'
			? ''
			: 'opacity-60'}"
		href="/updates"
		title={m.nav_updates()}>{m.nav_updates()}</a
	>
	<a
		class="hidden hover:underline md:flex {i18n.route(page.url.pathname) === '/about'
			? ''
			: 'opacity-60'}"
		href="/about"
		title={m.nav_about()}>{m.nav_about()}</a
	>
</div>
<div class="flex items-center gap-2">
	{#each availableLanguageTags as lang}
		<a
			href={i18n.route(page.url.pathname)}
			hreflang={lang}
			class="hover:underline {lang === languageTag() ? '' : 'opacity-60'}"
		>
			{lang.toUpperCase()}
		</a>
	{/each}
</div>
<div class="flex items-center justify-end gap-1">
	<a class="btn-icon" href="https://discord.com/" target="_blank" title="Discord">
		<Discord size="20" />
	</a>
	<a class="btn-icon" href="https://bsky.app/" target="_blank" title="BlueSky">
		<BlueSky size="20" />
	</a>
	<a class="btn-icon" href="https://instagram.com/" target="_blank" title="Instagram">
		<Instagram size="20" />
	</a>
</div>
