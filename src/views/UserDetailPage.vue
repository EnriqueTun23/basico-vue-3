<template>
  <div>
      <h1>Estas en la lista del uusario: {{ userId }}</h1>
      <User v-if="user" :name="user.name" :email="user.email" :username="user.username"></User>
      <div v-else><span>Cargando...</span></div>
  </div>
</template>
<script>
import User from '@/components/UserTarget.vue';

export default {
  components: {
    User,
  },
  props: ['id'],
  data() {
    return {
      user: null,
      userId: this.id,
    };
  },
  async created() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${this.userId}`,
    );
    const result = await response.json();

    //     // console.log(result);
    this.user = result;
  },
};
</script>
