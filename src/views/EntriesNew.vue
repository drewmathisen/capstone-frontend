<template>
  <div class="entries-new">
    <form v-on:submit.prevent="submit()">
      <div class="spotlight">
        <h1>New Entry</h1>
      </div>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newEntryParams.title" />
      </div>
      <br />

      <form v-on:submit.prevent="obSubmit()">
        <label>Observed Body:</label>
        <input type="text" v-model="newBody.name" />
        <br />
        <input type="submit" value="add" />
        <div v-for="body in newEntryParams.observed_bodies">{{ body.name }}</div>
      </form>
      <br />
      <div>
        <label>Date:</label>
        <input type="text" v-model="newEntryParams.date" />
        <br />
        <label>Location:</label>
        <input type="text" v-model="newEntryParams.location" />
      </div>
      <br />
      <div>
        <label>Start Time:</label>
        <input type="text" v-model="newEntryParams.start_time" />
        <br />
        <label>End Time:</label>
        <input type="text" v-model="newEntryParams.end_time" />
      </div>
      <br />
      <div>
        <label>Seeing Conditions:</label>
        <input type="text" v-model="newEntryParams.seeing_conditions" />
      </div>
      <br />
      <div>
        <label>Telescope:</label>
        <input type="text" v-model="newEntryParams.telescope_type" />
      </div>
      <br />
      <div>
        <label>Filters:</label>
        <input type="text" v-model="newEntryParams.filters" />
        <br />
        <label>Magnification:</label>
        <input type="text" v-model="newEntryParams.magnification" />
      </div>
      <br />
      <div>
        <!-- <input type="text" v-model="newEntryParams.telescope_type" /> -->
        <label>Right Ascension:</label>
        <input type="text" v-model="newEntryParams.right_ascention" />
        <br />
        <label>Declination:</label>
        <input type="text" v-model="newEntryParams.declination" />
      </div>
      <br />
      <div>
        <label>Notes:</label>
        <input type="text" v-model="newEntryParams.notes" />
      </div>
      <br />
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
        observed_bodies: [],
      },
      newBody: {
        name: "",
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
    obSubmit: function () {
      axios
        .post("/observed_bodies", this.newBody)
        .then((response) => {
          console.log(response.data);
          // this.observedBodies = response.data;
          this.newEntryParams.observed_bodies.push(response.data);
          console.log(this.newEntryParams.observed_bodies);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
