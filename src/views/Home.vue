<template>
  <div class="container">
    <div class="row justify-between">
      <div class="col">
        <ImageContainer :name="bannerImage" />
      </div>
      
      <div class="col hide-sm row align-center">
        <ImageContainer :name="flyerImage" />
      </div>
    </div>

    <div class="row wrap">

      <div
        v-for="(item, index) in list" 
        :key="index"
        :class="['col', { 'col-lg': index === 0 }]"
      >
        <ImageContainer :name="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      bannerImage: "FlyerBanner.jpg",
      flyerImage: "Menu.jpg",
      list: ["Meat.jpg", "Raspberries.jpg", "Points.jpg", "Cerial.jpg", "Bacon.jpg", "Raspberries.jpg", "Points.jpg"]
    }
  }
}
</script>