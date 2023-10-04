import { createRouter, createWebHistory } from 'vue-router';
import UserPage from '@/views/UserPage.vue';
import UserDetailPage from '@/views/UserDetailPage.vue';
import RickPage from '@/views/RickPage.vue';
import CharacterTemplateVue from '@/template/CharacterTemplate.vue';
import CharacterEditView from '@/views/CharacterEditView.vue';
import CharacterDeleteViewVue from '@/views/CharacterDeleteView.vue';
import AboutView from '@/views/AboutView.vue';
import NotFound from '@/views/NotFound.vue';
import ConfirmationView from '@/views/ConfirmationView.vue';
import CompositionApiExampleView from '@/views/CompositionApiExampleView.vue';
import HomePage from '../views/HomePage.vue';
import RegisterView from '../views/RegisterView.vue';
import ContactPage from '../views/ContactPage.vue';

const auth = false;

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'Index',
  },
  {
    path: '/contact',
    component: ContactPage,
    name: 'Contact',
    beforeEnter: () => {
      if (!auth) {
        return {
          name: 'Home',
        };
      }
      return false;
    },
  },
  {
    path: '/users',
    component: UserPage,
    name: 'Users',
  },
  {
    path: '/users/:id',
    component: UserDetailPage,
    props: true,
    name: 'User',
  },
  {
    path: '/serie',
    component: RickPage,
    props: (route) => ({ page: route.query.page }),
    name: 'Rick',
  },
  {
    path: '/character',
    redirect: { name: 'Rick' },
  },
  {
    path: '/serie/character/:id',
    component: CharacterTemplateVue,
    name: 'Character',
    props: true,
    // Componentes hijos para esta vista
    children: [
      {
        path: 'edit',
        name: 'CharacterEdit',
        component: CharacterEditView,
      },
      {
        path: 'delete',
        name: 'CharacterDelete',
        component: CharacterDeleteViewVue,
      },
    ],
  },

  {
    path: '/character/:afterCharacter(.*)',
    redirect: (to) => ({ path: `/serie/character/${to.params.afterCharacter}` }),
  },
  // vista about
  {
    path: '/about-us',
    name: 'About',
    // Los alias por performace hay que conteplarlo
    // alias: '/about',
    component: AboutView,
  },
  {
    path: '/about',
    redirect: { name: 'About' },
  },
  // Register component
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  // Guardianes para rutas
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: ConfirmationView,
  },
  // Validacion not found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
  // path para la validacion de Composition API
  {
    path: '/composition-api',
    name: 'CompositionApi',
    component: CompositionApiExampleView,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

/**
 * Estos ejemplo que estan comentado sirve para la carga globar de cierta
 * informacion de estos no siempre se recominda tener esta informacion
 */

// router.beforeEach(() => {
//   console.log('progreso en la carga de rutas')
// });

// router.afterEach(() => {
//   console.log.og('Proceso despues la carga de rutas');
// });

export default router;
