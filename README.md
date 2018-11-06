# v-smooth-img

Vue directive for making your images appear in a fade in animation (experimental, still in early stages)

## Installation
```
yarn add v-smooth-img
```

## How To Use
### main.js
```
import Vue from "vue";
import vSmoothImg from "v-smooth-img";
Vue.use(vSmoothImg)
```

### Hello.vue
```
<template>
  <div class="container">
    <img v-smooth src="..." alt="...">
  </div>
</template>
```
