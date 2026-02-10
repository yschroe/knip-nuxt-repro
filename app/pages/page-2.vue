<script setup lang="ts">
definePageMeta({
  myModule: "on",
});

const { getName } = useModuleData();
</script>

<template>
  <div>
    <h1>Page 2</h1>
    <MyModuleComponent />
    <p>{{ getName() }}</p>
  </div>
</template>
