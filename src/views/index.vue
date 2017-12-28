<template>
  <div class="hello">
    <c-title :text="title"></c-title>
    <p class="welcome">功夫财经</p>
    <div v-html="content"></div>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import { getActivityList } from '@/api/activity';
  import cTitle from 'components/title';

  export default {
    data () {
      return {
        title: 'Hello Vue!',
        content: ''
      }
    },
    methods: {
      async getContent () {
        const response = await getActivityList({}).then(res => {
					console.log(res);
				});
      }
    },
    mounted () {
      this.$store.commit('message', '欢迎使用 vue！');
      this.getContent();
    },

    components: {cTitle}
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
