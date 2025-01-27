<script>
	import { page } from '$app/state';
</script>

<div class="content">
	<h2 class="h2">
		<span class="text-glowing">{page.status} - {page.error?.message || 'Unknown Error'}</span>
	</h2>
</div>
