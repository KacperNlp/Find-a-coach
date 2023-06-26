import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCoachesStore = defineStore("coaches", () => {
  const coaches = ref([
    {
      id: "c1",
      firstName: "Max",
      lastName: "Allon",
      areas: ["frontend", "backend", "career"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati architecto repudiandae fugit nam voluptates exercitationem eos ipsum laudantium autem nesciunt delectus animi est velit, a modi voluptatum rem eveniet enim! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo enim consequatur minus voluptatum qui placeat deserunt ab sapiente veniam quod iste reprehenderit possimus, tempore laudantium corrupti neque ipsum ex dolore aut quo! Aspernatur repellat nesciunt eos pariatur id reiciendis accusantium.",
      hourlyRate: 30,
    },
    {
      id: "c2",
      firstName: "Anni",
      lastName: "Duck",
      areas: ["frontend", "backend"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati architecto repudiandae fugit nam voluptates exercitationem eos ipsum laudantium autem nesciunt delectus animi est velit, a modi voluptatum rem eveniet enim! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nobis sint fuga fugit magni, quidem reprehenderit, obcaecati architecto eius atque ducimus eveniet quo sunt quae!",
      hourlyRate: 25,
    },
  ]);
  let filters = ref([
    { text: "Frontend", id: "frontend", checked: true },
    { text: "Backend", id: "backend", checked: true },
    { text: "Career", id: "career", checked: true },
  ]);
  const userId = ref("c3");

  const getCoaches = computed(() => {
    const filteredCoaches = [...coaches.value].filter((coach) => {
      for (const filter of filters.value) {
        if (coach.areas.includes(filter.id) && filter.checked) return true;
      }
      return false;
    });

    return filteredCoaches;
  });
  const getFilters = computed(() => filters.value);
  const getCurrentUserId = computed(() => userId.value);
  const isRegisteredAsCoach = computed(() => {
    return coaches.value.some((coach) => coach.id === userId.value);
  });

  function updateFilters(updatedFilters) {
    filters.value = updatedFilters;
  }

  function createNewCoach(coach) {
    const newArrayWithCoaches = [...coaches.value];
    newArrayWithCoaches.push(coach);
    coaches.value = newArrayWithCoaches;
  }

  return {
    coaches,
    filters,
    userId,
    getCoaches,
    getFilters,
    getCurrentUserId,
    isRegisteredAsCoach,
    updateFilters,
    createNewCoach,
  };
});
