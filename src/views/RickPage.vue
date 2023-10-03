<template>
    <main>
        <Characters :page="this.page" />
    </main>
</template>

<script>
import Characters from '@/components/CharactersComponent.vue';

export default {
  props: ['page'],
  components: {
    Characters,
  },
};
</script>

<style scoped>
 main {
  background-color: #202329;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3rem 0;
  gap: 2rem;
  flex-wrap: wrap;
}
</style>
