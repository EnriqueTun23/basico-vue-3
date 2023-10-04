<template>
  <h2>Create a new partipant</h2>
  <p>Total capaciti: {{ event.capacity }}</p>
  <form @submit.prevent="addNewParticipant()">
    <label for="Name"
      >Name
      <input v-model="event.form.name" id="Name" @blur="validateField('name')" />
    </label>
    <p class="err-msg" v-if="event.errors.name">{{ event.errors.name }}</p>
    <label for="Edad"
      >Edad:
      <input v-model="event.form.edad" id="Edad" type="number" @blur="validateField('edad')" />
      <p class="err-msg" v-if="event.errors.edad">{{ event.errors.edad }}</p>
    </label>
    <br />
    <input type="submit" value="Enviar" />
  </form>
  <div>
    <h2>Creators</h2>
    <ul>
      <li v-for="c in event.creators" :key="c.id">{{ c.name }}</li>
    </ul>
  </div>
  <div>
    <h2>Participantes</h2>
    <button @click="removeNonAdults()">Removo adults</button>
    <ul>
      <li v-for="(p, index) in event.partipants" :key="index">
        Nombre: {{ p.name }}, Edad: {{ p.edad }}
      </li>
    </ul>
  </div>
</template>
<script>
import { computed, reactive } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';
import { validationSchema } from '@/schema/validationForm';

export default {
  props: ['text'],
  setup() {
    const event = reactive({
      capacity: 10,
      form: {
        name: '',
        edad: 0,
      },
      partipants: [],
      creators: [],
      spaceLeft: computed(() => event.capacity - event.partipants.length),
      errors: {},
    });
    // const capacity = ref(10);
    // const name = ref('');
    // const edad = ref(0);
    // const partipants = ref([]);
    // const creators = ref([]);
    /**
     *
     * @param {type} field
     * Funcion que se encarga de validar los campos cuando se le hace un onblur
     */
    const validateField = async (field) => {
      try {
        await Yup.reach(validationSchema, field).validate(event.form[field]);
        event.errors[field] = '';
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          event.errors[field] = error.message;
        }
      }
    };
    // eslint-disable-next-line consistent-return
    const addNewParticipant = async () => {
      try {
        // manda a llamar el elemento de validacion en este caso yup
        await validationSchema.validate(event.form);
        // resetea la validacion correspondiente
        event.errors = {};
        if (event.spaceLeft === 0) {
          return alert('No espace left');
        }
        event.partipants.push({ name: event.form.name, edad: event.form.edad });
      } catch (error) {
        // Se cacha los errore que puede haber para despues pintarlo en los labels
        if (error instanceof Yup.ValidationError) {
          event.errors[error.path] = error.message;
        }
      }
    };

    // llamada a una api externa
    async function getCreator() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      event.creators = result;
    }

    getCreator();

    const removeNonAdults = () => {
      event.partipants = event.partipants.filter((p) => p.edad >= 18);
    };

    return {
      addNewParticipant,
      validateField,
      removeNonAdults,
      event,
      /**
       *  usar toRefs para no perder la reactividad
       *  demo:
       *  ...toRefs(event)
       * */

    };
  },
};
</script>
<style scoped>
 .err-msg {
  color: red;
 }
</style>
