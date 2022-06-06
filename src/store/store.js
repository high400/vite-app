import { createStore } from "vuex";
import { createApp } from "vue";

const store = createStore({
  state() {
    return {
      count: 1,
      data: [
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
      ],
      content: [],
      toggle: 1,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setData(state, payload) {},
    setToggle(state, payload) {},
  },
  actions: {},
  getters: {},
});
export default store;
