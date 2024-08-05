<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import PWABadge from "./components/PWABadge.vue";

import { ref } from "vue";
import { useCollection } from "vuefire";
import { firestore } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const itemsRef = collection(firestore, "productsToBuy");
const items = useCollection(itemsRef);
const newItem = ref({ name: "", quantity: 1 });
const addItem = async () => {
  console.log(itemsRef, newItem.value);
  await addDoc(itemsRef, newItem.value);
  newItem.value = { name: "", quantity: 1 };
};
</script>

<template>
  <v-app>
    <v-app-bar
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn to="/"> Home </v-btn>
      <v-btn to="/stores"> Stores </v-btn>

      <v-btn to="/products"> Products </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="main">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.main {
  background-image: url(https://cdn-icons-png.flaticon.com/256/6350/6350718.png);
  background-repeat: repeat;
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
