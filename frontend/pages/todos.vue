<template>
  <div>
    <div class="text-center mb-6">
      <h1 class="text-2xl font-bold mb-4">📝 Todo Manager</h1>
      <p class="text-secondary">Keep track of your daily tasks</p>
    </div>

    <!-- Add Todo Form -->
    <div class="card mb-6">
      <form @submit.prevent="addTodo" class="flex gap-4">
      <input
      v-model="newTodo"
      type="text"
      placeholder="Enter a new task..."
      class="form-input flex-1"
      style="margin-bottom: 20px;"
      required
      />
      <button type="submit" class="btn btn-primary">Add Task</button>
      </form>
    </div>

    <!-- Todos List -->
    <div class="space-y-4">
      <div v-if="loading" class="text-center">
        <p>Loading todos...</p>
      </div>
      
      <div v-else-if="todos.length === 0" class="text-center">
        <p class="text-secondary">No todos yet. Add one above!</p>
      </div>
      
      <div v-else>
        <div v-for="todo in todos" :key="todo._id" class="todo-item" :class="{ completed: todo.completed }">
          <div class="todo-content">
            <input
              type="checkbox"
              :checked="todo.completed"
              @change="toggleTodo(todo._id)"
              class="todo-checkbox"
            />
            <span class="todo-text" :class="{ completed: todo.completed }">
              {{ todo.task }}
            </span>
          </div>
          <div class="todo-actions">
            <button @click="deleteTodo(todo._id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const todos = ref([])
const newTodo = ref('')
const loading = ref(true)

const API_BASE = 'http://localhost:5000/api'

// Fetch todos
const fetchTodos = async () => {
  try {
    loading.value = true
    const response = await $fetch(`${API_BASE}/todos`)
    todos.value = response
  } catch (error) {
    console.error('Error fetching todos:', error)
  } finally {
    loading.value = false
  }
}

// Add todo
const addTodo = async () => {
  if (!newTodo.value.trim()) return
  
  try {
    const response = await $fetch(`${API_BASE}/todos`, {
      method: 'POST',
      body: { task: newTodo.value }
    })
    todos.value.push(response)
    newTodo.value = ''
  } catch (error) {
    console.error('Error adding todo:', error)
  }
}

// Toggle todo completion
const toggleTodo = async (id) => {
  try {
    const response = await $fetch(`${API_BASE}/todos/${id}`, {
      method: 'PUT'
    })
    const index = todos.value.findIndex(todo => todo._id === id)
    if (index !== -1) {
      todos.value[index] = response
    }
  } catch (error) {
    console.error('Error toggling todo:', error)
  }
}

// Delete todo
const deleteTodo = async (id) => {
  try {
    await $fetch(`${API_BASE}/todos/${id}`, {
      method: 'DELETE'
    })
    todos.value = todos.value.filter(todo => todo._id !== id)
  } catch (error) {
    console.error('Error deleting todo:', error)
  }
}

// Load todos on mount
onMounted(() => {
  fetchTodos()
})
</script>

<style scoped>
.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>
