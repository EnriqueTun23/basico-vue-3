<template>
    <div class="card-container">
    <User
    v-for="user of users"
    :email="user.email"
    :name="user.name"
    :username="user.username"
    :id = "user.id"
    :key="user.id"
  ></User>
</div>
</template>

<script>
import User from '@/components/UserTarget.vue';

export default {
  components: {
    User,
  },
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    this.users = result;
  },
};
</script>

<style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 auto;
  }
</style>
