<script lang="ts">
	import { page } from '$app/state';
	import PlebisOnlineActive from '$lib/components/icons/PlebisOnlineActive.svelte';
	import SpinningIcon from '$lib/components/icons/SpinningIcon.svelte';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import { Menu, X } from 'lucide-svelte';

	interface Props {
		icon_rotation: number;
	}

	let { icon_rotation = $bindable(0) }: Props = $props();
	let drawerState = $state(false);

	function drawerClose() {
		drawerState = false;
	}
</script>

<div class="md:hidden">
	<Modal
		bind:open={drawerState}
		triggerBase="btn-icon"
		contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[320px] h-screen"
		positionerJustify="justify-start"
		positionerAlign=""
		positionerPadding=""
		transitionsPositionerIn={{ x: -320, duration: 200 }}
		transitionsPositionerOut={{ x: -320, duration: 200 }}
	>
		{#snippet trigger()}<Menu />{/snippet}
		{#snippet content()}
			<header class="flex items-center justify-between">
				<div class="flex items-center justify-start space-x-3">
					<SpinningIcon
						bind:rotation={icon_rotation}
						Icon={PlebisOnlineActive}
						size={42}
						className="drop-shadow-[0px_0px_8px_#D25401]"
					/>
					<h2 class="h2">Plebis Online</h2>
				</div>
				<button class="btn-icon" onclick={drawerClose}><X /></button>
			</header>
			<div class="flex flex-col gap-2">
				<a
					href="/"
					class="hover:underline {i18n.route(page.url.pathname) === '/' ||
					i18n.route(page.url.pathname) === ''
						? ''
						: 'opacity-60'}"
					onclick={drawerClose}
					title={m.nav_home()}>{m.nav_home()}</a
				>
				<a
					href="/updates"
					class="hover:underline {i18n.route(page.url.pathname) === '/updates' ? '' : 'opacity-60'}"
					onclick={drawerClose}
					title={m.nav_updates()}>{m.nav_updates()}</a
				>
				<a
					href="/about"
					class="hover:underline {i18n.route(page.url.pathname) === '/about' ? '' : 'opacity-60'}"
					onclick={drawerClose}
					title={m.nav_about()}>{m.nav_about()}</a
				>
			</div>
		{/snippet}
	</Modal>
</div>
