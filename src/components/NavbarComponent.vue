<template>
  <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex justify-center">
        <v-toolbar-title><v-btn style="height: 100px; width: 100px;" text to="/">Home</v-btn></v-toolbar-title>
        <v-toolbar-title><v-btn style="height: 100px; width: 100px;" text to="/todolist">Todo List</v-btn></v-toolbar-title>
        <v-toolbar-title><v-btn style="height: 100px; width: 100px;" text to="/news-api">Hot News</v-btn></v-toolbar-title>
        <v-toolbar-title><v-btn style="height: 100px; width: 100px;" text to="/wireframe-view">Wireframe</v-btn></v-toolbar-title>
      </div>
      
      <v-spacer></v-spacer>
      
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>
