<script setup lang="ts">
import TasksList from '@/components/TasksList.vue';
import { Button } from '@/components/ui/button';
import { usePocketBase } from '@/hooks/usePocketBase';
import { useRouter } from 'vue-router';
import { ExternalLinkIcon } from '@radix-icons/vue';

const { pb } = usePocketBase();
const router = useRouter();

function goToAuth() {
  router.push('/auth');
}

function logOut() {
  pb.authStore.clear();
  goToAuth();
}

if (!pb.authStore.isValid) {
  goToAuth();
}
</script>

<template>
  <section class="grid grid-cols-[100px,_1fr,_2fr] gap-x-4 place-items-stretch h-full">
    <section class="border-4 rounded-2xl flex flex-col items-center py-6">
      <Button @click="logOut" size="icon" :variant="'outline'">
        <ExternalLinkIcon />
      </Button>
    </section>

    <TasksList />

    <section class="border-4 rounded-2xl">
      <h2 class="text-2xl text-center">Календарь</h2>
    </section>
  </section>
</template>

<style scoped></style>
