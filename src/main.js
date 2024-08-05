import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import { VueFire, VueFireFirestoreOptionsAPI } from "vuefire";
import { firebaseApp } from "./firebase";


import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireFirestoreOptionsAPI()],
});

const vuetify = createVuetify({
    components,
    directives,
  })
  

app.use(router);
app.use(vuetify)

app.mount("#app");
