<template>
  <div class="images-new">
    <form v-on:submit.prevent="submit()">
      <div class="spotlight">
        <h1>New Image</h1>
      </div>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newImageParams.name" />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" v-model="newImageParams.description" />
      </div>
      <div>
        <label>Image Url:</label>
        <input type="text" v-model="newImageParams.image_url" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import About from "./About.vue";
export default {
  components: { About },
  data: function () {
    return {
      entry: [],
      newImageParams: {},
      errors: [],
    };
  },
  created: function () {
    this.getEntry();
  },
  methods: {
    getEntry: function () {
      console.log("in show");
      axios.get("/entries/" + this.$route.params.id).then((response) => {
        // axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        // localStorage.setItem("jwt", response.data.jwt);
        console.log(response.data);
        this.entry = response.data;
      });
    },
    submit: function () {
      this.newImageParams.user_id = this.entry.user_id;
      this.newImageParams.entry_id = this.entry.id;
      axios
        .post("/images", this.newImageParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/entries/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
