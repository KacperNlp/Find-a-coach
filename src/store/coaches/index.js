import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useCoachesStore = defineStore("coaches", () => {
  const coaches = reactive([
    {
      id: "c1",
      firstName: "Max",
      lastName: "Allon",
      areas: ["frontend", "backend", "career"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati architecto repudiandae fugit nam voluptates exercitationem eos ipsum laudantium autem nesciunt delectus animi est velit, a modi voluptatum rem eveniet enim!",
      hourlyRate: 30,
    },
    {
      id: "c2",
      firstName: "Anni",
      lastName: "Duck",
      areas: ["frontend", "backend"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati architecto repudiandae fugit nam voluptates exercitationem eos ipsum laudantium autem nesciunt delectus animi est velit, a modi voluptatum rem eveniet enim!",
      hourlyRate: 25,
    },
  ]);

  const getCoaches = computed(() => coaches);
  const hasCoaches = computed(() => coaches && coaches.length > 0);

  return { coaches, getCoaches, hasCoaches };
});
