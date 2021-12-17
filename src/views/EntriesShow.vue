<template>
  <div class="main">
    <!-- <div id="main"> -->
    <header id="header">
      <section id="content" class="main">
        <h1>{{ entry.title }}</h1>
        <div v-for="ob in observed_bodies">
          <h3>{{ ob.name }}</h3>
        </div>
        <p>Start time: {{ entry.start_time }} | End time: {{ entry.end_time }}</p>
        <p>Entry Location: {{ entry.location }} | Entry Date: {{ entry.date }}</p>
        <p>Declination: {{ entry.declination }} | Right Ascention: {{ entry.right_ascention }}</p>
        <p>
          Telecscope Type: {{ entry.telescope_type }} | Magnification: {{ entry.magnification }} |Filter:
          {{ entry.filter }}
        </p>
        <p>{{ entry.notes }}</p>
        <div class="row gtr-uniform">
          <div v-for="image in entry.images">
            <div class="thumb1">
              <div class="col-12">
                <router-link v-bind:to="`/images/${image.id}`">
                  <span class="image fit"><img v-bind:src="image.image_url" alt="image.description" /></span>
                </router-link>
              </div>
              <p>{{ image.name }}</p>
            </div>
          </div>
        </div>
        <hr />
        <router-link v-bind:to="`/entries/${entry.id}/edit`" tag="button">Edit Entry</router-link>
        <router-link v-bind:to="`/images/new/${entry.id}`" tag="button">Add Image</router-link>
        <button v-on:click="destroyEntry()">Delete Entry</button>
      </section>
    </header>
    <!-- </div> -->
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
      observed_bodies: {},
    };
  },
  created: function () {
    this.entriesIndex();
    this.observedBodies();
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
    destroyEntry: function () {
      console.log("in destroy");
      axios.delete(`/entries/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/entries");
      });
    },
    observedBodies: function () {
      console.log("in observed_bodies");
      axios.get("/observed_bodies/" + this.$route.params.id).then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.observed_bodies = response.data;
      });
    },
  },
};
</script>
