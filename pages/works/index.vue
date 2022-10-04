<template>
    <div class="max-w-7xl mx-auto w-full">
        <h1 class="mx-auto text-center text-4xl font-semibold uppercase">Our Works</h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 p-4 items-center">
            <div
                v-for="work in Works"
                :key="`work_${Works.findIndex((x) => x.title === work.title)}`"
                class="mx-auto"
            >
                <CardItem
                    :name="work.title"
                    :description="work.description"
                    :link="`/works/${Works.findIndex(
                        (x) => x.title === work.title
                    )}`"
                    :image="work.poster"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import Works from "@/data/Works";
</script>
