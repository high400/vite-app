import { createStore } from "vuex";
const store =
  createStore[
    ({
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
    })
  ];
export default createStore({
  name: "Content",
  props: {
    id: 1,
  },
  state: {
    //   change the state here

  },
  mutations: {
    //   The mutation is here
  },
  action: {
    //   take the action
  },
  modules: {},
  getters: {},
});
