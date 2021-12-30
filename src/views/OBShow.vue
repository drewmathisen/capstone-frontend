<template>
  <div class="obindex">
    <header id="header">
      <section id="intro" class="main">
        <div class="spotlight">
          <div class="content">
            <!-- <div id="main"> -->

            <!-- <p><h2>{{ entry.title }}</h2></p> -->
            <div v-for="entry in entries">
              <h1>{{ entry.title }}</h1>
              <h3>
                by
                <router-link v-bind:to="`/user/${entry.user.id}`">{{ entry.user.name }}</router-link>
              </h3>
              <b>Observed Bodies:</b>
              <br />
              &bull;
              <div v-for="ob in entry.observed_bodies" style="display: inline-block">
                {{ ob.name + " &bull;" }}
              </div>
              <br />
              <b>Start time:</b>
              {{ entry.start_time }} |
              <b>End time:</b>
              {{ entry.end_time }} |
              <b>Location:</b>
              {{ entry.location }} |
              <b>Date:</b>
              {{ entry.date }}
              <br />
              <b>Notes:</b>
              {{ entry.notes }}
              <br />
              <router-link v-bind:to="`/entries/${entry.id}`" tag="button">Full Entry</router-link>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </header>
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
