<template>
    <div>
        <p>Contador actual es: {{ count }} </p>
        <button @click="incrementCount()">Incrementar contador</button>
    </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count += 1;
    },
  },
};
</script>

<style scoped>
    button {
        background-color: red;
        color: white;
    }
</style>
