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
    <div class="item-zone"></div>
    <div class="content-zone"></div>
    <div class="edit-zone"></div>
  </div>
</template>
<!-- This is where we write our templates -->
<!-- This is where you write the script for JSON standards -->
<script></script>
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
  
}
.btn {
  float: right;
  align-items: center;
}

/* This is for the div named "all" */
/* This is for the div named "second" */
.second {
  width: 100%;
  height: 500px; 
  background-color:#a9a9a9;
}
/* This is for the div named "second" */
</style>
<!-- This is where you style your file -->
