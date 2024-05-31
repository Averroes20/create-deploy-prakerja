<template>
  <div class="news-detail">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <img :src="article.urlToImage" :alt="article.title" class="article-image" />
      <h1>{{ article.title }}</h1>
      <p><strong>By:</strong> {{ article.author }}</p>
      <p>Published at: {{ article.publishedAt }}</p>
      <p>{{ article.description }}</p>
      <p>{{ article.content }}</p>
      <a :href="article.url" target="_blank">Read more on original site</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NewsDetail",
  props: ['id'],
  computed: {
    ...mapState('newsapi', ['data', 'loading', 'error']),
    article() {
      return this.data.find(article => article.url === this.id);
    },
    isLoading() {
      return this.loading;
    },
  },
};
</script>

<style scoped>
.news-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.article-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>
