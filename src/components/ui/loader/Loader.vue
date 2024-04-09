<script setup lang="ts">
  import { LoaderCircle } from 'lucide-vue-next';
  import { cn } from '@/lib/utils';
  import { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <LoaderCircle :class="cn('animate-spin', props.class)" />
</template>
