<template>
  <h3>{{ settings.content }}</h3>
  <div class="flex justify-around">
    <div title="Content" class="border-1 border-solid border-black">Content</div>
    <div title="Design" class="border-1 border-solid border-black">Design</div>
    <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
</svg></div>
  </div>
</template>
<script>
// import TabWrapper from "./TabWrapper.vue";
// import Tabs from "./Tabs.vue";
export default {
  computed: {
    settings() {
      return [
        {
          name: "content",
          type: "textarea",
          value: "Enter your heading text",
        },
        {
          name: "tag",
          type: "select",
          value: "h3",
          options: {
            h1: "H1",
            h2: "H2",
            h3: "H3",
            h4: "H4",
          },
        },
      ];
    },
  },
};
</script>
