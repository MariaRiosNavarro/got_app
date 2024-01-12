<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">GOT Quotes</h2>
    <ul>
      <li v-for="quote in quotes" :key="quote.id">
        {{ quote.sentence }}
      </li>
    </ul>
    <button @click="loadRandomQuotes" class="mt-4">New Random Quotes</button>
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
        const response = await axios.get('/api/v1/random/5');
        this.quotes = response.data;      
      } catch (error) {
        console.error('Error to load Quotes:', error);
      }
    },
  },
};
</script>
