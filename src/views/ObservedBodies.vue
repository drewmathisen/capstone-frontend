<template>
  <div class="observedBodies" id="wrapper">
    <header id="header">
      <h1>{{ message }}</h1>

      <ul class="alt">
        <div v-for="ob in observedBodies">
          <p>
            <li>
              <h2>{{ ob.name }}</h2>
              <router-link class="button" v-bind:to="`/observedbodies/${ob.id}`">See all entries</router-link>
            </li>
          </p>
        </div>
      </ul>
    </header>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All Observed Bodies",
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
