<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">GOT Houses</h2>
    <ul>
      <li v-for="house in houses" :key="house.slug">
        <details>
          <summary @click="loadHouses(house.slug)">{{ house.name }}</summary>
          <ul v-if="house.members && house.members.length">
            <li v-for="member in house.members" :key="member.slug">
              <router-link :to="{ name: 'detailperson', params: { slug: member.slug } }">
                {{ member.name }}
              </router-link>
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
  name: 'Houses',
  data() {
    return {
      houses: [],
    };
  },
  created() {
    this.loadHouses();
  },
  methods: {
    async loadHouses() {
      try {
        const response = await axios.get(import.meta.env.VITE_VUE_API+'/v1/houses');
        this.houses = response.data;      
      } catch (error) {
        console.error('Error to load Houses:', error);
      }
    },
  },
};
</script>
