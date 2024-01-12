<template>
  <div>
    <h2>{{ house?.name }}</h2>
    <img :src="`../../public/imgGot/${house.image}`" :alt="house.name">
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
import { shieldImages } from '../data/shieldImages.js';
import imgGotLogo from '../../public/imgGot/logo.png'; 

export default {
  name: 'HouseDetail',
  data() {
    return {
      house: {},
      imageName: '', 
      imgGotLogo,
    };
  },
  methods: {
    getHouseImageName(houseSlug) {
      const matchingImage = shieldImages.find((imageNamePng) =>{
        const imgArray = imageNamePng.split(".");
        const imgName = imgArray[0];
        return imgName.includes(houseSlug.toLowerCase())});
        console.log("match-------------------", matchingImage);
      return matchingImage || imgGotLogo; 
    },
    async loadHouse() {
      try {
        const slug = this.$route.params.slug;
        const response = await axios.get(`${import.meta.env.VITE_VUE_API}/v1/house/${slug}`);
        const houseData = response.data[0];

        // Obtén el nombre de la imagen
        this.imageName = this.getHouseImageName(houseData.slug);
        console.log("thisimage-------------------", this.imageName );
        // Actualiza los datos de la casa con la nueva propiedad
        this.house = {
          ...houseData,
          image: this.imageName,
        };
        console.log("House with image:", this.house);
      } catch (error) {
        console.error('Load Error:', error);
      }
    },
  },
  created() {
    this.loadHouse();
  },
};
</script>