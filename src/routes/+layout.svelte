<script lang="ts">
	import '../app.css';
    import Navbar from "$lib/Navbar.svelte";

	let { children } = $props();
</script>

<div class="flex flex-col h-screen">
    <Navbar/>
    <div class="flex-1">
        {@render children?.()}
    </div>
</div>

