Vue.createApp({
  data() {
    return {
      text: "Hello Title",
      onClassName: "is-active",
    };
  },
  methods: {
    active() {
      document.title = this.text;
      document.body.classList.add(this.onClassName);
    },
  },
}).mount("#app");
