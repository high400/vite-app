<template>
  <h3>{{ settings.content }}</h3>
</template>
<script>
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
