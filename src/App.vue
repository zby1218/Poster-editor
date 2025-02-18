<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
const selectedKeys = ref(["1"]);
</script>

<template>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>

<style scoped>
.test{
  width: 100px;
  height: 40px;
  border: 1px solid saddlebrown;
}
</style>

