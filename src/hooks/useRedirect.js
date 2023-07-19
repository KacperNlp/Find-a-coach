import { useRouter } from "vue-router";

export function useRedirect() {
  const router = useRouter();

  const redirectToCoachesPage = () => {
    router.replace("/coaches");
  };

  return { redirectToCoachesPage };
}
