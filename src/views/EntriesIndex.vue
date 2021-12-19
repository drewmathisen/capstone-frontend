<template>
  <div class="entriesIndex">
    <header id="header">
      <div id="wrapper">
        <div class="content">
          <div v-for="entry in entries">
            <h1>{{ entry.title }}</h1>
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
    </header>
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
    };
  },
  created: function () {
    this.entriesIndex();
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
  },
};
</script>
