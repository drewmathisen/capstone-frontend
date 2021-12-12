<template>
  <div class="entries-new">
    <form v-on:submit.prevent="submit()">
      <h1>Post create</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newEntryParams.title" />
      </div>
      <div>
        <label>Date:</label>
        <input type="text" v-model="newEntryParams.date" />
        <label>Location:</label>
        <input type="text" v-model="newEntryParams.location" />
      </div>
      <div>
        <label>Start Time:</label>
        <input type="text" v-model="newEntryParams.start_time" />
        <label>End Time:</label>
        <input type="text" v-model="newEntryParams.end_time" />
      </div>
      <div>
        <label>Seeing Conditions:</label>
        <input type="text" v-model="newEntryParams.seeing_conditions" />
      </div>
      <div>
        <label>Telescope:</label>
        <input type="text" v-model="newEntryParams.telescope_type" />
      </div>
      <div>
        <label>Filters:</label>
        <input type="text" v-model="newEntryParams.filters" />
        <label>Magnification:</label>
        <input type="text" v-model="newEntryParams.magnification" />
      </div>
      <div>
        <label>Observed Body:</label>
      </div>
      <div>
        <!-- <input type="text" v-model="newEntryParams.telescope_type" /> -->
        <label>Right Ascention:</label>
        <input type="text" v-model="newEntryParams.right_ascention" />
        <label>Declination:</label>
        <input type="text" v-model="newEntryParams.declination" />
      </div>
      <div>
        <label>Notes:</label>
        <input type="text" v-model="newEntryParams.notes" />
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
      newEntryParams: {
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
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/entries", this.newEntryParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/entries");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
