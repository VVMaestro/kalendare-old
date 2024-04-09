<script setup lang="ts">
  import TasksList from '@/components/TasksList.vue';
  import { Button } from '@/components/ui/button';
  import { usePocketBase } from '@/hooks/usePocketBase';
  import { useRouter } from 'vue-router';

  const { pb } = usePocketBase();
  const router = useRouter();

  if (!pb.authStore.isValid) {
    router.push('/auth');
  }
</script>

<template>
  <section
    class="grid grid-cols-[_1fr,_2fr] gap-x-4 place-items-stretch h-full"
  >
    <TasksList />

    <section class="border-4 rounded-2xl">
      <h2 class="text-2xl text-center">Календарь</h2>

      <Button @click="pb.authStore.clear()">Exit</Button>
    </section>
  </section>
</template>

<style scoped>
</style>