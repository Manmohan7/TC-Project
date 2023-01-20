<template>
  <button class="btn" @click="$emit('handleClick')">
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
}
</script>

<style scoped>
.btn {
  margin: 0;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
}
</style>
