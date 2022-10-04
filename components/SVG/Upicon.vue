<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    :viewBox="`0 0 ${width || size} ${height || size}`"
    fill="none"
    
    
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-chevron-up"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</template>