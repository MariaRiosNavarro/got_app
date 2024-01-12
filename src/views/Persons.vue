<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">GOT Persons</h2>
    <ul>
      <li v-for="person in persons" :key="person.slug">
        <details>
          <summary @click="loadPersons(person.slug)">{{ person.name }}</summary>
          <div v-if="person.house">
            <router-link :to="{ name: 'detailhouse', params: { slug: person.house.slug } }">
                {{ person.house.name }}
            </router-link>
          </div>
          <ul v-if="person.quotes && person.quotes.length">
            <li v-for="quote in person.quotes" :key="quote">
              {{ quote }}
            </li>
          </ul>
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
    };
  },
  created() {
    this.loadPersons();
  },
  methods: {
    async loadPersons() {
      try {
        const response = await axios.get(import.meta.env.VITE_VUE_API+'/v1/characters');
        this.persons = response.data;       
      } catch (error) {
        console.error('Error to load persons:', error);
      }
    },
  },
};
</script>
