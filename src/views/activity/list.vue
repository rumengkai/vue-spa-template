<template>
  <div class="content" v-if="showContent">
    <activity-list :list="dataInfo.items"></activity-list>
    <activity-list :list="dataInfo.items"></activity-list>
    <activity-list :list="dataInfo.items"></activity-list>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import { getActivityList } from '@/api/activity';
  import ActivityList from 'components/Activity/List';

  export default {
    data () {
      return {
				showContent: false,
        dataInfo: {},
      }
		},
    components: {ActivityList},
    methods: {
      async fetchDate () {
        const response = await getActivityList({}).then(res => {
					if (!res.status) {
						this.showContent = true
						this.dataInfo = res
					}
				});
      }
    },
    mounted () {
      this.fetchDate();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.content{
	height: 100%;
}
</style>
