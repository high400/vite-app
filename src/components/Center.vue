<template>
  <div
    class="middle h-screen"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent
  >
  </div>
</template>
<script>
const receiver = [];
export default {
  name: "Center",
  methods: {
    onDrop(evt, item) {
    // console.log(this.$store.state.store);
      const itemID = evt.dataTransfer.getData("itemID");
      console.log(itemID)
    //   const item = this.content.find((item) => item.id == itemID);
    //   item.content = item;
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
