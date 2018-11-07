<template>
  <div class="container">
    <img v-smooth :src="src" alt="">
  </div>
</template>

<style scoped>
.container{
  position: relative;
  width: 1000px;
  height:1000px;
  margin: 0 auto;
}
img{
  width: 100%
  /* animation-duration: 2s; */
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}
</style>


<script>
export default {
  data() {
    return {
      src:
        "https://images.unsplash.com/photo-1528631163-b3b387d1b85c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd473894787461e2261cc8988bc6b2b7&auto=format&fit=crop&w=1489&q=80"
    };
  }
};
</script>

