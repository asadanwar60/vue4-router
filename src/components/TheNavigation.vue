<template>
  <nav id="nav">

    <!-- for dynamic routes of pages -->

    <router-link id="logo" to="/">Vue Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
  </nav>
</template>

<script>
import sourceData from '@/data.json'
export default {
  data(){
    return{
      destinations: sourceData.destinations,
    }
  }
};
</script>


