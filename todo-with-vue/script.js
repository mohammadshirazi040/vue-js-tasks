// Vue Instanz

Vue.createApp({
  data() {
    return {
      todos: [
        { description: "Learn HTML", id: 1, done: true },
        { description: "Learn Vue", id: 2, done: false },
      ],
      newDescription: "",
      activeFilter: "all",
    };
  },
  computed: {
    filterTodos() {
      if (this.activeFilter === "all") {
        return this.todos;
      } else if (this.activeFilter === "done") {
        return this.todos.filter(function (todo) {
          return todo.done === true;
        });
      } else {
        return this.todos.filter(function (todo) {
          return todo.done === false;
        });
      }
    },
  },
  methods: {
    addTodo() {
      const newTodo = {
        description: this.newDescription,
        id: Math.random() * Date.now(),
        done: false,
      };
      this.todos.push(newTodo);

      this.newDescription = "";
    },
    getHtmlId(id) {
      return "todo-" + id;
    },
  },
}).mount("#app");
