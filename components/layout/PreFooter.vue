<template>
    <div class="bg-zinc-800 w-full">
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-2 flex-1 max-w-7xl mx-auto py-4"
        >
            <table class="p-2 stroke-white stroke-2">
                <tr
                    v-for="c in Object.keys(contact)"
                    :key="contact[c]"
                    class="gap-2 items-center"
                >
                    <td><SVGWrapper :name="c" /></td>
                    <td>
                        <span>{{ contact[c] }}</span>
                    </td>
                </tr>
            </table>
            <div class="ml-auto">
                <SVGAsk width="300" height="200" />
            </div>
        </div>
    </div>
</template>
<script setup>
    const contact = {
        message: "info@askmoviefactory.in",
    };
</script>
