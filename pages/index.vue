<template>
  <div class="ui container" v-html="text"></div>
</template>

<script setup lang="ts">
const { $renderMarkdown } = useNuxtApp();
const text = $renderMarkdown("./pages/index.md");
</script>
