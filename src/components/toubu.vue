<template>
  <div class="toubu">
    <router-link :to="{name:'HelloWorld'}">
  		<img src="../assets/cnodejs_light.svg"/>
  	</router-link>
    <span><a href="#">关于(@-_-@!)</a></span>
  </div>
</template>

<script>
export default {
  name: 'toubu',
  data () {
  return {
  }
 }
}
</script>

<style lang="css">
.toubu {
		background:#5a5555 ;
		height: 50px;
	}
	a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	 span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style>
