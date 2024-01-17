<template>
  <div>
    <h1>Item View</h1>
    <p>Current ID: {{ $props.id }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
});
</script>
