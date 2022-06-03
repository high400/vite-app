<template>
  <div class="content h-screen">
    <div class="flex justify-between">
      <div class="h-screen w-screen">
        <div class="grid grid-cols-3 gap-2">
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
        </div>
      </div>
      <div class="h-screen w-screen">02</div>
      <div class="h-screen w-screen">03</div>
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
          content: {
            img: "",
            text: "",
            button: "Read More",
          },
          tag: {},
        },
        style: {
          color: "blue",
          fontSize: "18px",
        },
      },
      {
        id: 3,
        name: "testimonial",
        title: "Testimonial",
        settings: {},
        style: {},
      },
      {
        id: 4,
        name: "collections",
        title: "Collections",
        settings: {},
        style: {},
      },
      {
        id: 5,
        name: "products",
        title: "Products",
        settings: {},
        style: {},
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
  background-color: #1E90FF;
}
.grid {
  background-color: #0000FF;
  height: 25%;
}
</style>
