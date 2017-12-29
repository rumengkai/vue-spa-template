<!--suppress ALL -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  html {
    height: 100%;
  }
  body {
		height: 100%;
		background: #f5f5f5;
		align-items: center;
  }

  #app {
		font-size: 12px;
    color: #020202;
		max-width: 750px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    a {
      text-decoration: none;
    }
  }

</style>
