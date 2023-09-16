<template>
  <h1>Bienvenido a vue</h1>
  <Counter></Counter>
  <Users></Users>
</template>

<script>
import Counter from '@/components/CounterComponent.vue';
import Users from '@/components/UsersComponent.vue';

export default {
  components: {
    Counter,
    Users,
  },
};
</script>
