<!-- This starter template is using Vue 3 <script setup> SFCs
Check out https://vuejs.org/api/sfc-script-setup.html#script-setup -->
<script setup>
import Content from "./components/Content.vue";
</script>
<!-- This starter template is using Vue 3 <script setup> SFCs
Check out https://vuejs.org/api/sfc-script-setup.html#script-setup -->
<!-- This is where we write our templates -->
<template>
  <div class="head py-2 px-1">
    <div class="flex justify-between items-center">
      <div class="w-[100px]">
        <img class="max-w-full" src="./assets/taught_by_society.png" />
      </div>
      <div class="text-lg">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-1"
        >
          Import/Export JSON
        </button>
      </div>
    </div>
  </div>
  <Content />
</template>

<!-- This is where we write our templates -->
<!-- This is where you write the script for JSON standards -->
<script>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
const store = useStore();
const toggle = ref(1);
</script>

<!-- This is where you write the script for JSON standards -->
<!-- This is where you style your file -->
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 90vh;
  background-color: #c0c0c0;
}
.head {
  background-color: #ffffff;
}
</style>
<!-- This is where you style your file -->
