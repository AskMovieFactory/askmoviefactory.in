<template>
    <article>
        <ContentDoc>
            <template #default="{ doc }">
                <div
                    class="flex flex-col text-justify md:flex-row items-start max-w-7xl mx-auto md:justify-start space-y-8 gap-8 md:space-y-0 lg:space-x-8"
                >
                    <article
                        class="prose prose-zinc order-2 dark:prose-invert max-w-full lg:max-w-prose prose-code:before:content-none prose-code:after:content-none p-2 lg:px-4 bg-chaos-secondary rounded-xl"
                    >
                        <ContentRenderer :value="doc" />
                    </article>
                    <BlogTableOfContents
                        :content="doc.body.toc.links"
                        class="order-1"
                    />
                </div>
            </template>
            <template #not-found>
                <div>Invalid Route</div>
            </template>
        </ContentDoc>
    </article>
</template>

<style lang="postcss">
    /* Customize headers to remove default underline */
    .prose h2 a {
        @apply no-underline transition duration-500 ease-in-out block font-bold border-b border-neutral-600 dark:border-neutral-300;
        &:hover {
            @apply text-zinc-600 dark:text-ask-foreground;
        }
    }
    .prose h3 a {
        @apply font-semibold no-underline;
    }
</style>
<script setup></script>
