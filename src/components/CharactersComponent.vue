<template>
  <div class="pages">
      <button @click="previousPage()">Ir anterior</button>
      <button @click="nextPage()">Ir Siguiente</button>
    </div>
    <div v-if="characters">
      <Character
        v-for="(character, index) of characters"
        :imageUrl="character.image"
        :name="character.name"
        :status="character.status"
        :specie="character.species"
        :location="character.location"
        :gender="character.gender"
        :id="character.id"
        :key="index"
      ></Character>
    </div>
    <div v-else>
        <span>Cargando ...</span>
    </div>

</template>

<script>
import Character from '@/components/CharacterComponent.vue';
import { watchEffect } from 'vue';

export default {
  components: {
    Character,
  },
  props: ['page'],
  data() {
    return {
      characters: null,
      currentPage: null,
      pageTotal: null,
    };
  },
  created() {
    this.currentPage = this.page || 1;
    watchEffect(async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.currentPage}`);
      const { results, info } = await response.json();
      this.characters = results;
      this.pageTotal = info.pages;
    });
  },

  methods: {
    nextPage() {
      if (this.currentPage === this.pageTotal) return;
      this.currentPage += 1;
    },
    previousPage() {
      if (this.currentPage === 1) return;
      this.currentPage -= 1;
    },
  },
};
</script>

<style scoped>
  .pages {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pages button {
    border: none;
    margin-right: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
