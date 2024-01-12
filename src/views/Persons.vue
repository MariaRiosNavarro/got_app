<!-- Persons.vue -->
<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">GOT Persons</h2>
      <ul>
        <li v-for="person in persons" :key="person.id" @click="showDetails(person.id)">
          {{ person.name }} ({{ person.house.name }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Persons',
    data() {
      return {
        persons: [],
      };
    },
    created() {
      // Lógica para obtener las personas de la API y almacenarlas en this.persons
      // (puedes usar axios o fetch)
    },
    methods: {
      showDetails(personId) {
        // Lógica para mostrar los detalles de una persona específica
        // Puedes utilizar router.push para navegar a la subpágina correspondiente
      },
    },
  };
  </script>