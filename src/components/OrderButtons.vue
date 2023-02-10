<script setup lang="ts">
defineEmits<{
  (event: "choose-city", city: string): void;
}>();
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-y-3 gap-x-5 py-4 container mx-auto">
    <button @click="$emit('choose-city', 'Москва')" class="button bg-blue">
      Заказать в Москву
    </button>
    <button
      @click="$emit('choose-city', 'Санкт-Петербург')"
      class="button bg-light-green"
    >
      Заказать в Санкт-Петербург
    </button>
  </div>
</template>
