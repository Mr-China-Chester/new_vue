<template>
  <div class="HelloWorld">
    <div class="loading" v-if="loading">
      Loading....
    </div>
    <div class="posts" v-else>
      <ul>
        <a href="#">首页</a>
        <li v-for="post in posts">
          <router-link :to="{ name: 'user', params: {name: post.author.loginname } }" :title="post.author_id">
            <img :src="post.author.avatar_url" :title="post.author.loginname"/>
          </router-link>
          <span>
            {{ post.reply_count }}/{{ post.visit_count }}
          </span>
          <router-link :to="{ name: 'content', params: {id: post.id,name:post.author.loginname} }" :title="post.title">
            {{ post.title }}
          </router-link>
          <span class="last_reply">
						{{ post.last_reply_at | formatDate}}
					</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
	      posts:{},
	      loading:false
	   }
  },
  // filters: {
  //       timeStyle(createTime) {
  //           return String(createTime).match(/.{10}/)[0];
  //       }
  // },
  methods: {
     getData(){//定义一个函数
       this.$http({
         url: 'https://cnodejs.org/api/v1/topics',//通过cnode网站给的api来获取数据
         method: 'get',
         params: {
             page: 1,
             limit:20,
         }
       })
       .then( (response) => { //请求的回调请求 Promise值
         if( response.data.success === true ){ //请求返回值
           this.posts = response.data.data;
           this.loading = false;
         }
       })
       .catch(function (error) { //请求失败 如果抛出异常了（代码出错了）
         console.log(error);
       });
     }
   },
   beforeMount() {
     this.loading = true;
     this.getData();//调用上面的函数
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HelloWorld .posts {
		background-color: white;
		padding: 0.5rem;
		margin: 0.5rem 3rem;
	}
	.HelloWorld .posts li {
		list-style: none;
		margin-bottom: 14px;
		border-bottom: 1px solid #E7E7E7;
		line-height: 30px;
	}
	.HelloWorld .posts ul li img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.HelloWorld .posts li span {
		display: inline-block;
		text-align: center;
		width: 70px;
		font-size: 12px;
		margin: 0 10px;
	}
	.HelloWorld .posts a {
		text-decoration: none;
		color: inherit;
	    -o-text-overflow: ellipsis;
	    white-space: nowrap;
	    display: inline-block;
	    vertical-align: middle;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    max-width: 70%;
	}
	.HelloWorld .posts a:visited {
		color:#858585;
	}
	.HelloWorld .posts .last_reply {
		float: right;
   		font-size: 0.7rem;
   	    margin-top: 0.3rem;
	}
</style>
