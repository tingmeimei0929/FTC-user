declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
declare module 'vue/types/vue' {
  interface Vue {
    $api: any;
    $bus: any;
    // $router: VueRouter;
    // $route: Route;
  }
}
