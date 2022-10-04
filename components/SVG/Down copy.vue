<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    :viewBox="`0 0 ${width || size} ${height || size}`"
    fill="none"
    
    
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-chevron-down"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default() {
        return '24'
      },
    },
    width: {
      type: String,
      default() {
        return null
      },
    },
    height: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>