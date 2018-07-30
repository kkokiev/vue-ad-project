import Vue from 'vue'
import * as fb from 'firebase'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    const config = {
      apiKey: 'AIzaSyBbPv4WtoQZZrMTHS9Kyxwt9suNnNzORBs',
      authDomain: 'vue-ads-bb98a.firebaseapp.com',
      databaseURL: 'https://vue-ads-bb98a.firebaseio.com',
      projectId: 'vue-ads-bb98a',
      storageBucket: 'vue-ads-bb98a.appspot.com',
      messagingSenderId: '999372150787'
    }

    fb.initializeApp(config)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
