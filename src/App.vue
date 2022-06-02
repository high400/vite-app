<!-- This starter template is using Vue 3 <script setup> SFCs
Check out https://vuejs.org/api/sfc-script-setup.html#script-setup -->
<script setup>
import Content from "./components/Content.vue";
</script>
<!-- This starter template is using Vue 3 <script setup> SFCs
Check out https://vuejs.org/api/sfc-script-setup.html#script-setup -->
<!-- This is where we write our templates -->
<template>
  <div class="all">
    <div class="letter">
      <p>beae</p>
    </div>
    <div class="empty"></div>
    <div class="btn">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Import/Export JSON
      </button>
    </div>
  </div>
  <div class="second">
    <div class="item-zone">
      <ul class="divide-y divide-gray-200">
        <li v-for="person in people" :key="person.email" class="py-4 flex">
          <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
            <p class="text-sm text-gray-500">{{ person.email }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-zone"></div>
    <div class="edit-zone"></div>
  </div>
</template>
<!-- This is where we write our templates -->
<!-- This is where you write the script for JSON standards -->
<script>
const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default {
  setup() {
    return {
      people,
    };
  },
};
</script>
<!-- This is where you write the script for JSON standards -->
<!-- This is where you style your file -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
/* This is for the div named "all" */
.all {
  width: 100%;
  height: 100px;
  background-color: #2c3e50;
}
.letter {
  float: left;
}
.empty {
  width: 20%;
  text-align: center;
}
.btn {
  float: right;
  align-items: center;
}

/* This is for the div named "all" */
/* This is for the div named "second" */
.second {
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #a9a9a9;
}
.item-zone {
  float: left;
  width: 10%;
  height: 500px;
  background-color: #808000; 
}
.content-zone {
  width: 10%;
  height: 500px;
  float: center;
  background-color: #a9a9a9;
}
.edit-zone {
  float: right; 
  width: 10%; 
  height: 500px; 
  background-color: #ffb6c1;
}
/* This is for the div named "second" */
</style>
<!-- This is where you style your file -->
