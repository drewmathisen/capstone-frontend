<template>
  <div class="entries-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Image</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="editImageParams.name" />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" v-model="editImageParams.description" />
      </div>
      <div>
        <label>Image Url:</label>
        <input type="text" v-model="editImageParams.image_url" />
      </div>
      <input type="submit" value="Submit" />
      <header id="header">
        <p><router-link v-bind:to="`/entries/${editImageParams.entry_id}`" tag="button">Back</router-link></p>
      </header>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editImageParams: {
        name: "",
        description: "",
        image_url: "",
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .patch("/images/" + this.$route.params.id, this.editImageParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/images/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getImage: function () {
      axios.get("/images/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.editImageParams = response.data;
      });
    },
  },
  created: function () {
    this.getImage();
  },
};
</script>
