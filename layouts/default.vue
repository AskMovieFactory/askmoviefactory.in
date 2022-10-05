<template>
    <div class = "min-h-screen flex flex-col items-center tracking-wide leading-6 bg-zinc-900 text-white font-montserrat w-full">
        <main class = "flex-1 py-8 mt-12 w-full">
            <slot />
        </main>
        <LayoutFab :nav = "Navigation" />
        <LayoutFooter />
    </div>
</template>
<script setup>
    import Navigation from "@/data/Navigation"
</script>