<template>
  <div class="w-[100vw] flex justify-center items-center px-4">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="w-[100%]">
        <img :src="getImageUrl(house.image)" :alt="house.name" class="rounded-xl w-[100%]" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ house?.name }}</h2>
        <ul class="flex flex-col gap-[2rem] pb-[2rem]">
          <h3>Members:</h3>
          <li v-for="member in house.members" :key="member.name">
            <router-link :to="{ name: 'detailperson', params: { slug: member.slug } }">
              <span class="badge badge-primary p-4">{{ member.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  

<script>
import axios from 'axios';
import { shieldImages } from '../data/shieldImages.js';




export default {
  name: 'HouseDetail',
  data() {
    return {
      house: {},
      imageName: '', 

    };
  },
  methods: {

    getImageUrl(name) { 
      return new URL(`../assets/imgGot/${name}`, import.meta.url).href
    },

    getHouseImageName(houseSlug) {
      const matchingImage = shieldImages.find((imageNamePng) =>{
        const imgArray = imageNamePng.split(".");
        const imgName = imgArray[0];
        return imgName.includes(houseSlug.toLowerCase())});
      return matchingImage 
    },

    async loadHouse() {
      try {
        const slug = this.$route.params.slug;
        const response = await axios.get(`${import.meta.env.VITE_VUE_API}/v1/house/${slug}`);
        const houseData = response.data[0];
        this.imageName = this.getHouseImageName(houseData.slug);
        this.house = {
          ...houseData,
          image: this.imageName,
        };
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