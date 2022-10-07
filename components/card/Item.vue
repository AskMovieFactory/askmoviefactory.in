<template>
    <NuxtLink
        class="block p-4 transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1"
        :to="link"
    >
        <div class="max-w-md rounded-xl w-full p-4 bg-zinc-800 shadow-xl">
            <div class="flex flex-col items-stretch space-y-8">
                <div class="shrink-0 flex justify-center">
                    <NuxtImg
                        :src="image"
                        provider="twicpics"
                        :alt="name"
                        class="object-cover h-full w-full lg:w-72 lg:h-72"
                    />
                </div>
                <div class="flex flex-col items-center text-center space-y-4">
                    <div class="text-2xl font-semibold">{{ name }}</div>
                    <div class="text-base dark:text-zinc-100 text-zinc-900">
                        {{ category }}
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup lang="ts">
    const { name, category, image, link } = defineProps<{
        name: string;
        category: string;
        image: string;
        link: string;
    }>();
</script>
