<template>
  <div>
    <h1>Item View</h1>
    <p>Current ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
