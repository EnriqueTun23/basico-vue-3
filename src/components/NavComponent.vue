<template>
    <nav>
        <ul>
            <li><router-link :to="{name: 'Index'}">Inicio</router-link></li>
            <li> <router-link to="/contact">Contacto</router-link></li>
            <li><router-link to="/users">Usuarios</router-link></li>
            <li><router-link :to="{ name: 'Rick' }">Rick Page</router-link></li>
            <li><router-link :to="{ name: 'Confirmation'}">Confirmacion</router-link></li>
            <li><router-link :to="{ name: 'CompositionApi' }">Composition api</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background-color: #f5f5f5;
}
nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    padding: 1rem  1rem;
}
</style>
