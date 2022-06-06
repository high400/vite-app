<template>
  <h3>{{ settings.content }}</h3>

  <div class="wrapper">
    <button class="change__style" @click="changeStyle()">Change Style</button>
    <tabs :mode="mode">
      <tab title="Tab 1">Hello From Tab 1</tab>
      <tab title="Tab 2">Hello From Tab 2</tab>
    </tabs>
  </div>
</template>
<script>
import Tab from "./Tab.vue";
import Tabs from "./Tabs.vue";

export default {
  components: {
    Tab,
    Tabs,
  },
  data() {
    return {
      mode: "dark",
    };
  },
  methods: {
    changeStyle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
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
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Karla", sans-serif;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}

.change__style {
  background-color: #eee;
  font-size: 1em;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
