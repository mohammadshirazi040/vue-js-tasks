Vue.createApp({
  data() {
    return {
      names: [
        { name: "Max", id: 1 },
        { name: "Mustermann", id: 2 },
      ],
      newName: "",
      winner: "",
    };
  },
  computed: {
    isDrawn() {
      return this.winner.length > 0;
    },
  },
  methods: {
    addName() {
      const currentName = {
        name: this.newName,
        id: Math.floor(Math.random() * Date.now()),
      };
      this.names.push(currentName);

      this.newName = "";
    },

    drawName() {
      const length = this.names.length;
      const randomIndex = Math.floor(Math.random() * length);

      this.winner = this.names[randomIndex].name;
      console.log(this.winner);
    },

    reset() {
      this.names = [];
      this.winner = "";
    },
  },
}).mount("#app");
