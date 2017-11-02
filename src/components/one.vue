<template>
  <div class="container">
    <page-header :showBackBtn="false" title="应用"/>
    <div id="One" class="content">
      <h1>{{ oneText }}</h1>
      <div class="h20"/>
      <a href="javascript:;">{{contactMe}}</a>
      <router-link :to="{path: '/three'}" v-waves>
        <i class="icon-integral color3"/>
        <span>点我跳转</span>
      </router-link>
    </div>
    <page-footer active-tab="应用"/>
  </div>
</template>

<script>

export default {
  name: 'One',
  components: {
  },
  data () {
    return {
      oneText: '我是第一个组件页面',
      contactMe: 'QQ-1079832313'
    }
  }
}
</script>

