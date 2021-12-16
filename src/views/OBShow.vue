<template>
  <div class="obindex">
    <section id="intro" class="main">
      <div class="spotlight">
        <div class="content">
    <!-- <div id="main"> -->

    <!-- <p><h2>{{ entry.title }}</h2></p> -->
          <div v-for="entry in entries">
              <p><h1>{{ entry.title }}</h1></p>
              <div v-for="ob in entry.observed_bodies">
                <h3>{{ ob.name }}</h3>
              </div>
              <p>Start time: {{ entry.start_time }} | End time: {{entry.end_time }}</p>
              <p>Location: {{ entry.location }} | Date: {{entry.date}} </p>
              <p>{{ entry.notes }}</p>
              <router-link v-bind:to="`/entries/${entry.id}`" tag="button">Full Entry</router-link>
              <hr>
          </div>
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
      entries: [],
    };
  },
  created: function () {
    this.observedBodies();
  },
  methods: {
    observedBodies: function () {
      console.log("in observed_bodies");
      axios.get("/observed_bodies/ob_show/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.entries = response.data;
      });
    },
  },
};
</script>
