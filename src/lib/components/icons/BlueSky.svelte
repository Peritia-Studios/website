<script lang="ts">
	import { Icon } from 'lucide-svelte';

	const iconNode: any = [
		[
			'path',
			{
				d: 'M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748 114.875 19.55 144.097 84.31 80.986 149.07-119.86 122.992-172.272-30.859-185.702-70.281-3.614-10.608-3.631-7.733-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z'
			}
		]
	];

	/**
	 * @component @name Bluesky
	 * @description Lucide SVG icon component, renders SVG Element with children.
	 *
	 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTY4IDUwMC4xMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIzLjEyMSAzMy42NjRDMTg4LjI0MSA4Mi41NTMgMjU4LjI4MSAxODEuNjggMjg0IDIzNC44NzNjMjUuNzE5LTUzLjE5MiA5NS43NTktMTUyLjMyIDE2MC44NzktMjAxLjIxQzQ5MS44NjYtMS42MTEgNTY4LTI4LjkwNiA1NjggNTcuOTQ3YzAgMTcuMzQ2LTkuOTQ1IDE0NS43MTMtMTUuNzc4IDE2Ni41NTUtMjAuMjc1IDcyLjQ1My05NC4xNTUgOTAuOTMzLTE1OS44NzUgNzkuNzQ4IDExNC44NzUgMTkuNTUgMTQ0LjA5NyA4NC4zMSA4MC45ODYgMTQ5LjA3OS0xMTkuODYgMTIyLjk5Mi0xNzIuMjcyLTMwLjg1OS0xODUuNzAyLTcwLjI4MS0zLjYxNC0xMC42MDgtMy42MzEtNy43MzMtMy42MzEgNy43MzMtMTMuNDMgMzkuNDIyLTY1Ljg0MiAxOTMuMjczLTE4NS43MDIgNzAuMjgxLTYzLjExMS02NC43Ni0zMy44OS0xMjkuNTIgODAuOTg2LTE0OS4wNzEtNjUuNzIgMTEuMTg1LTEzOS42LTcuMjk1LTE1OS44NzUtNzkuNzQ4QzkuOTQ1IDIwMy42NTkgMCA3NS4yOTEgMCA1Ny45NDYgMC0yOC45MDYgNzYuMTM1LTEuNjEyIDEyMy4xMjEgMzMuNjY0WiIgLz48L3N2Zz4=) - https://lucide.dev/icons/bluesky
	 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	 *
	 * @param {Object} props - Lucide icons props and any valid SVG attribute
	 * @returns {FunctionalComponent} Svelte component
	 *
	 */
</script>

<Icon name="bluesky" {...$$props} fill="currentColor" viewBox="0 0 568 500.13" {iconNode}>
	<slot />
</Icon>
