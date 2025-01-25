<script>
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import Discord from '$lib/components/icons/Discord.svelte';
	import BlueSky from '$lib/components/icons/BlueSky.svelte';
	import Instagram from '$lib/components/icons/Instagram.svelte';
	import PlebisOnlineActive from '$lib/components/icons/PlebisOnlineActive.svelte';
	import SpinningIcon from '$lib/components/icons/SpinningIcon.svelte';

	let real_route = $derived(i18n.route(page.url.pathname));
	let icon_rotation = $state(1);
</script>

<div class="flex items-center justify-start gap-6">
	<div class="flex items-center">
		<a href="/" title="Plebis Online" class="flex items-center justify-center">
			<SpinningIcon
				bind:rotation={icon_rotation}
				Icon={PlebisOnlineActive}
				size={42}
				className={real_route === '/' || real_route === '' ? '' : 'opacity-60'}
			/>
		</a>
	</div>
	<div class="flex items-center justify-start gap-6">
		<a
			class="hover:underline {i18n.route(page.url.pathname) === '/updates' ? '' : 'opacity-60'}"
			href="/updates"
			title={m.nav_updates()}>{m.nav_updates()}</a
		>
		<a
			class="hover:underline {i18n.route(page.url.pathname) === '/about' ? '' : 'opacity-60'}"
			href="/about"
			title={m.nav_about()}>{m.nav_about()}</a
		>
	</div>
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
	<a
		class="bg-surface-none flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 hover:brightness-90 dark:hover:brightness-110"
		href="https://todo.com/"
		target="_blank"
		title="Discord"
	>
		<Discord size="20" />
	</a>
	<a
		class="bg-surface-none flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 hover:brightness-90 dark:hover:brightness-110"
		href="https://todo.com/"
		target="_blank"
		title="BlueSky"
	>
		<BlueSky size="20" />
	</a>
	<a
		class="bg-surface-none flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 hover:brightness-90 dark:hover:brightness-110"
		href="https://todo.com/"
		target="_blank"
		title="Instagram"
	>
		<Instagram size="20" />
	</a>
</div>
