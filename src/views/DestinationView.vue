<template>
  <div>
    <section v-if="destination" class="destination">
      <h2>This is Destination Page : {{ destination.name }}</h2>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "../components/GoBack.vue";
export default {
  components: { ExperienceCard, GoBack },
  // //either use props id or destinationId()
  props: { id: { type: Number, required: true } },
  computed: {
    // //getting data using data.json file

    // //$route is tightly coupled for more flexibility we can use props
    // destinationId() {
    //   return parseInt(this.$route.params.id);
    // },
    // //checking match id with json id
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },

  // //getting data using fetch api
  // data() {
  //   return {
  //     destination: null,
  //   };
  // },
  // methods: {
  //   async initData() {
  //     const response = await fetch(
  //       `https://travel-dummy-api.netlify.app/${this.$route.params.slug}`
  //     );
  //     this.destination = await response.json();
  //   },
  // },

  // async created() {
  //   this.initData();

  //   // for watching route changes of params
  //   // this.$watch(() => this.$route.params, this.initData);
  //   //commented for alternative dynamic route
  // },
};
</script>

<style>
</style>
