<template>
  <div class="content" v-if="showContent">
		<div class="banner">
			<img :src="dataInfo.banner">
		</div>
		<div class="header vux-1px-b">
			<div class="name">
				{{dataInfo.name}}
			</div>
			<div class="info">
				<span class="price">
					¥ {{dataInfo.price_info}}
				</span>
				<span class="count">
					剩余: {{dataInfo.page_count}}个
				</span>
			</div>
		</div>
		<div class="detail" v-html="dataInfo.detail"></div>
		<footer class="fixed-bottom apply-form" @click="toFormItem">
			<p>
        点此报名
			</p>
    </footer>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import { getActivityDetail } from '@/api/activity';

  export default {
    data () {
      return {
				id:this.$route.params.id,
				showContent: false,
				dataInfo:{}
      }
    },
    methods: {
      async fetchDate () {
        const response = await getActivityDetail({id:this.id}).then(res => {
					console.log(JSON.stringify(res))
					if (!res.status) {
						this.showContent = true
						this.dataInfo = res
					}
				});
			},
			toFormItem () {
				this.$router.push({ path: '/activity/items/' + this.id  })
			}
    },
    mounted () {
      this.fetchDate();
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  .content{
		.apply-form{
			color: #ffffff;
			font-size: 14px;
		}
		.banner{
			height: 4.8rem !important;
      img{
        width: 100%;
        height: 100%;
      }
		}
		.header{
      margin: 14px .32rem;
      .name{
        font-size: 16px;
        line-height: 26px;
      }
      .info{
        color: #ca915c;
        line-height: 50px;
        .price{
          font-size:20px;
        }
        .count{
          display: block;
          margin-right: 0;
          margin-top: 15px;
          width: auto;
          line-height: 21px;
          box-sizing: border-box;
          border-radius: 3px;
          border: 1px solid #ca915c;
          padding: 0 5px;
          float: right;
        }
      }
    }
    .detail{
      width: auto;
      padding: .2rem .32rem 100px;
      background-color: #fff;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
	}
</style>
