<template>
  <div class="card p-6" :class="customClass">
    <div v-if="icon || title" class="flex items-center mb-4">
      <div v-if="icon" class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
        <Icon :name="icon" class="w-5 h-5 text-white" />
      </div>
      <h3 v-if="title" class="text-lg font-semibold text-gray-900 dark:text-white">
        {{ title }}
      </h3>
    </div>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
})
</script>
