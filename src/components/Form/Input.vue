<template>
	<div>
		<van-cell-group>
			<van-field v-model="data.value" :label="data.name" icon="clear" placeholder="" :required="data.must" @click-icon="username = ''" />
		</van-cell-group>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {CellGroup, Field } from 'vant';
	Vue.use(Field)
	Vue.use(CellGroup);
	export default {
		props: {
			data: {
				type: Object,
				default: {}
			}
		},
		mounted: function() {
			console.log(this.data);
			
		},
		methods: {
			toDetail(params) {
			
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
