<template>
    <div class="bg-zinc-800 w-full">
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-2 flex-1 max-w-7xl mx-auto py-4"
        >
            <div class="flex flex-col space-y-2 p-4">
                <h2 class="text-3xl font-bold uppercase font-schoolbell">
                    <span class="text-white">A</span
                    ><span class="text-ask-foreground">S</span
                    ><span class="text-black">K</span> Movie Factory
                </h2>
                <table class="p-2 stroke-white stroke-2">
                    <tr
                        v-for="c in Object.keys(contact)"
                        :key="contact[c]"
                        class="gap-2 items-center"
                    >
                        <td><SVGWrapper :name="c" /></td>
                        <td>
                            <a :href="contact[c].href">{{
                                contact[c].content
                            }}</a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="ml-auto">
                <SVGAsk width="300" height="200" />
            </div>
        </div>
    </div>
</template>
<script setup>
    const contact = {
        message: {
            href: "mailto:info@askmoviefactory.in",
            content: "info@askmoviefactory.in",
        },
    };
</script>
