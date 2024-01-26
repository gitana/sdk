import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import Main from "./views/Main.vue";
import BookView from "./views/BookView.vue";
import SearchView from "./views/SearchView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/book/:id",
        component: BookView
    },
    {
        path: "/search",
        component: SearchView
    },
];

const router = new VueRouter({
    routes: routes
});


new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
});