<template>
  <div class="w-[100vw] flex justify-center items-center px-4">
    <div class="card md:w-[50vw] mx-2 bg-base-100  border border-primary">
      <figure class="w-[100%] bg-[#19110F]"><img class="w-[100%] object-contain md:object-cover h-[35vh]" src="/imgGot/logo.png" alt="logo" /></figure>
      <div class="card-body">
        <h2 class="card-title text-center">
          Quotes
        </h2>
        <ul class="flex flex-col gap-[2rem]">
          <li v-for="quote in quotes" :key="quote.id" class="p-8 hover:bg-secondary hover:rounded-xl">
            <p class="italic py-[1rem]"> "{{ quote.sentence }}"</p>  
              <div class="card-actions justify-end">
                <div class="badge badge-outline p-4">
                  <router-link class="hover:text-primary" :to="{ name: 'detailperson', params: { slug: quote.character.slug} }">
                     {{ quote.character.name }}
                  </router-link>
                </div> 
                <div v-if="quote.character.house.name" class="badge badge-outline p-4">
                    <router-link class="hover:text-primary" :to="{ name: 'detailhouse', params: { slug: quote.character.house.slug} }">
                     {{ quote.character.house.name }}
                    </router-link>
                </div>
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
