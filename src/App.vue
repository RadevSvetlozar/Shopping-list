<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import PWABadge from "./components/PWABadge.vue";

import { ref, onMounted } from "vue";
import { useCollection } from "vuefire";
import { firestore } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";

const itemsRef = collection(firestore, "productsToBuy");
const items = useCollection(itemsRef);
const newItem = ref({ name: "", quantity: 1 });
const addItem = async () => {
  console.log(itemsRef, newItem.value);
  await addDoc(itemsRef, newItem.value);
  newItem.value = { name: "", quantity: 1 };
};

const showMenu = ref(false);
</script>

<template>
  <v-app class="main">
    <v-navigation-drawer v-model="showMenu">
      <v-card class="pa-10 d-flex-column justify-center">
        <h3>Shopping list app</h3>
        <v-btn class="ma-4" to="/"> Home </v-btn>
        <v-btn class="ma-4" to="/historylist"> History </v-btn>
        <v-btn class="ma-4" to="/stores"> Stores </v-btn>
        <v-btn class="ma-4" to="/products"> Products </v-btn>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar
      rounded
      style="position: sticky"
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-btn class="ma-4" @click="showMenu = !showMenu"> Menu </v-btn>
      </template>

      <v-app-bar-title>Shopping list app</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container class="main">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.main {
  background-image: url(https://cdn-icons-png.flaticon.com/256/6350/6350718.png);
  background-repeat: repeat;
  height: 85vh;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
