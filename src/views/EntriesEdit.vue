<template>
  <div class="entries-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Entry edit</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editEntryParams.title" />
      </div>
      <div>
        <label>Date:</label>
        <input type="text" v-model="editEntryParams.date" />
        <label>Location:</label>
        <input type="text" v-model="editEntryParams.location" />
      </div>
      <div>
        <label>Start Time:</label>
        <input type="text" v-model="editEntryParams.start_time" />
        <label>End Time:</label>
        <input type="text" v-model="editEntryParams.end_time" />
      </div>
      <div>
        <label>Seeing Conditions:</label>
        <input type="text" v-model="editEntryParams.seeing_conditions" />
      </div>
      <div>
        <label>Telescope:</label>
        <input type="text" v-model="editEntryParams.telescope_type" />
      </div>
      <div>
        <label>Filters:</label>
        <input type="text" v-model="editEntryParams.filters" />
        <label>Magnification:</label>
        <input type="text" v-model="editEntryParams.magnification" />
      </div>
      <div>
        <label>Observed Body:</label>
      </div>
      <div>
        <!-- <input type="text" v-model="editEntryParams.telescope_type" /> -->
        <label>Right Ascention:</label>
        <input type="text" v-model="editEntryParams.right_ascention" />
        <label>Declination:</label>
        <input type="text" v-model="editEntryParams.declination" />
      </div>
      <div>
        <label>Notes:</label>
        <input type="text" v-model="editEntryParams.notes" />
      </div>

      <div>
        <label>Title:</label>
        <input type="text" v-model="editEntryParams.title" />
      </div>
      <div>
        <label>Notes:</label>
        <input type="text" v-model="editEntryParams.notes" />
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
      editEntryParams: {},
      errors: [],
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
  },
  created: function () {
    this.getEntry();
  },
};
</script>
