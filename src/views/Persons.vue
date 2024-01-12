<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">GOT Persons</h2>
    <ul>
      <li v-for="person in persons" :key="person.slug">
        <details>
          <summary @click="loadPersons(person.slug)">
            <router-link :to="{ name: 'detailperson', params: { slug: person.slug } }">
              <h2>{{ person.name }}</h2>
            </router-link>
          </summary>
          <div v-if="person.house">
            <router-link :to="{ name: 'detailhouse', params: { slug: person.house.slug } }">
              {{ person.house.name }}
            </router-link>
          </div>
          <ul v-if="person.quotes && person.quotes.length">
            <li v-for="(quote, index) in displayedQuotes(person.quotes)" :key="index">
              {{ quote }}
              <div v-if="person.quotes && person.quotes.length === 1" class="p-0 m-0">
                <p>This character has only one quote.</p>
              </div>
            </li>
          </ul>

          <button @click="changeQuotes(person)">Change Quote</button>
        </details>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Persons',
  data() {
    return {
      persons: [],
      maxQuotesToShow: 1,
    };
  },
  created() {
    this.loadPersons();
  },
  methods: {
    async loadPersons() {
      try {
        const response = await axios.get(import.meta.env.VITE_VUE_API + '/v1/characters');
        this.persons = response.data;
      } catch (error) {
        console.error('Error to load persons:', error);
      }
    },
    displayedQuotes(quotes) {
      return quotes.slice(0, this.maxQuotesToShow);
    },
    changeQuotes(person) {
      const newQuotes = this.getRandomQuotes(person.quotes, 1);
      person.quotes.splice(0, this.maxQuotesToShow, ...newQuotes);
    },
    getRandomQuotes(quotes, count) {
      const shuffledQuotes = quotes.sort(() => 0.5 - Math.random());
      return shuffledQuotes.slice(0, count);
    },
  },
};
</script>
