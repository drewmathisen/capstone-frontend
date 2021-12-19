import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Entries from "../views/EntriesIndex.vue";
import EntriesShow from "../views/EntriesShow.vue";
import EntriesEdit from "../views/EntriesEdit.vue";
import EntriesNew from "../views/EntriesNew.vue";
import Logout from "../views/Logout.vue";
import ObservedBodies from "../views/ObservedBodies.vue";
import OBShow from "../views/OBShow.vue";
import ImagesNew from "../views/ImagesNew.vue";
import ImagesShow from "../views/ImagesShow.vue";
import ImagesEdit from "../views/ImagesEdit.vue";
import Pdf from "../views/Pdf.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/entries",
    name: "Entries",
    component: Entries,
  },
  {
    path: "/entries/new",
    name: "EntriesNew",
    component: EntriesNew,
  },
  {
    path: "/entries/:id",
    name: "EntriesShow",
    component: EntriesShow,
  },
  {
    path: "/entries/:id/edit",
    name: "EntriesEdit",
    component: EntriesEdit,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/observedbodies",
    name: "ObservedBodies",
    component: ObservedBodies,
  },
  {
    path: "/observedbodies/:id",
    name: "OBShow",
    component: OBShow,
  },
  {
    path: "/images/:id",
    name: "ImagesShow",
    component: ImagesShow,
  },
  {
    path: "/images/new/:id",
    name: "ImagesNew",
    component: ImagesNew,
  },
  {
    path: "/images/:id/edit",
    name: "ImagesEdit",
    component: ImagesEdit,
  },
  {
    path: "/pdf/:id",
    name: "Pdf",
    component: Pdf,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
