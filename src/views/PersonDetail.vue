<template>
  <div class="w-[100vw] flex justify-center items-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img :src="character?.image" :alt="character?.name" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ character?.name }}'s Quotes</h2>
        <ul class="flex flex-col gap-[2rem] pb-[2rem]">
          <li v-for="quote in character.quotes" :key="quote" class="italic">
            "{{ quote }}"
          </li>
        </ul>
        <div class="card-actions">
          <router-link :to="{ name: 'detailhouse', params: { slug: character?.house?.slug } }">
            <button class="btn bg-[#609F9F] text-base-100 hover:bg-accent hover:text-primary"> 
              {{ character?.house?.name }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
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
