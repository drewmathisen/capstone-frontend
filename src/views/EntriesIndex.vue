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
