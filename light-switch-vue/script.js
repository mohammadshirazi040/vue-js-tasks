Vue.createApp({
  data() {
    return {
      text: "Hello Title",
      onClassName: "is-active",
      isToggled: false,
    };
  },
  methods: {
    active() {
      this.isToggled = !this.isToggled;

      if (this.isToggled) {
        document.title = this.text;
        document.body.classList.add(this.onClassName);
      } else {
        document.title = "Light Switch";
        document.body.classList.remove(this.onClassName);
      }
    },
  },
}).mount("#app");
