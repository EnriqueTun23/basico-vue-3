<template>
  <div class="container">
    <form @submit.prevent="sendForm()">
      <div>
        <label for="name"
          >Nombre
          <input id="name" placeholder="Nombre" />
        </label>
      </div>
      <div>
        <label for="password"
          >Contraseña
          <input id="password" type="password" placeholder="Contraseña" />
        </label>
      </div>
      <input type="submit" value="enviar" />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    sendForm() {
      // raplece sin meter una nueva entrada en el historia (replace)
      this.$router.push({ name: 'Rick' });
    //   this.$router.push({ name: 'Character', params: { id: 1 } });
    },
  },
};
</script>

<style scoped>
 .container  {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 input {
    display: block;
    margin-top: 1.5rem;
 }
</style>
