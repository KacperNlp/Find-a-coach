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

  const getCoaches = computed(() => coaches);
  const hasCoaches = computed(() => coaches && coaches.length > 0);

  return { coaches, getCoaches, hasCoaches };
});
