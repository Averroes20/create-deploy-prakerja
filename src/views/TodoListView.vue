<template>
  <div class="about">
    <h1>Todo List Page</h1>
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    TodoList
  }
}
</script>