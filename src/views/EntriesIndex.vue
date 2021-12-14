<template>
  <div class="entriesIndex">
    <div v-for="entry in entries">
      <p><h1>{{ entry.title }}</h1></p>
      <p><h3>Observed Bodies: {{ oB }}</h3></p>
      <p>Start time: {{ entry.start_time }} | End time: {{entry.end_time }}</p>
      <p>Location: {{ entry.location }} | Date: {{entry.date}} </p>
      <p>{{ entry.notes }}</p>
      <router-link v-bind:to="`/entries/${entry.id}`" tag="button">Full Entry</router-link>
      <hr>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All Entries!",
      entries: [],
      searchTerm: "",
      oB: []
    };
  },
  created: function () {
    this.entriesIndex();
    this.observedBodies();
  },
  methods: {
    entriesIndex: function () {
      console.log("in index");
      axios.get("/entries").then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.entries = response.data;
      });
    },
      observedBodies: function () {
      console.log("in index");
      axios.get("/observed_bodies").then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.oB = response.data;
      });
    },
  },
};
</script>
