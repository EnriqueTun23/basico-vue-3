<template>
  <router-link :to="{name: 'Character', params: {id: id} }">
  <div class="character-card">
    <img :src="imageUrl" :alt="imageUrl" />
    <div class="content">
      <p class="name">{{ name }}</p>
      <div class="specie-type">
        <span
          class="dot"
          :style="{ backgroundColor: status === 'Alive' ? 'rgb(85, 204, 68)' : 'red' }"
        >
        </span>
        <span class="specie">{{ `${status} - ${specie}` }}</span>
      </div>
      <p class="sub">Ultima ubicación conocida:</p>
      <p class="info">{{ location.name }}</p>
      <p class="sub">Género:</p>
      <p class="info">{{ gender }}</p>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  props: ['imageUrl', 'name', 'status', 'specie', 'location', 'gender', 'id'],
};
</script>

<style>
.character-card {
  background-color: #3c3e44;
  width: 80%;

  border-radius: 8px;
  overflow: hidden;
}

.character-card img {
  width: 100%;
  object-fit: cover;
  object-position: center center;
  height: 300px;
}

.character-card .content {
  color: white;
  padding: 1rem;
  padding-top: 0;
  text-align: left;
}

.character-card .content .name {
  font-weight: bold;
  font-size: 1.8rem;
}

.character-card .content .specie-type {
  font-weight: bold;
  margin-bottom: 1.7rem;
}

.character-card .content .dot {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
}

.character-card .content .sub {
  color: rgb(158, 158, 158);
  font-size: 1.2rem;
  margin-bottom: 1.1rem;
}

.character-card .content .info {
  margin-bottom: 1.1rem;
  font-size: 1.1rem;
}

@media (min-width: 650px) {
  .character-card {
    display: flex;
    height: 280px;
    width: 600px;
  }

  .character-card img {
    max-width: 260px;
  }
}
</style>
