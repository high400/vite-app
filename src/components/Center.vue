<template>
  <div
    class="middle h-screen"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  ></div>
</template>
<script>
const receiver = [];
export default {
  name: "Center",
  methods: {
    onDrop(evt, content) {
      console.log(content);
    //   const itemID = evt.dataTransfer.getData("itemID");
    //   const item = this.content.find((item) => item.id == itemID);
    //   item.content = content;
    },
  },
};
</script>
<style>
.middle {
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
