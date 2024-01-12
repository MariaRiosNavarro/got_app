<template>
  <div class="w-[100vw] flex flex-col justify-center items-center">
    <h2 class="text-2xl font-bold mb-4">GOT Houses</h2>
      <div v-for="house in houses" :key="house.slug" className="collapse bg-base-200 my-[1rem] w-[50vw]">
        <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-primary-content after:content-['↓'] peer-checked:after:content-['↑']  ">
            <h4 class="font-bold italic " @click="loadHouses(house.slug)">{{ house.name }} </h4>
          </div>
        <div className="collapse-content bg-primary text-primary-content flex flex-col gap-[1rem] peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <ul v-if="house.members && house.members.length">
            <li v-for="member in house.members" :key="member.slug" class="badge badge-outline p-4 m-2 hover:badge-accent">
              <router-link class="hover:text-primary" :to="{ name: 'detailperson', params: { slug: member.slug } }">
                {{ member.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
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
