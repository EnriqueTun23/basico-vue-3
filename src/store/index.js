import { createStore } from 'vuex';

const store = createStore({
  // Version 1 de manejar los estados
  // state() {
  //   return {
  //     count: 0,
  //   };
  // },

  // Version 2 de manejo de los estados
  state: {
    count: 0,
    users: [{ name: 'Maria', age: 20 }, { name: 'Francisco', age: 15 }],
    otherUsers: [],
  },

  /**
   * Los getters se encarga previamente de manipular
   * es estado antes de pasarlo al componente
   */
  getters: {
    adultUsers(state) {
      return state.users.filter((user) => user.age >= 18);
    },
  },
  // mutaciones son las encargadas de mover los estados
  mutations: {
    increase(state, payload) {
      state.count += payload.ammount;
    },
    setUsers(state, payload) {
      state.otherUsers = payload;
    },
  },
  /**
   * Las acciones no son similares a las mutaciones
   * puesto en las acciones existe asyncronismo
   * igual las acciones son las encargadas de las mutaciones como tal
   */
  actions: {
    increase(context, payload) {
      context.commit('increase', payload);
    },
    async setUsers(context) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      context.commit('setUsers', result);
    },
  },
});

export default store;
