<script setup>
import { ref } from "vue";
import { useCollection } from "vuefire";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
</script>

<template>
  <div>
    <v-row dense>
      <v-col v-for="(item, index) in items" :key="index" cols="12">
        <v-card class="mx-auto" max-width="344">
          <v-img height="50px" :src="item.imageUrl" cover></v-img>

          <v-card-title> {{ item.name }} </v-card-title>

          <v-card-subtitle> {{ item.address }} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" text="Explore"></v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ item.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
