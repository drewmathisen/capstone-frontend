<template>
  <div id="app">
    <div id="wrapper">
      <!-- Header -->
      <header id="header" class="alt">
        <span class="logo"><img src="images/logo.svg" alt="" /></span>
        <h1>Stellar</h1>
        <p>Log and share your data!</p>
      </header>

      <nav class="main">
        <ul class="main">
          <router-link class="button" to="/">Home</router-link>
          <router-link class="button" v-if="!isLoggedIn()" to="/login">Login</router-link>
          <router-link class="button" v-if="!isLoggedIn()" to="/signup">Signup</router-link>
          <router-link class="button" to="/entries">Entries</router-link>
          <router-link class="button" v-if="isLoggedIn()" to="/logout">Log out</router-link>
          <router-link class="button" to="/entries/new">New Entry</router-link>
          <router-link class="button" to="/">Search by Subject</router-link>
        </ul>
      </nav>

      <!-- Nav -->
      <!-- <nav id="nav">
            <ul>
              <router-link to="/">Home</router-link>
              <li><a href="#login" class="active">Introduction</a></li>
              <li><a href="#first">First Section</a></li>
              <li><a href="#second">Second Section</a></li>
              <li><a href="#cta">Get Started</a></li>
            </ul>
          </nav> -->

      <router-view />
      <!-- Main -->
      <!-- Footer -->
      <footer id="footer">
        <!-- <section>
          <ul class="actions">
            <li><a href="generic.html" class="button">Learn More</a></li>
          </ul>
        </section> -->
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
