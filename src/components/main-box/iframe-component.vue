<template>
<div class="iframe-component">
  <iframe style="flex:1;margin-right: 20px" src="http://www.ruanyifeng.com/home.html"></iframe>
  <iframe  src="http://www.ruanyifeng.com/home.html"></iframe>
</div>
</template>
<style lang="less">
.iframe-component{
  display:flex;
  iframe{
    border: none;
    height: 100%;
    min-height: 600px;
    //margin-left: 20px;
  }
}
</style>