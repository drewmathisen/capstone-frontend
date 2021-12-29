<template>
  <div class="observedBodies" id="wrapper">
    <header id="header">
      <h1>{{ message }}</h1>

      <form v-on:submit.prevent="submit()">
        <label>Search:</label>
        <input type="text" v-model="searchTerm" />
        <br />
      </form>

      <div class="row" v-for="ob in observedBodies">
        <li>
          <router-link v-bind:to="`/observedbodies/${ob.id}`">{{ ob.name }}</router-link>
        </li>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "All Observed Bodies",
      observedBodies: [],
      searchTerm: "",
      model: null,
      result: "",
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
        this.observedBodies = response.data;
      });
    },
    submit: function () {
      console.log(this.observedBodies);
      console.log(this.searchTerm);
      axios.get("/bodysearch/" + this.searchTerm).then((response) => {
        this.result = response.data;
        this.$router.push("/observedbodies/" + this.result.id);
      });
    },
  },
};
</script>
