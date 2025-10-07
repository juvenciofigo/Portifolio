<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
    <mask id="circleMask">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#circleMask)">
      <!-- Verde à esquerda -->
      <rect width="256" height="512" fill="#006600" />
      <!-- Vermelho à direita -->
      <rect x="256" width="256" height="512" fill="#FF0000" />
      <!-- Escudo central simplificado -->
      <circle cx="256" cy="256" r="64" fill="#FFCC00" />
      <circle cx="256" cy="256" r="48" fill="#FFFFFF" />
      <circle cx="256" cy="256" r="32" fill="#FF0000" />
    </g>
  </svg>
</template>

<script lang="ts" setup></script>

<style></style>
