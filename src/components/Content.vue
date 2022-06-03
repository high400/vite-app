<template>
  <div class="content h-screen">
    <div class="flex justify-between">
      <div class="h-screen w-screen">01
        <div class="drop-zone"></div>
        <div class="drop-zone"></div>
        <div class="drop-zone"></div>
      </div>
      <div class="h-screen w-screen">02</div>
      <div class="h-screen w-screen">03
        <div class="edit-zone"></div>
        <div class="edit-zone"></div>
        <div class="edit-zone"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const content = [
      {
        id: 1,
        name: "heading",
        title: "Heading Element",
        settings: {
          content: "Enter your heading text",
          tag: "h3",
        },
        style: {
          color: "red",
          fontSize: "18px",
        },
      },
      {
        id: 2,
        name: "Featured",
        title: "Featured Element",
        settings: {
          content: "",
          tag: "",
        },
        style: {
          color: "blue",
          fontSize: "18px",
        },
      },
    ];

    return {
      content,
    };
  },
};
</script>

<style>
.content {
  background-color: red;
}
.drop-zone {
  width: 10px;
  height: 10px;
  background-color: black;
}
</style>
