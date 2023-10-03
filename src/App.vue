<template>
  <Nav></Nav>
  <h1>Bienvenido a vue</h1>
  <!-- <Counter></Counter> -->
  <router-view></router-view>
</template>

<script>
// import Counter from '@/components/CounterComponent.vue';
import Nav from '@/components/NavComponent.vue';

export default {
  components: {
    // Counter,
    Nav,
  },
};
</script>
<style>
  a {
    text-decoration: none;
  }
</style>
