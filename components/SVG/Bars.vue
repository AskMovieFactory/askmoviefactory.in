<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    :width="width || size"
    :height="height || size"
    :viewBox="`0 0 ${width || size} ${height || size}`"
    
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</template>
