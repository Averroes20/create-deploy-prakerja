<template>
  <div class="container">
    <h3>Todo Detail</h3>
    <p>{{ todoItem.name }}</p>
    <router-link to="/todolist">Back to list</router-link>
  </div>
</template>

<script>
export default {
  name: "TodoDetail",
  props: ['index'],
  data() {
    return {
      todoItem: {}
    };
  },
  created() {
    const index = this.index;
    this.todoItem = this.$root.$data.todoList[index] || { name: 'Item not found' };
  }
};
</script>

<style scoped>
.container {
  width: 60%;
  border: 1px solid black;
  margin: auto;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
