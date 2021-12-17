<template>
  <div class="entries-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Images</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editEntryParams.title" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editEntryParams: {
        user_id: "",
        title: "",
        notes: "",
        telescope_type: "",
        start_time: "",
        end_time: "",
        location: "",
        declination: "",
        right_ascention: "",
        magnification: "",
        seeing_conditions: "",
        filters: "",
        date: "",
        observed_bodies: [],
        images: [],
      },
      errors: [],
      newBody: {
        name: "",
      },
    };
  },
  methods: {
    submit: function () {
      axios
        .patch("/entries/" + this.$route.params.id, this.editEntryParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/entries/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getEntry: function () {
      axios.get("/entries/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.editEntryParams = response.data;
      });
    },
    obSubmit: function () {
      axios
        .post("/observed_bodies", this.newBody)
        .then((response) => {
          console.log(response.data);
          // this.observedBodies = response.data;
          this.editEntryParams.observed_bodies.push(response.data);
          console.log(this.editEntryParams.observed_bodies);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
  created: function () {
    this.getEntry();
  },
};
</script>
