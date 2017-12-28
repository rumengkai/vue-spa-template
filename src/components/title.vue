<template>
	<div>
		<h1 v-for="(item,index) in list" :key="index">{{ item.name }}</h1>
	</div>
</template>

<script>
  export default {
    props: {
			list: {
				type: Array,
				default: []
			}
		},
    mounted: function () {
      document.title = this.text;
    }
  }
</script>