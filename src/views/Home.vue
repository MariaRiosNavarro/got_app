<template>
    <div class="w-[100vw] h-screen flex justify-center items-center bg-[#19110F]">
      <!-- Utiliza la variable de importación para la ruta de la imagen -->
      <img :src="logo" :alt="altText" class="w-[100vw] object-cover h-screen">
    </div>
    <p class="text-red-500">text</p>
</template>
  
<script>
  // Importa la imagen
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
  
  