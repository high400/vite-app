<template>
  <div class="content h-screen p-2">
    <div class="flex gap-1 justify-between">
      <div class="h-screen w-1/4">
        <div class="grid grid-cols-3 gap-1 p-2 ">
          <div v-for="item in content" :key="item.id" class="bg-white h-[100px] flex items-center justify-center">
            <p class="p-2">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="h-screen w-2/4">
        <Center />
      </div>
      <div class="h-screen w-1/4">
        <div class="zone grid grid-cols-1 gap-1">
          <Right />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Center from "./Center.vue";
import Right from "./Right.vue";
import { computed, ref } from "vue";
export default {
  components: {
    Center,
  },
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

<style scoped>
.content {
  background-color: #c0c0c0;
}
.grid {
  background-color: #e5e7eb;
  
}
.zone {
  background-color: #2f4f4f;
  height: 95%;
}
p { 
  font-size: 16px;

}
</style>
