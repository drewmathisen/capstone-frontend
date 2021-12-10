<template>
  <div class="entriesIndex">

      <p><h1>{{ entry.title }}</h1></p>
      <p>Start time: {{ entry.start_time }} | End time: {{entry.end_time }}</p>
      <p>{{ entry.location }} | {{entry.date }} </p>
      <p>Declination: {{ entry.declination }} | Right Ascention: {{entry.right_ascention }}</p>
      <p>Telecscope Type: {{ entry.telescope_type }} | Magnification: {{ entry.magnification }} |Filter: {{entry.filter }}</p>
      <p>{{ entry.notes }}</p>
      <!-- <p><router-link v-bind:to="`/entries/${entry.id}/edit`">Edit Entry</router-link></p> -->
      <button v-on:click="destroyEntry()">Delete Entry</button>



  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All Entries!",
      entry: [],
    };
  },
  created: function () {
    this.entriesIndex();
  },
  methods: {
    entriesIndex: function () {
      console.log("in show");
      axios.get("/entries/" + this.$route.params.id).then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.entry = response.data;
      });
    },
    destroyEntry: function() {
      console.log("in destroy");
    }
  },
};
</script>
