<template>
  <div class="img-wrapper">
    <img :src="name" :alt="'Image - ' + name" class="img" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.img-wrapper {
  padding: 2px 4px;
}

.img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>