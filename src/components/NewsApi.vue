<template>
  <v-container>
    <div v-if="isLoading">
      <v-row>
        <v-skeleton-loader
          class="ml-6"
          width="344"
          type="card"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="ml-6"
          width="344"
          type="card"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="ml-6"
          width="344"
          type="card"
        ></v-skeleton-loader>
      </v-row>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <v-row v-else>
      <v-card
      class="mx-auto mb-4"
      max-width="344"
      v-for="article in data" :key="article.url" @click="goToDetail(article.url)">
        <v-img :src="article.urlToImage" :alt="article.title" height="200px">
          <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        </v-img>
        <div class="article-content">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle><strong>By:</strong> {{ article.author }}</v-card-subtitle>
          <!-- <button >Read more</button> -->
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "NewsApi",
  computed: {
    ...mapState('newsapi', ['data', 'loading', 'error']),
    isLoading() {
      return this.loading;
    },
  },
  methods: {
    ...mapActions('newsapi', ['fetchData']),
    goToDetail(url) {
      this.$router.push({ name: 'NewsDetail', params: { id: url } });
    },
  },
  created() {
    this.fetchData();
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>