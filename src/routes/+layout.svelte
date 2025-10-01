<script lang="ts">
	import '../app.css';
    import Navbar from "$lib/Navbar.svelte";

	let { children } = $props();
</script>

<div class="flex-col h-screen hidden lg:flex">
    <Navbar/>
    <div class="flex-1">
        {@render children?.()}
    </div>
</div>

<div class="lg:hidden flex items-center justify-center h-screen">
    <h1 class="text-3xl font-bold max-w-3/4">Switch to desktop to use Evergreen.</h1>
</div>

