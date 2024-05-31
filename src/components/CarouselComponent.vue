<template>
	<div v-if="error">{{ error.message }}</div>
	<div v-else>
		<v-carousel cycle height="400" hide-delimiters hide-delimiter-background show-arrows-on-hover>
			<v-carousel-item v-for="(data, i) in data" :key="i" @click="goToDetail(data.url)" class="cursor: pointer">
				<v-sheet height="100%">
					<v-img :src="data.urlToImage" height="100%">
					</v-img>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

  export default {
		name: 'CarouselComponent',
		computed: {
			...mapState('newsapi', ['data', 'loading', 'error']),
			isLoading(){
				return this.loading;
			}
    },
		methods: {
			...mapActions('newsapi', ['fetchData']),
			goToDetail(url) {
				this.$router.push({ name: 'NewsDetail', params: { id:url } });
			}
		},
		created() {
			this.fetchData();
		},
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>