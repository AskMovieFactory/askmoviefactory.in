<template>
    <div class="max-w-7xl mx-auto w-full space-y-8 px-2">
        <div>
            <h2 class="text-6xl font-bold uppercase mx-auto text-center font-shadow">
                <span class="text-white">A</span
                ><span class="text-ask-foreground">S</span
                ><span class="text-zinc-700">K</span> Movie Factory
            </h2>
        </div>
        <div class = "max-w-prose prose prose-invert mx-auto text-justify">
            <!---->
        </div>
        <div class="py-2 flex flex-row items-center justify-center">
            <select
                v-model="workType"
                class="h-12 bg-zinc-800 px-2 w-full lg:w-48 cursor-pointer"
                placeholder="Type"
            >
                <option :value="null" selected>All</option>
                <option v-for="wType in WorkTypes" :key="wType" :value="wType">
                    {{ wType }}
                </option>
            </select>
            <input
                type="text"
                class="h-12 bg-zinc-800 py-2 px-4 w-full lg:w-96"
                v-model="searchQuery"
                placeholder="Search for a work"
            />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 p-4 items-center">
            <div
                v-for="work in Works.filter(
                    (x) =>
                        (workType !== null ? x.type === workType : true) &&
                        x.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                )"
                :key="`work_${Works.findIndex((x) => x.title === work.title)}`"
                class="mx-auto"
            >
                <CardItem
                    :name="work.title"
                    :category="work.type"
                    :link="`/works/${work.title
                        .toLowerCase()
                        .replace(/\s/g, `_`)}`"
                    :image="work.poster"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Works from "@/data/Works";
    import { WorkTypes } from "@/data/Constants";

    const workType = ref<string | null>(null);
    const searchQuery = ref("");
</script>
