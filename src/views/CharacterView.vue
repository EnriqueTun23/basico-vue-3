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
    if (response.status === 404) {
      this.$router.push({ name: 'NotFound' });
    }
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
</style>
