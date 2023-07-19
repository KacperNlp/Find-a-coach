import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { useCoachesStore } from "../coaches/index.js";

export const useRequestsStore = defineStore("requests", () => {
  const coaches = useCoachesStore();

  const requests = ref([
    {
      message: "Helloe therer",
      email: "duap@wp.pl",
      id: "b2",
      coachId: "c1",
      answear: "My ansewar",
    },
  ]);

  const getLoggedUserRequests = computed(() => {
    const loggedUserRequests = requests.value.filter(
      (req) => req.coachId === coaches.userId
    );
    return loggedUserRequests;
  });

  const addNewRequest = (newRequest) => {
    requests.value.push(newRequest);
  };

  return { requests, getLoggedUserRequests, addNewRequest };
});
