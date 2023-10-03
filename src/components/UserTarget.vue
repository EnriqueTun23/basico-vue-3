<template>
    <div class="user_card">
        <p>Nombre del usuario: {{ name }}</p>
        <p>Username {{ username }}</p>
        <p>Email {{ email }}</p>
        <p><b><router-link :to="{name: 'User', params: {id}}">Detalle</router-link></b></p>
        <!-- <p><b><router-link :to="/users/ + id">Detalle</router-link></b></p> -->
    </div>
</template>

<script>
export default {
  props: ['name', 'username', 'email', 'id'],
};
</script>

<style scoped>
    .user_card {
        background-color: #f5f5f5;
        width: 200px;
        border-radius: 7px;
        padding: 1.5rem;
        margin-top: 1rem;
    }
</style>
