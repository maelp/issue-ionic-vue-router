import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import ItemView from "../views/ItemView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: ItemView,
    props: { id: "1" },
  },
  {
    path: "/view/:id",
    component: ItemView,
    props: (route) => {
      console.log("------- props method called");
      return {
        id: route.params.id,
      };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
