<script setup>
import { ref } from "vue";
import { useCollection } from "vuefire";
import { firestore } from "../firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

const itemsRef = collection(firestore, "productsToBuy");
const items = useCollection(itemsRef);

const storesRef = collection(firestore, "stores");
const stores = await useCollection(storesRef);

const deleteProduct = async (item) => {
  await deleteDoc(doc(firestore, "productsToBuy", item.id));
};
</script>

<template>
  <div>
    <h1>History list</h1>
    <v-row dense>
      <v-col
        v-for="(item, index) in items.sort(
          (a, b) => new Date(a.createdAt) - new Date(a.createdAt) < 0
        )"
        :key="index"
        cols="12"
      >
        <v-card v-if="item.store" class="mx-auto">
          <v-row class="ma-2">
            <v-col cols="6"
              ><h2>{{ item.name }}</h2>
              <h3>Quantity: {{ item.quantity }}</h3>

              <v-chip v-if="item.isDone" color="success">Completed</v-chip>
              <h5>Created at: {{ item.createdAt }}</h5>
              <h5>Completed at: {{ item.completedAt }}</h5>
            </v-col>
            <v-col cols="6">
              <h5>{{ item.store.name }}</h5>
              <v-img
                height="100px"
                width="100px"
                :src="item.store.imageUrl"
                cover
              ></v-img>
              <v-btn
                class="mr-2 mt-1"
                variant="outlined"
                color="orange"
                @click="openDirections(item)"
              >
                Directions
              </v-btn>
            </v-col>
          </v-row>

          <v-card-action>
            <v-btn
              v-if="!item.isDone"
              class="ma-2"
              variant="outlined"
              color="orange"
              @click="completeProduct(item)"
            >
              Done
            </v-btn>
            <v-btn
              class="ma-2"
              variant="outlined"
              color="orange"
              @click="deleteProduct(item)"
            >
              Delete
            </v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
