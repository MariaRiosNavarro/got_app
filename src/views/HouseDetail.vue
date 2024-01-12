<template>
  <div class="w-[100vw] flex justify-center items-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="w-[100%]">
        <img :src="`../../public/imgGot/${house.image}`" :alt="house.name" class="rounded-xl w-[100%]" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ house?.name }}</h2>
        <ul class="flex flex-col gap-[2rem] pb-[2rem]">
          <h3>Members:</h3>
          <li v-for="member in house.members" :key="member.name">
            <router-link :to="{ name: 'detailperson', params: { slug: member.slug } }">
              <span class="badge badge-primary">{{ member.name }}</span>
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
      return matchingImage || imgGotLogo; 
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