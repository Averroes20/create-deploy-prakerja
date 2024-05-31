<template>
  <div class="container">
    <h3>Todo List (TPM-3)</h3>
    <table class="todo-table">
      <tbody>
        <tr v-for="(item, index) in todoList" :key="index">
          <td v-if="editingIndex !== index">
            <router-link :to="{ name: 'TodoDetail', params: { index } }" class="text-style">{{ item.name }}</router-link>
          </td>
          <td v-else>
            <input type="text" v-model="editedItem.name" placeholder="Edit item name.." />
          </td>
          <td class="align-right">
            <div v-if="editingIndex !== index">
              <button @click="editItem(index)">Edit</button>
              <button @click="deleteItem(index)">Delete</button>
            </div>
            <div v-else>
              <button @click="saveItem(index)">Save</button>
              <button @click="cancelEdit">Cancel</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <form @submit.prevent="handleAddItem" class="form-input">
      <p>
        <input type="text" required placeholder="item name.." v-model="itemName" />
        <button type="submit">Add item</button>
      </p>
    </form>
    <p>{{ isHebat }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "TodoList",
  data() {
    return {
      itemName: '',
      editingIndex: null,
      editedItem: {},
    };
  },
  computed: {
    ...mapState(['todoList']),
    ...mapGetters(['isHebat']),
  },
  methods: {
  ...mapActions(['addItem', 'deleteItem', 'updateItem']),
  handleAddItem() {
    if (this.itemName.trim()) {
      this.$store.dispatch('addItem', { name: this.itemName });
      this.itemName = '';
    }
  },
  deleteItem(index) {
    this.$store.dispatch('deleteItem', index);
  },
  saveItem(index) {
    this.$store.dispatch('updateItem', { index, item: this.editedItem });
    this.editingIndex = null;
    this.editedItem = {};
  },
},
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
.todo-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
.todo-table th, .todo-table td {
  border: 0px;
  padding: 8px;
}
.todo-table th {
  background-color: #f2f2f2;
  text-align: left;
}
.form-input {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form-input input {
  width: 85%;
  margin-right: 20px;
}
.align-right{
  text-align: right;
  width: 200px;
}
.text-style{
  text-decoration: none;
  color: black;
}
button{
  margin-right: 20px;
}
input{
  width: 100%;
}
</style>
