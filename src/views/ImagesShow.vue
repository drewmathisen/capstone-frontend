<template>
  <div class="main">
    <!-- <div id="main"> -->
    <header id="header">
      <section id="content" class="main">
        <h1>{{ image.name }}</h1>
        <p>{{ image.description }}</p>
        <span class="image fit"><img v-bind:src="image.image_url" alt="image.description" /></span>
        <hr />
        <div v-if="image.user_id == $parent.getUserId()">
          <router-link v-bind:to="`/images/${image.id}/edit`" tag="button">Edit Image</router-link>
          <!-- <router-link v-bind:to="`/images/new/${entry.id}`" tag="button">Add Image</router-link> -->
          <button v-on:click="destroyImage()">Delete Image</button>
        </div>
        <p><router-link v-bind:to="`/entries/${image.entry_id}`" tag="button">Back</router-link></p>
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
      image: [],
    };
  },
  created: function () {
    this.getImage();
  },
  methods: {
    getImage: function () {
      console.log("in get image");
      axios.get("/images/" + this.$route.params.id).then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.image = response.data;
      });
    },
    destroyImage: function () {
      console.log("in destroy");
      axios.delete(`/images/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/entries/" + this.$route.params.id);
      });
    },
  },
};
</script>
