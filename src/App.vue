<template>
  <div id="app">
    <div id="wrapper">
      <!-- Header -->
      <header id="header" class="alt">
        <span class="logo"><img src="images/logo.svg" alt="" /></span>
        <h1>Intrastellar</h1>
        <p>Log and share your data!</p>
      </header>

      <section id="intro" class="main">
        <header id="header">
          <nav class="main">
            <ul class="main">
              <router-link class="button" to="/">Home</router-link>
              <router-link class="button" v-if="!isLoggedIn()" to="/login">Login</router-link>
              <router-link class="button" v-if="!isLoggedIn()" to="/signup">Signup</router-link>
              <router-link class="button" v-if="isLoggedIn()" to="/entries">My Entries</router-link>
              <router-link class="button" v-if="isLoggedIn()" to="/logout">Log out</router-link>
              <router-link class="button" v-if="isLoggedIn()" to="/entries/new">New Entry</router-link>
              <router-link class="button" to="/observedbodies">Search by Subject</router-link>
            </ul>
          </nav>
        </header>
      </section>

      <router-view />

      <footer id="footer">
        <section>
          <h2>Find me on GitHub</h2>
          <ul class="actions">
            <li><a href="https://github.com/drewmathisen" class="button">Learn More</a></li>
          </ul>
        </section>
      </footer>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
