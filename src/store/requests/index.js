import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useRequestsStore = defineStore("requests", () => {
  const requests = ref([]);

  const addNewRequest = (newRequest) => {
    requests.value.push(newRequest);
  };

  return { requests, addNewRequest };
});
