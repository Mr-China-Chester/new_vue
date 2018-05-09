<template lang="html">
<div class="SideBar">
  <div class="loading" v-if="loading">
    Lading...
  </div>
  <div class="autherinfo" v-else>
    <div class="authersummay">
      <p>作者 文章的作者简介</p>
      <router-link :to="{ name: 'user', params: {name: userinfo.loginname} }">
        <img :src="userinfo.avatar_url"/>
      </router-link>
      <router-link :to="{ name: 'user', params: {name: userinfo.loginname} } " :title="userinfo.loginname">
        {{userinfo.loginname}}
      </router-link>
      <section>
					积分：{{userinfo.score}}
			</section>
    </div>
    <div class="recent_topics">
      <p>作者最近主题</p>
      <ul>
        <li v-for="list in topicsLimitBy5">
          <router-link :to="{ name: 'content', params: {id: list.id,name:list.author.loginname} }":title="list.title">
            {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <p>作者最近回复</p>
      <ul>
        <li v-for="list in userinfo.recent_replies">
          <router-link :to="{ name: 'content', params: {id: list.id,name:list.author.loginname} }" :title="list.title">
            {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name:'SideBar',
  data () {
    return {
      userinfo:{},
      loading:false
    }
  },
  methods:{
    getData(){
    this.$http({//通过axios 跨域请求数据
	            url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`,
	            method: 'get',
	        })
			.then( (response) => { //请求成功执行
			  	if( response.data.success === true ){
			  		this.userinfo = response.data.data;
			  		this.loading = false
			  	}
			})
			.catch(function (error) {//请求失败执行
			  	console.log(error);
			});
    }
  },
  beforeMount() { //钩子函数 执行
	  this.loading = true
    this.getData();
  },
  computed:{ //计算机属性 会因来源数据变化而变化数据
	   topicsLimitBy5(){//topicsLimitBy5绑定
	  		return this.userinfo.recent_topics.slice(0,5);
	   }
	},
  watch:{ //监听$route变化  路由与目标路由的变化关系，动态设置过渡效果
		$route(){
			this.getData();
		}
	}
}
</script>

<style lang="css">
.SideBar {
  float: right;
  width: 24%;
  box-sizing: border-box;
    margin-right: 3%;
    padding: 0.8rem 0.4rem;
}
.SideBar .autherinfo {
  background: white;
}
.SideBar > div p {
  padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
}
.SideBar img {
    width: 3.5rem;
    display: inline-block;
    padding: 0 0 0 6px;
    border-radius: 3px;
}
.SideBar a{
  text-decoration: none;
  color: #a8a3a3;
}
.SideBar .authersummay  > a {
  display: inline-block;
    padding: 12px 0 0 6px;
    vertical-align: top;
}
.SideBar .authersummay  > a[title] {
  margin-top: 20px;
      margin-left: 2px;
}
.SideBar section {
  padding: 12px 0 12px 12px;
  font-size: 0.75rem;
}
.SideBar li {
  list-style: none;
}
.recent_topics,.recent_replies {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
}
.recent_topics li,
.recent_replies li {
  padding: 4px 0 0 12px;
  color: #C0CCDA;
  white-space: nowrap;
}
.recent_topics ul,
.recent_replies ul {
  padding: 10px 0 10px 0;
}
.recent_topics li a,
.recent_replies li a {
  text-overflow: ellipsis;
  overflow: hidden;
    max-width: 95%;
    display: inline-block;
}
</style>
