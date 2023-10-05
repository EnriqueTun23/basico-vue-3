<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
    <h1>Hi, count is {{ count }}</h1>
    <input v-model="ammount" type="number" placeholder="Introduce la cantidad" />
    <button @click="increaseCount()" >+</button>
    <div>
        <ul>
            <li v-for="(adult,index) in adultUsers" :key="index">{{ adult.name }}</li>
        </ul>
    </div>
    <div>
        <ol>
            <li v-for="(ot, index) in otherUsers" :key="index">{{ ot.name }}</li>
        </ol>
    </div>
</template>
<script setup>
import {
  ref,
  computed,
} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const ammount = ref(0);
// const count = ref(10);
const count = computed(() => store.state.count);
const otherUsers = computed(() => store.state.otherUsers);
const adultUsers = computed(() => store.getters.adultUsers);

store.dispatch('setUsers');
const increaseCount = () => {
  store.dispatch('increase', {
    ammount: ammount.value,
  });
};

</script>
