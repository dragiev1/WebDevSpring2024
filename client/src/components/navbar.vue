<script setup lang="ts">
import { RouterLink} from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
  console.log({ isActive: isActive.value });
}

</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>


    <a role="button" @click="toggleMenu" :class="{ 'is-active' : isActive}" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : isActive}">
    <div class="navbar-start">
      <RouterLink to="/" active-class="is active" class="navbar-item">
        Home
      </RouterLink>

      <RouterLink to="/documentation" active-class="is active" class="navbar-item">
        Documentation
      </RouterLink>

      <RouterLink to="/products" class="navbar-item">
        Products
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <RouterLink to="/" class="navbar-link">
          More
        </RouterLink>

        <div class="navbar-dropdown">
          <RouterLink to="/about" class="navbar-item">
            About
          </RouterLink>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
    
</style>