import { createStore } from "vuex";
import { createApp } from 'vue'; 

const store = createStore({
  state () {
    return {
      count: 0,
      data:[
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
    }
	  ],
      toggle:1
    }
  },
  mutations: {
    increment (state,payload) {
      state.count++
    },
    setData(state,payload){
      state.data = payload
    },
    setToggle (state,payload) {
      state.toggle = payload
    }
  },
  actions: {
      fetchData({commit},payload) {
        console.log(payload);
      }
  }
});
export default store;
  