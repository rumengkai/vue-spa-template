<template>
  <div class="content" v-if="showContent">
		<div v-for="(item,index) in dataInfo.items" :key="index">
			<li v-if="index>=pn*dataInfo.page_count&&index<(pn+1)*dataInfo.page_count">
				<div v-if="item.type==2">
					<form-input :data="item"></form-input>
				</div>
				{{index}}{{item.name}}
			</li>
		</div>
		<footer class="fixed-bottom" v-if="!submit" @click="nextPage()">
			<p>下一页</p>
		</footer>
		<footer class="fixed-bottom" v-else @click="submitForm()">
			<p>提交</p>
		</footer>
  </div>
</template>

<script>
	import Vue from 'vue'
	import { CellGroup, Field , Checkbox, CheckboxGroup} from 'vant';
  import {mapState} from 'vuex';
  import { getActivityItems } from '@/api/activity'
  import FormInput from '@/components/Form/Input'
	Vue.use(Field)
	Vue.use(Checkbox);
	Vue.use(CellGroup);
	Vue.use(CheckboxGroup);
  export default {
    data () {
      return {
				id:this.$route.params.id,
				showContent: false,
				dataInfo: {},
				pn: 0,
				submit: false
      }
    },
    methods: {
      async fetchDate () {
        const response = await getActivityItems({target_id:this.id}).then(res => {
					console.log(JSON.stringify(res));
					if (!res.status) {
						this.showContent = true
						this.dataInfo = res
						this.submit = this.pn+1 >= Math.ceil(this.dataInfo.items.length/this.dataInfo.page_count)
					}
				});
			},
			nextPage () {
				this.pn++
				if (this.pn+1 >= Math.ceil(this.dataInfo.items.length/this.dataInfo.page_count)) {
					this.submit = true
				}
			},
			submitForm () {
				console.log('提交');
			}
    },
    mounted () {
      this.fetchDate();
    },

    components: {Field,FormInput}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  h1 {
    color: #42b983;
  }

  .logo {
    width: 100px;
    height: 100px;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>
