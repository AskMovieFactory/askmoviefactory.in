<template>
  <div class="p-4">
    <div class="max-w-md rounded-xl w-full p-4 bg-zinc-800 shadow-xl">
      <div class="flex flex-col items-stretch space-y-8">
        <div class="shrink-0 flex justify-center">
          <img
            :src="image"
            class="object-cover h-72"
          />
        </div>
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="text-2xl font-semibold">{{name}}</div>
          <div class="text-base dark:text-zinc-100 text-zinc-900">{{description}}</div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
};
</script>