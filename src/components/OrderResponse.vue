<script setup lang="ts">
defineProps<{
  responseFromServer: string;
}>();

const emit = defineEmits<{
  (event: "close-form"): void;
}>();
</script>

<template>
  <div
    class="fixed inset-0 bg-gray/60 overflow-auto grid place-items-center"
    @click.self="emit('close-form')"
  >
    <div class="bg-white p-10 rounded-lg relative">
      <div v-html="responseFromServer"></div>
      <img
        src="/x-mark.svg"
        alt="x-mark"
        @click="emit('close-form')"
        class="absolute top-5 right-5 cursor-pointer h-5 w-5"
      />
    </div>
  </div>
</template>
