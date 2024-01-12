<template>
    <div>
      <h2>{{ character?.name }}</h2>
      <router-link :to="{ name: 'detailhouse', params: { slug: character?.house?.slug } }">
        {{ character?.house?.name }}
      </router-link>
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
          const slug = this.$route.params.slug; 
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
  