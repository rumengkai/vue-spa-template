<template>
	<div>
		<div v-for="(item,index) in list" :key="index" class="item-list" @click="toDetail(item)">
			<p class="list-top">
				{{ item.start_time | parseTime('{y}-{m}-{d}') }} 
				<span class="list-tip" v-bind:class="{ 'list-tip-red': item.state_val=='活动结束' }">{{ item.state_val }}</span>
			</p>
			<div class="left">
				<p class="name ell-2">{{ item.name }}</p>
				<div class="intro">
					<p class="ell-2">{{ item.intro }}</p>
				</div>
			</div>
			<div class="right ">
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
		},
		methods: {
			toDetail(params) {
				this.$router.push({ path: '/activity/detail/' + params.id  })
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	.item-list {
		padding: .3rem;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		overflow: hidden;
		height: 3.0rem;
		margin-bottom: 10px;
	}
	.list-top{
		line-height: 24px;
		color: #605f5f;
		.list-tip{
			margin-left: .2rem;
			padding: 1px 4px;
			color: #fff;
		}
		.list-tip-red{
			background: #de574f;
		}
		.list-tip-g{
			background: #b8b7b7;
		}
		.list-tip-blur{
			background: #5f96cb;
		}
		.list-tip-green{
			background: #62d2a6;
		}
	}
	.left{
		float: left;
		width: 4.4rem;
		overflow: hidden;
		height: 1.8rem;
		display: flex;
		justify-content:space-between;
		flex-direction: column;
		.name{
			font-size: 14px;
			line-height: 20px;
		}
		.intro{
		}
	}
	.right{
		float: right;
		img{
			margin-top: .2rem;
			width: 2.21rem;
			max-height: 1.46rem;
			height: 1.46rem;
		}
	}
</style>
