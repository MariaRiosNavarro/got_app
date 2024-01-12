
<template>
  <div class="w-[100vw] flex flex-col justify-center items-center">
    <h2 class="text-2xl font-bold mb-4">GOT Persons</h2>
      <div v-for="person in persons" :key="person.slug" className="collapse bg-base-200 my-[1rem] w-[50vw]">
        <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-primary-content ">
            <router-link :to="{ name: 'detailperson', params: { slug: person.slug } }">
              <h4 class="font-bold italic" @click="loadPersons(person.slug)">{{ person.name }}</h4>
            </router-link>
          </div>
        <div className="collapse-content bg-primary text-primary-content flex flex-col gap-[1rem] peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <div v-if="person.house">
            <router-link :to="{ name: 'detailhouse', params: { slug: person.house.slug } }">
              <span class="hover:text-primary">{{ person.house.name }}</span> 
            </router-link>
          </div>
          <ul v-if="person.quotes && person.quotes.length">
            <li v-for="(quote, index) in displayedQuotes(person.quotes)" :key="index">
              Quote: <span class="italic"> "{{ quote }}" </span> 
              <div v-if="person.quotes && person.quotes.length === 1" class="p-0 m-0">
                <p>This character has only one quote.</p>
              </div>
            </li>
          </ul>
          <button class="btn bg-[#609F9F] text-base-100 hover:bg-accent hover:text-primary" @click="changeQuotes(person)">Change Quote</button>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Persons',
  data() {
    return {
      persons: [],
      maxQuotesToShow: 1,
    };
  },
  created() {
    this.loadPersons();
  },
  methods: {
    async loadPersons() {
      try {
        const response = await axios.get(import.meta.env.VITE_VUE_API + '/v1/characters');
        this.persons = response.data;
      } catch (error) {
        console.error('Error to load persons:', error);
      }
    },
    displayedQuotes(quotes) {
      return quotes.slice(0, this.maxQuotesToShow);
    },
    changeQuotes(person) {
      const newQuotes = this.getRandomQuotes(person.quotes, 1);
      person.quotes.splice(0, this.maxQuotesToShow, ...newQuotes);
    },
    getRandomQuotes(quotes, count) {
      const shuffledQuotes = quotes.sort(() => 0.5 - Math.random());
      return shuffledQuotes.slice(0, count);
    },
  },
};
</script>
