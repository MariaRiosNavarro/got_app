<template>
  <div class="w-[100vw] flex justify-center items-center">
    <div class="card w-[50vw] bg-base-100  border border-primary">
      <figure class="w-[100%]"><img class="w-[100%] object-cover h-[35vh]" src="../../public/imgGot/logo.png" alt="logo" /></figure>
      <div class="card-body">
        <h2 class="card-title text-center">
          Quotes
        </h2>
        <ul class="flex flex-col gap-[2rem]">
          <li v-for="quote in quotes" :key="quote.id" class="p-8 hover:bg-secondary hover:rounded-xl">
            <p class="italic py-[1rem]"> "{{ quote.sentence }}"</p>  
              <div class="card-actions justify-end">
                <router-link class="hover:text-primary" :to="{ name: 'detailperson', params: { slug: quote.character.slug} }">
                  <div class="badge badge-outline p-4">{{ quote.character.name }}</div> 
                </router-link>
                <router-link class="hover:text-primary" :to="{ name: 'detailhouse', params: { slug: quote.character.house.slug} }">
                  <div v-if="quote.character.house.name" class="badge badge-outline p-4">{{ quote.character.house.name }}</div> 
                </router-link>
              </div>
          </li>
          <button class="btn bg-[#609F9F] text-base-100 hover:bg-accent hover:text-primary" @click="loadRandomQuotes">New Random Quotes</button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import imgGotLogo from '../../public/imgGot/logo.png'; 

export default {
  name: 'Quotes',
  data() {
    return {
      quotes: [],
    };
  },
  created() {
    this.loadRandomQuotes();
  },
  methods: {
    async loadRandomQuotes() {
      try {
        const response = await axios.get(import.meta.env.VITE_VUE_API+'/v1/random/5');
        this.quotes = response.data;      
      } catch (error) {
        console.error('Error to load Quotes:', error);
      }
    },
  },
};
</script>
