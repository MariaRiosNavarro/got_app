<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <h1 class="btn btn-ghost text-xl"><router-link to="/">GOT-Quotes</router-link></h1>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 ">
        <li class="bg-secondary rounded-xl ml-[1rem]"><router-link to="/houses">Houses</router-link></li>
        <li class="bg-secondary rounded-xl ml-[1rem]"><router-link to="/persons">Persons</router-link></li>
        <li class="bg-secondary rounded-xl ml-[1rem]"><router-link to="/quotes">Quotes</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>