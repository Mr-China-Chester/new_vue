<template>
  <div class="ceshi">
<div class="ceshis">
  文章内容
</div>
<div class="loading" v-if="loading">
    Loading...
</div>
<div class="ceshiceshi" v-else>
  <!-- <div class="ceshiceshi">
    sadsadsa
  </div>
  <div class="ceshiceshi">
    sdadsadsadsa
  </div> -->
  <ul>
				<a href="#">首页</a>
				<li v-for="post in ceshiceshi">
				</li>
			</ul>
</div>
  </div>
</template>

<script>
export default {
  name:'ceshi',
  data(){
    return{
      ceshiceshi:{},
      loading:false
    }
  }

}
</script>

<style lang="css">
.ceshi{
  color:#000;
  font-size: 20px;
}
.ceshiceshi{
  color: #888;
  background-color: #000;
}
</style>
