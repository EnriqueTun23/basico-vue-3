<template>
    <label for="write">Escribir:
        <input id="write" type="text" placeholder="Escribe algo" />
        <router-link :to="{name: 'Index'}">Inicio</router-link>
    </label>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  // acceso a todos los datos del componente cun
  // eslint-disable-next-line consistent-return
  beforeRouteLeave() {
    // if (this.text.length > 0) {
    // eslint-disable-next-line no-alert
    // const confirmLeave = window.confirm('¿Seguro que quieres irte?');
    // return confirmLeave;
    // }
    // return false;
    // eslint-disable-next-line no-alert
    const answer = window.confirm('Deseas salirte');
    if (!answer) return false;
  },
};
</script>
