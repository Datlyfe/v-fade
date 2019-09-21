# v-fade

Vue directive for making your images appear in a fade in animation (experimental, still in early stages)

## Installation

```sh
yarn add @datlyfe/v-fade
```

## How To Use

### main.js

```javascript
import Vue from "vue";
import vFade from "@datlyfe/v-fade";
Vue.use(vFade);
```

### Hello.vue

```html
<template>
  <div class="container">
    <img v-fade src="..." alt="..." />
  </div>
</template>
```
