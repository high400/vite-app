<template>
  <div class="container">
    <div class="flex justify-between ...">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  </div>
</template>

<script>
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
      "font-size": "18px",
    },
  },
];

export default {
  setup() {
    return {
      content,
    };
  },
};
</script>

<style>
.container {
  background-color: #d2691e;

}
</style>
