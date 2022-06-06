<template>
  <div
    class="middle h-screen"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  >
    <img class="pic" src="../assets/Quang_Trung.png" />
  </div>
</template>
<script>
const receiver = [];
</script>
<style>
.middle {
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
