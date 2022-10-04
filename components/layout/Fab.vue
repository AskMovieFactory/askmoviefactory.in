<template>
    <div>
        <div :class="`fixed top-0 left-0 flex flex-col items-start z-40 space-y-4`">
            <div
                id="fabButton"
                :class="`bg-black/70 flex items-center w-16 h-16 z-50 relative`"
            >
                <button
                    :class="`p-4 transform transition duration-500 ease-in-out mx-auto block`"
                    @click="toggleBoth"
                >
                <svg
                    :class="`block h-8 w-8 text-white stroke-2`"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 30 24"
                >
                    <g>
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="toggleNav ? `M4 6 L24 24` : `M4 6 L28 06`"
                        />
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="toggleNav ? `M4 6 L24 24` : `M4 14 L 20 14`"
                        />
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="toggleNav ? `M24 06 L 4 24` : `M04 22 L 12 22`"
                        />
                    </g>
                </svg>
                </button>
            </div>

            <div
                id="fabItems"
                :class="`transform transition-all duration-500 ease-in-out mb-7 ${
                    toggleNav
                        ? `translate-x-0`
                        : `-translate-x-140 overflow-x-hidden`
                }`"
            >
                <ul :class="` flex-col items-center space-y-4 w-full mx-auto`">
                    <div v-for="navItem in nav" :key="navItem.key">
                        <a
                            :class="`relative group flex items-center cursor-pointer`"
                            :href="navItem.action"
                        >
                            <li
                                :class="`relative flex group items-center p-4 w-16 h-16 bg-black/40`"
                            >
                                <div
                                    :class="`px-auto flex items-center mx-auto stroke-white stroke-2`"
                                >
                                    <svg
                                        :class="`block h-8 w-8 stroke-white stroke-2`"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="white"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            :class="`transition-all duration-500 transform ease-in-out`"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            :d="navItem.routeIcon"
                                        />
                                    </svg>
                                </div>
                                <div
                                    :class="`absolute left-24 max-w-[70rem] flex justify-end transition-all overflow-hidden duration-500 ease-in-out text-right lg:max-w-0 lg:group-hover:max-w-[70rem]`"
                                >
                                    <MiscTag>{{ navItem.toolTip }}</MiscTag>
                                </div>
                            </li>
                        </a>
                    </div>
                </ul>
            </div>
        </div>
        <div
            :class="`inset-0 w-full fixed h-full z-30 block bg-zinc-black/40 backdrop-blur-md ${
                toggleNav ? `visible` : `invisible`
            }`"
            @click="toggleOff"
        ></div>
    </div>
</template>

<script setup>
    const toggleNav = ref(false);

    const { nav } = defineProps(["nav"]);

    const toggleOff = () => {
        toggleNav.value = true;
    };
    const toggleOn = () => {
        toggleNav.value = true;
    };

    const toggleBoth = () => {
        toggleNav.value = !toggleNav.value;
    };
</script>
