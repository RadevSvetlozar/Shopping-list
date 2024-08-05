<script setup>
import { ref, onMounted } from "vue";
import { useCollection } from "vuefire";
import { firestore } from "../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const show = ref(false);
const showAllProducts = ref(false);
const defaltDto = { name: "", isDone: false, quantity: "" };
const itemsRef = collection(firestore, "productsToBuy");
const items = useCollection(itemsRef);

const storesRef = collection(firestore, "stores");
const stores = await useCollection(storesRef);
const newItem = ref(defaltDto);
// const addItem = async () => {
//   console.log(itemsRef, newItem.value);
//   await addDoc(itemsRef, newItem.value);
//   newItem.value = defaltDto;
// };

const addProduct = async () => {
  await addDoc(itemsRef, newItem.value);
  newItem.value = defaltDto;
};

const completeProduct = async (item) => {
  console.log("1", item);
  item.isDone = true;
  await updateDoc(doc(firestore, "productsToBuy", item.id), item);
};

onMounted(() => {
  stores.value.forEach((doc) => {
    console.log(doc);
  });
});
</script>

<template>
  <div>
    <v-toolbar color="transparent">
      <v-btn class="ma-2" variant="outlined" color="orange" @click="addProduct">
        Add product
      </v-btn>
      <v-btn
        class="ma-2"
        variant="outlined"
        color="orange"
        @click="showAllProducts = !showAllProducts"
      >
        {{ showAllProducts ? "All produts" : "Uncompleted" }}
      </v-btn>
    </v-toolbar>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Add new product"
          v-model="newItem.name"
        ></v-text-field
      ></v-col>
      <v-col cols="12">
        <v-select
          item-title="name"
          label="Choose store"
          :items="stores"
          v-model="newItem.store"
        ></v-select
      ></v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="(item, index) in items.filter(
          (x) => !x.isDone || showAllProducts
        )"
        :key="index"
        cols="12"
      >
        <v-card v-if="item.store" class="mx-auto">
          <v-img
            height="100px"
            width="100vw"
            :src="item.store.imageUrl"
            cover
          ></v-img>

          <v-card-title>
            {{ item.name }}
          </v-card-title>

          <v-chip v-if="item.isDone" color="success">Completed</v-chip>
          <v-card-subtitle
            >Quantity: {{ item.quantity }}, Store: {{ item.store.name }}
          </v-card-subtitle>
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
              @click="addProduct"
            >
              Delete
            </v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
