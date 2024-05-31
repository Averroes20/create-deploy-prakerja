<template>
  <v-app>
    <v-main>
      <navbar-component/>
      <router-view/>
      <footer-component/>
    </v-main>
  </v-app>
</template>

<script>

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    NavbarComponent,
    FooterComponent
  },
};
</script>
