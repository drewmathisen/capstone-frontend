<template>
  <div>
    <header id="header">
      <section id="content" class="main">
        <h1>{{ entry.title }}</h1>
        <b>Name:</b>
        {{ name }} |
        <b>Organization:</b>
        {{ organization }}
        <br />
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
        <b>Right Ascention:</b>
        {{ entry.right_ascention }} |
        <b>Telecscope Type:</b>
        {{ entry.telescope_type }} |
        <b>Magnification:</b>
        {{ entry.magnification }} |
        <b>Filter:</b>
        {{ entry.filter }} |
        <br />
        <b>Notes:</b>
        <br />
        <hr />
        <div>
          <form v-on:submit.prevent="submit()">
            <div>
              <label>Name:</label>
              <input type="text" v-model="name" />
            </div>
            <br />
            <div>
              <label>Organization:</label>
              <input type="text" v-model="organization" />
            </div>
            <br />
          </form>
        </div>
        <hr />
        <button class="btn btn-primary pl-5 pr-5" @click="download">Download PDF</button>

        <header id="header">
          <p><router-link v-bind:to="`/entries`" tag="button">Back</router-link></p>
        </header>
      </section>
    </header>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      name: "HELLO",
      entry: [],
      observed_bodies: {},
      image_url: "",
      name: "",
      organization: "",
      bodies: [],
    };
  },
  created: function () {
    this.entriesIndex();
    this.observedBodies();
  },
  methods: {
    download() {
      let pdfName = "test";
      var doc = new jsPDF();
      var notes = "Notes: " + this.entry.notes;
      var bnotes = "Notes: " + this.bodies;

      doc.setFontSize(10);
      doc.text("Name: " + this.name, 20, 10, "left");
      doc.text("Organization: " + this.organization, 20, 15, "left");

      doc.setFontSize(20);
      doc.text("Title: " + this.entry.title, 107.95, 30, "center");

      doc.setFontSize(10);
      doc.text("Start time: " + this.entry.start_time, 20, 40, "left");
      doc.text("End time: " + this.entry.end_time, 20, 45, "left");
      doc.text("Date: " + this.entry.date, 20, 50, "left");
      doc.text("Location: " + this.entry.location, 20, 55, "left");
      doc.text("Seeing Conditions: " + this.entry.seeing_conditions, 20, 60, "left");

      doc.text("Right Ascention: " + this.entry.right_ascention, 107.95, 40, "left");
      doc.text("Declination: " + this.entry.declination, 107.95, 45, "left");
      doc.text("Telescope Type: " + this.entry.telescope_type, 107.95, 50, "left");
      doc.text("Magnification: " + this.entry.magnification, 107.95, 55, "left");
      doc.text("Filters: " + this.entry.filters, 107.95, 60, "left");

      var blines = doc.splitTextToSize(bnotes, 215.9 - 20 - 20);
      doc.text(20, 70, blines);

      // doc.text("Notes: " + this.entry.notes, 20, 60, "left");
      var lines = doc.splitTextToSize(notes, 215.9 - 20 - 20);
      doc.text(20, 90, lines);
      doc.save(pdfName + ".pdf");
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
    observedBodies: function () {
      console.log("in observed_bodies");
      axios.get("/observed_bodies/" + this.$route.params.id).then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.observed_bodies = response.data;
        console.log(this.entry);

        const ob_bodies = [];
        this.observed_bodies.forEach(function (body) {
          ob_bodies.push(body.name);
        });
        this.bodies = ob_bodies;
        console.log(this.bodies);
      });
    },
    submit: function () {
      console.log(this.name);
      console.log(this.organization);
    },
  },
};
</script>
