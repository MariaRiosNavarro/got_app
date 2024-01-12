<template>
    <div>
      <h2>{{ house?.name }}</h2>
      <h3>Members:</h3>
      <ul>
        <li v-for="member in house.members" :key="member.name">
          <router-link :to="{ name: 'detailperson', params: { slug: member.slug } }">
              {{ member.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HouseDetail',
    data() {
      return {
        house: {},
      };
    },
    created() {
      this.loadHouse();
    },
    methods: {
      async loadHouse() {
        try {

          const slug = this.$route.params.slug;

          const response = await axios.get(`${import.meta.env.VITE_VUE_API}/v1/house/${slug}`);
          console.log(response.data[0]);
          this.house = response.data[0];
        } catch (error) {
          console.error('Load Error:', error);
        }
      },
    },
  };
  </script>