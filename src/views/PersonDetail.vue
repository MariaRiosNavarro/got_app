<template>
    <div>
      <h2>{{ character?.name }}</h2>
      <p>Slug: {{ character?.slug }}</p>
      <p>House: {{ character?.house?.name }}</p>
      <h3>Quotes:</h3>
      <ul>
        <li v-for="quote in character.quotes" :key="quote">
          {{ quote }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PersonDetail',
    data() {
      return {
        character: {},
      };
    },
    created() {
      this.loadCharacter();
    },
    methods: {
      async loadCharacter() {
        try {
          // Obtener el slug del parámetro de la ruta
          const slug = this.$route.params.slug;
  
          // Hacer la solicitud para obtener los detalles del personaje
          const response = await axios.get(`${import.meta.env.VITE_VUE_API}/v1/character/${slug}`);
          console.log(response.data[0]);
          
          this.character = response.data[0];
        } catch (error) {
          console.error('Load Error:', error);
        }
      },
    },
  };
  </script>
  