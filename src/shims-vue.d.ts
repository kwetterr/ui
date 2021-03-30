import VueNotification from 'vue-notification'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  import Router from 'vue-router'
  import Notifications from 'vue-notification'
  interface Vue {
    $router: Router,
    $notification: Notifications
  }
}