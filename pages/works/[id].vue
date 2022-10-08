<template>
    <div class="p-4 flex flex-col items-center space-y-8">
        <CardWork
            :title="`${Work.title} (${Work.year})`"
            :description="Work.description"
            :image="Work.poster"
        />

        <div class="flex flex-col items-center space-y-4">
            <h2 class="text-2xl font-bold uppercase text-ask-foreground">
                Cast & Crew
            </h2>
            <div class="w-full">
                <table
                    class="table-auto gap-4 border-collapse w-full text-xs lg:text-base"
                >
                    <tbody class="bg-zinc-900">
                        <tr
                            v-for="person in new Set(Work.crew.map(x => x.title))"
                            :key="person"
                            class="odd:bg-zinc-800 even:bg-zinc-900"
                        >
                            <td class="p-1 md:p-2 lg:px-4 font-semibold">
                                {{ person }}
                            </td>
                            <td class="p-1 md:p-2 lg:px-4">
                                {{ Work.crew.filter(x => x.title === person).map(x => x.name).join(", ") }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="Work.trailer" class="flex flex-col items-center space-y-4">
            <h2 class="text-2xl font-bold uppercase text-ask-foreground">
                Trailer
            </h2>
            <div class="w-full">
                <iframe
                    :src="Work.trailer"
                    class="w-full h-full lg:w-[40rem] lg:h-[20rem]"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    stitle="Kumaresan Collector Trailer"
                >
                </iframe>
            </div>
        </div>

        <div class="flex flex-col items-center space-y-4">
            <h2 class="text-2xl font-bold uppercase text-ask-foreground">
                Awards
            </h2>
            <input
                type="text"
                class="h-12 bg-zinc-800 py-2 px-4 w-full lg:w-96"
                v-model="searchQuery"
                placeholder="Search for an award"
                title="Filters: 'festival:festival name', 'on:20XX', 'category:award category', 'recepient:recepient name', 'type:winner/semi finalist/finalist/nominee/honourable mention/official selection'"
            />
            <table
                class="table-auto gap-4 border-collapse w-full text-xs lg:text-base"
            >
                <thead class="bg-zinc-700 w-full">
                    <tr class="w-full">
                        <th class="p-1 md:p-2 lg:px-4">#</th>
                        <th class="p-1 md:p-2 lg:px-4">Festival</th>
                        <th class="p-1 md:p-2 lg:px-4">Year</th>
                        <th class="p-1 md:p-2 lg:px-4">Category</th>
                        <th class="p-1 md:p-2 lg:px-4">Type</th>
                        <th class="p-1 md:p-2 lg:px-4">Recepient</th>
                    </tr>
                </thead>
                <tbody class="bg-zinc-900">
                    <tr
                        v-for="(award, i) in filteredAwards"
                        :key="award.name"
                        class="odd:bg-zinc-800 even:bg-zinc-900"
                    >
                        <td class="p-1 md:p-2 lg:px-4">{{ i + 1 }}.</td>
                        <td class="p-1 md:p-2 lg:px-4">{{ award.name }}</td>
                        <td class="p-1 md:p-2 lg:px-4">{{ award.date }}</td>
                        <td class="p-1 md:p-2 lg:px-4">
                            {{
                                [AwardType.WINNER, AwardType.NOMINEE].includes(
                                    award.award
                                )
                                    ? award.category
                                    : "-"
                            }}
                        </td>
                        <td class="p-1 md:p-2 lg:px-4">
                            {{ getAward(award.award) }}
                        </td>
                        <td class="p-1 md:p-2 lg:px-4">{{ award.winner }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Works from "@/data/Works";
    import { WorkTypes } from "@/data/Constants";
    import { AwardType } from "@/data/Works";

    const route = useRoute();

    const Work = Works.find(
        (x) =>
            x.title.toLowerCase() ===
            route.params.id.toString().toLowerCase().replace(/_/g, " ")
    );
    if (!Work) navigateTo("/works");
    const searchQuery = ref("");

    useHead({
        title: `${Work.title} (${Work.year})`,
        meta: [
            {
                name: "description", hid: "description", content: Work.description
            },
            {
                name: "og:image", hid: "og:image", content: Work.poster
            }
        ]
    })

    function getAward(t: AwardType) {
        switch (t) {
            case AwardType.FINALIST:
                return "Finalist";
            case AwardType.SEMI_FINALIST:
                return "Semi-Finalist";
            case AwardType.WINNER:
                return "Winner";
            case AwardType.OFFICAL_SELECTION:
                return "Official Selection";
            case AwardType.NOMINEE:
                return "Nominee";
            case AwardType.HONOURABLE_MENTION:
                return "Honourable Mention";
            default:
                return "Unknown";
        }
    }

    const filteredAwards = computed(() => {
        const awards = Work.awards;
        const festival = /festival:([^;]+)/.exec(searchQuery.value);
        const category = /category:([^;]+)/.exec(searchQuery.value);
        const date = /on:([^;]+)/.exec(searchQuery.value);
        const award = /type:([^;]+)/.exec(searchQuery.value);
        const winner = /recepient:([^;]+)/.exec(searchQuery.value);
        const conditions = [];

        if (festival)
            conditions.push(
                (x) => x.name.toLowerCase() === festival[1].toLowerCase()
            );
        if (category)
            conditions.push(
                (x) => x.category.toLowerCase() === category[1].toLowerCase()
            );
        if (date)
            conditions.push(
                (x) => x.date.toLowerCase() === date[1].toLowerCase()
            );
        if (award)
            conditions.push(
                (x) => getAward(x.award).toLowerCase() === award[1].toLowerCase()
            );
        if (winner)
            conditions.push(
                (x) => x.winner.toLowerCase() === winner[1].toLowerCase()
            );
        return awards.filter(
            (x) =>
                x.name
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase()) ||
                (conditions.length && conditions.every((fn) => fn(x)))
        );
    });
</script>
