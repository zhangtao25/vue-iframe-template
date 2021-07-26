<template>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
.margin{
  margin: 0 auto;
}
@media screen and (max-width: 1300px) {
  .main-box-content {
    width: 1000px;
  }
}

@media (min-width: 1300px) and (max-width: 1800px){
  .main-box-content {
    width: 100%;
    padding: 0 50px;
  }
}

@media (min-width: 1800px){
  .main-box-content {
    width: 1800px;
    padding: 0 50px;
  }
}
</style>
