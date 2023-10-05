<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <h1>Hi count is {{ count }}</h1>
  <input type="number" v-model="increaseCount" placeholder="cantidad a incrementar" />
  <button @click="incrementFunction">Incrementar</button>
  <ul>
    <li v-for="(adult, index) in adultUser" :key="index">
      {{ adult.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      // count: 10,
      increaseCount: 0,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    adultUser() {
      return this.$store.getters.adultUsers;
    },
  },
  methods: {
    incrementFunction() {
      this.$store.dispatch('increase', {
        ammount: this.increaseCount,
      });
    },
  },
};
</script>
