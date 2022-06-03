<template>
  <div class="content h-screen">
    <div class="flex justify-between">
      <div class="h-screen">01</div>
      <div class="h-screen">02</div>
      <div class="h-screen">03</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const content = [
      {
        id: "{random_string}",
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
</style>
