<template>
  <div id="app">
    <div id="wrapper">
      <!-- Header -->
      <header id="header" class="alt">
        <span class="logo"><img src="images/logo.svg" alt="" /></span>
        <h1>Stellar</h1>
        <p>
          Just another free, fully responsive site template
          <br />
          built by
          <a href="https://twitter.com/ajlkn">@ajlkn</a>
          for
          <a href="https://html5up.net">HTML5 UP</a>
          .
        </p>
      </header>

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li><a href="#intro" class="active">Introduction</a></li>
          <li><a href="#first">First Section</a></li>
          <li><a href="#second">Second Section</a></li>
          <li><a href="#cta">Get Started</a></li>
        </ul>
      </nav>
      <router-view />
      <!-- Main -->
      <!-- Footer -->
      <footer id="footer">
        <section>
          <!-- <h2>Aliquam sed mauris</h2> -->
          <!-- <p>
            Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore
            veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
            tincidunt odio.
          </p> -->
          <ul class="actions">
            <li><a href="generic.html" class="button">Learn More</a></li>
          </ul>
        </section>
        <section>
          <h2>Etiam feugiat</h2>
          <dl class="alt">
            <dt>Address</dt>
            <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
            <dt>Phone</dt>
            <dd>(000) 000-0000 x 0000</dd>
            <dt>Email</dt>
            <dd><a href="#">information@untitled.tld</a></dd>
          </dl>
          <ul class="icons">
            <li>
              <a href="#" class="icon brands fa-twitter alt"><span class="label">Twitter</span></a>
            </li>
            <li>
              <a href="#" class="icon brands fa-facebook-f alt"><span class="label">Facebook</span></a>
            </li>
            <li>
              <a href="#" class="icon brands fa-instagram alt"><span class="label">Instagram</span></a>
            </li>
            <li>
              <a href="#" class="icon brands fa-github alt"><span class="label">GitHub</span></a>
            </li>
            <li>
              <a href="#" class="icon brands fa-dribbble alt"><span class="label">Dribbble</span></a>
            </li>
          </ul>
        </section>
        <p class="copyright">
          &copy; Untitled. Design:
          <a href="https://html5up.net">HTML5 UP</a>
          .
        </p>
      </footer>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
      |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link>
      |
      <router-link to="/entries">Entries</router-link>
      |
      <router-link to="/entries/new">New Entry</router-link>
      |
      <router-link v-if="isLoggedIn()" to="/logout">Log out</router-link>
    </div>
    <router-view /> -->
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
