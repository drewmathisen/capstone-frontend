<template>
  <div class="observedBodies">
    <section id="intro" class="main">
      <div class="spotlight">
    <p><h1> {{ message }}</h1></p>
        <div v-for="ob in observedBodies">
          <p><h2>{{ ob.name }}</h2></p>
          <router-link class="button" v-bind:to="`/observedbodies/${ob.id}`">See all entries</router-link>
          <!-- <router-link v-bind:to="`/entries/${entry.id}`" tag="button">Full Entry</router-link> -->
          <hr>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All Observed Bodies!",
      observedBodies: [],
      searchTerm: "",
    };
  },
  created: function () {
    this.observedBodiesIndex();
  },
  methods: {
    observedBodiesIndex: function () {
      console.log("in index");
      axios.get("/observed_bodies").then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.observedBodies = response.data;
      });
    },
  },
};
</script>
