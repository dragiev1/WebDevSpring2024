<script setup lang="ts">
import { refSession } from '@/viewModel/session';
import { getUsers, type User } from '@/model/users';

    const session = refSession();

    const users = getUsers().slice(0, 5);

    function doLogin(user: User) {
        session.user = user;
    }

</script>

<template>
    <div class="badge" v-if="session.user">
        <img :src="session.user.image" alt="Avatar"></img>
        {{ session.user.firstName }} {{ session.user.lastName }}
        {{ session.user.email }}

    </div>
    
    <div class="buttons" v-else>
        <a class="button is-primary">
        <strong>Sign up</strong>
        </a>
        <a class="button is-light">
            Log in
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
        <RouterLink to="/" class="navbar-link">
          More
        </RouterLink>

        <div class="navbar-dropdown">
          <a v-for="user in users" class="navbar-item" @click="doLogin">
            {{user.firstName}} {{ user.lastName }}
          </a>
        </div>
      </div>
    </div>
</template>

<style scoped>
    .badge {
        display: flex;
        align-items: center;
        line-height: 1em;

    }
    .badge img {
        border-radius: 50%;
        
    }
</style>