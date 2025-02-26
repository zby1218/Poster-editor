<template>
  <div v-if="!$route.meta.hideNav">
    <a-button @click="goToPage('/user')">User</a-button>
    <a-button @click="goToPage('/control')">Control</a-button>
    <a-button @click="goToPage('/editor')">Editor</a-button>
  </div>
  <router-view></router-view>

</template>

<script setup lang="ts">
  import {  useRouter } from 'vue-router'
  import { ref } from 'vue';
  const router = useRouter()
  const goToPage = (path: string) => {
    router.push(path)
  }
</script>

<style scoped>
</style>

