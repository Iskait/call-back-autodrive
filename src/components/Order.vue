<script setup lang="ts">
import { ref } from "vue";
import OrderButtons from "./OrderButtons.vue";
import CallBackForm from "./CallBackForm.vue";
import OrderResponse from "./OrderResponse.vue";

const selectedCity = ref("");

const showForm = ref(false);

function fillForm(city: string) {
  selectedCity.value = city;
  showForm.value = true;
}

const responseFromServer = ref("");
</script>

<template>
  <div>
    <OrderButtons @choose-city="fillForm($event)" />
    <CallBackForm
      v-if="showForm"
      :selected-city="selectedCity"
      @close-form="showForm = false"
      @get-response="responseFromServer = $event"
    />
    <OrderResponse
      v-if="responseFromServer"
      :response-from-server="responseFromServer"
      @close-form="responseFromServer = ''"
    />
  </div>
</template>
