<script setup>
import { ref } from "vue";
import { useCollection } from "vuefire";
import { firestore } from "../firebase";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import moment from "moment/moment";
const show = ref(false);
const showToolBar = ref(false);
const itemsRef = collection(firestore, "stores");
const items = await useCollection(itemsRef);

const newItem = ref({
  name: "",
  address: "",
  description: "",
  latitude: "",
  longitude: "",
  imageUrl: "",
});

const addStore = async () => {
  newItem.value.createdAt = moment().format("YYYY-MM-DD");

  await addDoc(itemsRef, newItem.value);

  showToolBar.value = false;
};

const deleteStore = async (item) => {
  await deleteDoc(doc(firestore, "stores", item.id));
};
</script>

<template>
  <div>
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
      </v-toolbar>
    </v-card>
    <v-card v-if="showToolBar">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-for="(value, key, index) in newItem"
            :key="index"
            :label="key"
            v-model="newItem[key]"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-btn class="ma-2" variant="outlined" color="orange" @click="addStore">
        Add store
      </v-btn>
    </v-card>
    <v-row dense>
      <v-col v-for="(item, index) in items" :key="index" cols="12">
        <v-card class="mx-auto" >
          <v-img height="100px" :src="item.imageUrl" cover></v-img>

          <v-card-title> {{ item.name }} </v-card-title>

          <v-card-subtitle> {{ item.address }} </v-card-subtitle>

          <v-card-actions>
            <v-btn variant="outlined" @click="item.show = !item.show"
              >Details</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn color="red" variant="outlined" @click="deleteStore(item)"
              >Delete</v-btn
            >
          </v-card-actions>

          <v-expand-transition>
            <div v-show="item.show">
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
