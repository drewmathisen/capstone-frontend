<template>
  
  <div id="home">
    <!-- Introduction -->
          <header id="header">
    <section id="intro" class="main">
      <div class="spotlight">
        <div class="content">

          <p>
              <div v-for="entry in entries">
                <p><h1>{{ entry.title }}</h1></p>
                <h3>Observed Bodies:</h3> 
                <div v-for="ob in entry.observed_bodies">
                  <h3>{{ ob.name }}</h3>
                </div>
                <p>Start time: {{ entry.start_time }} | End time: {{entry.end_time }}</p>
                <p>Location: {{ entry.location }} | Date: {{entry.date}} </p>
                <p>{{ entry.notes }}</p>
                <router-link v-bind:to="`/entries/${entry.id}`" tag="button">Full Entry</router-link>
                <hr>
              </div>
          </p>


        </div>
      </div>
    </section>
          </header>

    <!-- First Section -->
    <!-- <section id="first" class="main special">
      <header class="major">
        <h2>Magna veroeros</h2>
      </header>
      <ul class="features">
        <li>
          <span class="icon solid major style1 fa-code"></span>
          <h3>Ipsum consequat</h3>
          <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
        </li>
        <li>
          <span class="icon major style3 fa-copy"></span>
          <h3>Amed sed feugiat</h3>
          <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
        </li>
        <li>
          <span class="icon major style5 fa-gem"></span>
          <h3>Dolor nullam</h3>
          <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
        </li>
      </ul>
      <footer class="major">
        <ul class="actions special">
          <li><a href="generic.html" class="button">Learn More</a></li>
        </ul>
      </footer>
    </section> -->

    <!-- Second Section -->
    <!-- <section id="second" class="main special">
      <header class="major">
        <h2>Ipsum consequat</h2>
        <p>
          Donec imperdiet consequat consequat. Suspendisse feugiat congue
          <br />
          posuere. Nulla massa urna, fermentum eget quam aliquet.
        </p>
      </header>
      <ul class="statistics">
        <li class="style1">
          <span class="icon solid fa-code-branch"></span>
          <strong>5,120</strong>
          Etiam
        </li>
        <li class="style2">
          <span class="icon fa-folder-open"></span>
          <strong>8,192</strong>
          Magna
        </li>
        <li class="style3">
          <span class="icon solid fa-signal"></span>
          <strong>2,048</strong>
          Tempus
        </li>
        <li class="style4">
          <span class="icon solid fa-laptop"></span>
          <strong>4,096</strong>
          Aliquam
        </li>
        <li class="style5">
          <span class="icon fa-gem"></span>
          <strong>1,024</strong>
          Nullam
        </li>
      </ul>
      <p class="content">
        Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a
        orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed
        convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
        ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna
        libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus
        in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
      </p>
      <footer class="major">
        <ul class="actions special">
          <li><a href="generic.html" class="button">Learn More</a></li>
        </ul>
      </footer>
    </section> -->

    <!-- Get Started -->
    <!-- <section id="cta" class="main special">
      <header class="major">
        <h2>Congue imperdiet</h2>
        <p>
          Donec imperdiet consequat consequat. Suspendisse feugiat congue
          <br />
          posuere. Nulla massa urna, fermentum eget quam aliquet.
        </p>
      </header>
      <footer class="major">
        <ul class="actions special">
          <li><a href="generic.html" class="button primary">Get Started</a></li>
          <li><a href="generic.html" class="button">Learn More</a></li>
        </ul>
      </footer>
    </section> -->
  </div>
  <!-- <div class="entriesIndex">
    <div v-for="entry in entries">
      <p><h1>{{ entry.title }}</h1></p>
      <h3>Observed Bodies:</h3> 
      <div v-for="ob in entry.observed_bodies">
        <h3>{{ ob.name }}</h3>
      </div>
      <p>Start time: {{ entry.start_time }} | End time: {{entry.end_time }}</p>
      <p>Location: {{ entry.location }} | Date: {{entry.date}} </p>
      <p>{{ entry.notes }}</p>
      <router-link v-bind:to="`/entries/${entry.id}`" tag="button">Full Entry</router-link>
      <hr>
    </div>
  </div> -->
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
      axios.get("/home").then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.entries = response.data;
      });
    },
  },
};
</script>
