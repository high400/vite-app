<template>
  <h3>{{ settings.content }}</h3>
  <TabWrapper>
    <Tabs title="Tab 1">Tab 1</Tabs>
    <Tabs title="Tab 2">Tab 2</Tabs>
  </TabWrapper>
</template>
<script>
import TabWrapper from "./TabWrapper.vue";
import Tabs from "./Tabs.vue";
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
