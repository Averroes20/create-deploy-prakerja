<template>
  <div>
    <!-- <CarouselComponent/> -->
    <ParallaxComponent/>
    <v-container>
      <ButtonGroups/>
      <NewsApi />
    </v-container>
  </div>
  </template>
  
<script>
  // import CarouselComponent from '@/components/CarouselComponent.vue';
  import NewsApi from '@/components/NewsApi.vue';
  import ButtonGroups from '@/components/ButtonGroups.vue';
  import ParallaxComponent from '@/components/ParallaxComponent.vue';

  export default {
    components: {
      NewsApi,
      // CarouselComponent,
      ButtonGroups,
      ParallaxComponent,
    }
  }
</script>