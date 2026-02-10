<script setup lang="ts">
import ComponentTwo from "~/components/ComponentTwo.vue";
import LayerComponentTwo from "@core/components/LayerComponentTwo.vue";

// Composable from module in core layer (auto-imported) - detected by knip
const { getName } = useModuleData();
</script>

<template>
  <div>
    <!-- Components from app folder (auto-imported) - not detected by knip -->
    <AppLogo />

    <!-- Explicitly imported - detected by knip -->
    <ComponentTwo />

    <!-- Components from core layer (auto-imported) - not detected by knip -->
    <LayerComponent />

    <!-- Explicitly imported via alias - detected by knip -->
    <LayerComponentTwo />

    <!-- Components from core layers module (auto-imported, with prefix) - not detected by knip -->
    <MyModuleComponent />

    <p>{{ getName() }}</p>

    <!-- Icon from @iconify-json/lucide - not detected by knip (probably tricky) -->
    <UIcon name="lucide:home" />
  </div>
</template>
