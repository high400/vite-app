<template>
  <div class="content h-screen">
    <div class="flex justify-between">
      <div class="h-screen w-1/4">
        <div class="grid grid-cols-3 gap-1">
          <div v-for="item in content" :key="item.id" class="bg-white">
          {{item.title}}
          </div>
        </div>
      </div>
      <div class="h-screen w-2/4">02</div>
      <div class="h-screen w-1/4">
        <div class="zone grid grid-cols-3 gap-2">03</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const content = ref([
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
          fontSize: "14px",
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
          fontSize: "14px",
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
    ]);
    const getContent = computed({
      getContent: () => {
        this.content.value;
      },
    });


    return {
      content,
    };
  },
};
</script>

<style>
.content {
  background-color: #1e90ff;
}
.grid {
  background-color: #0000ff;
  height: 25%;
}
.zone {
  background-color: #2f4f4f;
  height: 25%;
}
</style>
