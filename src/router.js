import { createRouter, createWebHistory } from "vue-router";

//Pages
import ContactCoach from "./pages/requests/ContactCoach.vue";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachList from "./pages/coaches/CoachList.vue";
import CoachLogin from "./pages/coaches/CoachLogin.vue";
import CoachRegister from "./pages/coaches/CoachRegister.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    component: CoachList,
  },
  {
    path: "/coaches/:id",
    component: CoachDetail,
    props: true,
    children: [
      {
        path: "contact",
        component: ContactCoach,
      },
    ],
  },
  {
    path: "/register",
    component: CoachRegister,
  },
  {
    path: "/login",
    component: CoachLogin,
  },
  {
    path: "/requests",
    component: RequestsReceived,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
