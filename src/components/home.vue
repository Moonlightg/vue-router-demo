<template>
  <div class="container">
    <page-header :showBackBtn="false" title="首页"/>
    <div id="Home" class="content">
      <h1>我是首页</h1>
      <ul>
        <li><router-link to="/one">点我跳转到第一页</router-link></li>
        <li><router-link to="/two">点我跳转到第二页</router-link></li>
      </ul>
      <page-footer active-tab="首页"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
