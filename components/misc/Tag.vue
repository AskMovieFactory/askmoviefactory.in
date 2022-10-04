<template>
    <span
        :class="`
      bg-black text-ask-foreground
      text-xs lg:text-sm
      font-bold
      inline-flex
      items-center
      px-1.5
      py-0.5
      rounded
    `"
    >
        <slot />
    </span>
</template>
<script setup lang="ts">
</script>
