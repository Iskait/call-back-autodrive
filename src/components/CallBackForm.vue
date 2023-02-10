<script setup lang="ts">
import axios from "axios";
import { IMaskDirective as vIMaskDirective } from "vue-imask";

defineProps<{
  /** Выбранный город */
  selectedCity: string;
}>();

const emit = defineEmits<{
  (event: "close-form"): void;
  (event: "get-response", response: string): void;
}>();

const cities = [
  {
    id: 1,
    name: "Москва",
  },
  {
    id: 2,
    name: "Санкт-Петербург",
  },
  {
    id: 3,
    name: "Казань",
  },
];

const mask = { mask: "{+7} (000) 000-00-00" };

async function sendRequest(event: Event) {
  const form = event.target as HTMLFormElement;

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  data.phone = (data.phone as string).replace(/[^\d|+]/g, "");

  const { data: response } = await axios({
    method: "POST",
    baseURL: "http://hh.autodrive-agency.ru/",
    url: "test-tasks/front/task-7/",
    data,
  });

  form.reset();

  emit("get-response", response);

  emit("close-form");
}
</script>

<template>
  <div
    class="fixed inset-0 bg-gray/60 overflow-auto grid place-items-center"
    @click.self="emit('close-form')"
  >
    <form
      class="flex flex-col gap-y-6 bg-white rounded-lg p-6 m-5"
      @submit.prevent="sendRequest"
    >
      <h2>Заказать звонок</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-4"
      >
        <div class="flex flex-col gap-y-2">
          <label for="name">Имя*</label>
          <input
            required
            id="name"
            type="text"
            name="name"
            placeholder="Иван"
            minlength="2"
          />
        </div>
        <div class="flex flex-col gap-y-2">
          <label for="phone">Телефон*</label>
          <input
            required
            id="phone"
            type="text"
            name="phone"
            placeholder="+7 (999) 999-88-77"
            pattern="\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}"
            v-i-mask-directive="mask"
          />
        </div>
        <div class="flex flex-col gap-y-2">
          <label for="email">Email*</label>
          <input
            required
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
          />
        </div>
        <div class="flex flex-col gap-y-2 md:col-span-2 lg:col-span-1">
          <label for="city">Город*</label>
          <select name="city_id" id="city">
            <option
              v-for="city in cities"
              :value="city.id"
              :selected="selectedCity === city.name"
            >
              {{ city.name }}
            </option>
          </select>
        </div>
        <button
          class="button bg-green w-full self-end lg:col-start-4"
          type="submit"
        >
          Отправить
        </button>
      </div>
    </form>
  </div>
</template>
