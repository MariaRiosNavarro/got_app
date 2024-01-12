<template>
  <div>
    <h2>{{ character?.name }}</h2>
    <div class="flex flex-col justify-center items-center">
      <img :src="character?.image" :alt="character?.name">
      <router-link :to="{ name: 'detailhouse', params: { slug: character?.house?.slug } }">
        <h3>{{ character?.house?.name }}</h3>
      </router-link>
    </div>
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
import charactersData from '/src/data/db.json'; 

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
        if (!slug) {
         console.error('Error: Missing required param "slug"');
         return;
        }

        const response = await axios.get(`${import.meta.env.VITE_VUE_API}/v1/character/${slug}`);
        const characterFromServer = response.data[0];

        const characterInDatabase = charactersData.find(
          (character) =>  character.fullName === characterFromServer.name
        );

        if (characterInDatabase) {
          characterFromServer.image = characterInDatabase.imageUrl;
        }else{
          characterFromServer.image = "/imgGot/logo.png"
        }

        this.character = characterFromServer;
      } catch (error) {
        console.error('Load Error:', error);
      }
    },
  },
};
</script>
