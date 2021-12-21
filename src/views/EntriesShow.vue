<template>
  <div class="main">
    <header id="header">
      <section id="content" class="main">
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
        <b>Declination:</b>
        {{ entry.declination }} |
        <b>Right Ascension:</b>
        {{ entry.right_ascention }} |
        <b>Telecscope Type:</b>
        {{ entry.telescope_type }} |
        <b>Magnification:</b>
        {{ entry.magnification }} |
        <b>Filter:</b>
        {{ entry.filter }} |
        <br />
        <b>Notes:</b>
        {{ entry.notes }}
        <br />
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
        <div v-if="entry.user_id == $parent.getUserId()">
          <router-link v-bind:to="`/entries/${entry.id}/edit`" tag="button">Edit Entry</router-link>
          <router-link v-bind:to="`/images/new/${entry.id}`" tag="button">Add Image</router-link>
          <router-link v-bind:to="`/pdf/${entry.id}`" tag="button">Generate PDF</router-link>
          <button v-on:click="destroyEntry()">Delete Entry</button>
        </div>
        <header id="header">
          <p><router-link v-bind:to="`/entries`" tag="button">Back</router-link></p>
        </header>
      </section>
    </header>
    <!-- </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import VueHtml2pdf from "vue-html2pdf";

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
    this.getUserId();
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
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
    getUserId: function () {
      console.log(localStorage.getItem("user_id"));
    },
  },
};
</script>
