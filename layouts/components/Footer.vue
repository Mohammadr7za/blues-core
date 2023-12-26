<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
     واحد ICT صبا فولاد خلیج فارس 2021 © Copyright
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
     نسخه {{ configStore.version }}
    </span>
  </div>
</template>


<script setup>
import {useLayoutConfigStore} from "@layouts/stores/config.js";

const configStore = useLayoutConfigStore()

</script>
