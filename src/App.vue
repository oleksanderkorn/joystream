<template>
  <div id="app">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand>
        <img
          width="50"
          height="50"
          alt="Vue logo"
          src="./assets/joystream.svg"
        />
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Validators.js</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/live">Live Data</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  border-radius: 25px;
}
</style>
