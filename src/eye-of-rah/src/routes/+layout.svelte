<script lang="ts">
    import '../app.css';
    let { children } = $props();
</script>

<nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="text-white text-2xl font-bold">Become millionare</a>
        <div class="space-x-4">
            <a href="/" class="text-gray-300 hover:text-white">Home</a>
            <a href="/about" class="text-gray-300 hover:text-white">About</a>
            <a href="/faq" class="text-gray-300 hover:text-white">FAQ</a>
            <a href="/contact" class="text-gray-300 hover:text-white">Contact</a>
        </div>
    </div>
</nav>

<main class="p-4">
    {@render children()}
</main>