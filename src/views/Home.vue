<template>
    <div class="w-[100vw] h-screen flex justify-center items-center bg-[#19110F]">
      <img :src="logo" :alt="altText" class="w-[50vw] object-contain h-screen">
    </div>
</template>
  
<script>
  import logoImage from '/imgGot/logo.png';
  
  export default {
    name: 'Home',
    data() {
      return {
        logo: logoImage,
        altText: 'Logo Alt Text',
      };
    },
  };
</script>
  
<style scoped>
  
</style>
  
  