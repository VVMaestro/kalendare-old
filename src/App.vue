<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';
</script>

<template>
  <main class="h-screen py-4">
    <RouterView />
  </main>

  <Toaster />
</template>

<style scoped></style>
