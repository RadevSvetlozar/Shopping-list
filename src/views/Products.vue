<script setup>
import { ref, onMounted } from "vue";
import { useCollection } from "vuefire";
import { firestore } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import moment from "moment/moment";

const showToolBar = ref(false);
const showFilter = ref(false);
const selectedStore = ref(null);

const showAllProducts = ref(false);
const defaltDto = {
  name: "",
  isDone: false,
  quantity: "",
  store: "",
  createdAt: "",
  completedAt: "",
};
const itemsRef = collection(firestore, "productsToBuy");
const items = await useCollection(itemsRef);

const storesRef = collection(firestore, "stores");
const stores = await useCollection(storesRef);

const newItem = ref(defaltDto);
const filterCondition = ref({ showAll: false, name: "" });

const addProduct = async () => {
  newItem.value.store = doc(firestore, "stores/" + selectedStore.value);
  newItem.value.createdAt = moment().format("YYYY-MM-DD");

  const resp = await addDoc(itemsRef, newItem.value);

  newItem.value = defaltDto;
  selectedStore.value = "";
  showToolBar.value = false;
};

const deleteProduct = async (item) => {
  await deleteDoc(doc(firestore, "productsToBuy", item.id));
};

const completeProduct = async (item) => {
  item.isDone = true;
  item.value.completedAt = moment().format("YYYY-MM-DD");
  await updateDoc(doc(firestore, "productsToBuy", item.id), item);
};
const clearFilters = () => {
  filterCondition.value = { showAll: false, name: "" };
};
const openDirections = (item) => {
  console.log(item);
  window.open(
    `https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=${item.store.latitude},${item.store.longitude}`,
    "_blank"
  );
};
</script>

<template>
  <div>
    <h1 class="position-sticky ma-2">Products</h1>
    <v-navigation-drawer v-model="showFilter">
      <v-card>
        <v-card-title
          >Filters

          <v-btn
            class="ma-2"
            variant="outlined"
            color="orange"
            @click="clearFilters"
          >
            Clear
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-btn
            class="ma-2"
            variant="outlined"
            color="orange"
            @click="filterCondition.showAll = !filterCondition.showAll"
          >
            {{ filterCondition.showAll ? "Uncompleted" : "All produts" }}
          </v-btn>
          <h2>By store</h2>
          <v-select
            item-title="name"
            item-value="name"
            label="Choose store"
            :items="stores"
            v-model="filterCondition.name"
          ></v-select>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-card rounded elevation="24" class="position-sticky ma-2" color="silver">
      <v-toolbar>
        <v-btn
          class="ma-2"
          variant="outlined"
          color="orange"
          @click="showToolBar = !showToolBar"
        >
          Add
        </v-btn>
        <v-btn
          v-if="items.filter((x) => !x.isDone).length > 0"
          class="ma-2"
          variant="outlined"
          color="orange"
          @click="showFilter = !showFilter"
        >
          Filter
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-card v-if="showToolBar">
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
            item-value="id"
            label="Choose store"
            :items="stores"
            v-model="selectedStore"
          ></v-select
        ></v-col>
        <v-col cols="12">
          <v-text-field
            label="Quantity"
            v-model="newItem.quantity"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-btn class="ma-2" variant="outlined" color="orange" @click="addProduct">
        Add product
      </v-btn>
    </v-card>
    <v-card>
      <v-row dense>
        <v-col
          v-for="(item, index) in items.filter((x) =>
            filterCondition.showAll
              ? true
              : !x.isDone &&
                (filterCondition.name !== ''
                  ? filterCondition.name === x.store.name
                  : true)
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
                color="red"
                @click="deleteProduct(item)"
              >
                Delete
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
