<template>
	<div>
		<div v-for="(item,index) in list" :key="index" class="item-list">
			<div class="left">
				{{ item.start_time | parseTime('{y}-{m}-{d}') }}
				{{ item.name }}
			</div>
			<div class="right">
				<img :src="item.banner" alt="">
			</div>
		</div>
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
		mounted: function() {
			console.log(this.list);
			console.log(0);
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	.item-list {
		background: #fff;
	}
	.right{
		width: 2rem;
	}
</style>
