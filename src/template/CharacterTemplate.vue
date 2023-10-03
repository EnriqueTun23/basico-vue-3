<template>
    <main>
      <div v-if="character">
        <CharacterComponent
          :imageUrl="character.image"
          :name="character.name"
          :status="character.status"
          :specie="character.species"
          :location="character.location"
          :gender="character.gender"
          :id="character.id"
        />
      </div>
      <div v-else>
        <span>Cargando ...</span>
      </div>
      <div class="links">
        <router-link :to="{name: 'CharacterEdit'}">Ir a editar</router-link>
        <router-link :to="{name: 'CharacterDelete'}">Ir a borrar</router-link>
      </div>
      <!-- Se agrega esta ruta para que se pueda renderizar vistas anidadas -->
      <router-view></router-view>
    </main>
  </template>
<script>
import CharacterComponent from '@/components/CharacterComponent.vue';

export default {
  props: ['id'],
  components: {
    CharacterComponent,
  },
  data() {
    return {
      character: null,
    };
  },
  async created() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${this.id}`,
    );
    const result = await response.json();
    this.character = result;
  },
};
</script>
  <style scoped>
  main {
    display: flex;
    justify-content: center;
  }
  .links {
    width: 100%;
  }

  </style>
