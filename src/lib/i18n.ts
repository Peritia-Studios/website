import * as runtime from '$lib/paraglide/runtime';
import { createI18n } from '@inlang/paraglide-sveltekit';
export const i18n = createI18n(runtime, {
	pathnames: {
		'/about': {
			en: '/about-us',
			de: '/ueber-uns',
			la: '/de-nobis'
		},
		'/updates': {
			en: '/updates',
			de: '/updates',
			la: '/renovationes'
		}
	}
});
