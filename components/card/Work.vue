<template>
    <div class="lg:p-4">
        <div
            class="w-full lg:p-4 rounded-xl mx-auto h-full block bg-opacity-20 transform tracking-wide"
        >
            <div class="md:flex lg:p-4">
                <div class="md:flex-shrink-0">
                    <img
                        :src="image"
                        class="w-full w-full lg:w-96 object-contain"
                        :alt="title"
                    />
                </div>
                <div class="flex-grow p-2 px-8 max-w-prose">
                    <p
                        class="text-3xl font-bold text-ask-foreground pt-3 text-center md:text-left"
                    >
                        {{ title }}
                    </p>
                    <div class="py-3 text-justify prose prose-invert">
                        {{ description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const { title, description, image } = defineProps<{
        title: string;
        description: string;
        image: string;
    }>();
</script>
