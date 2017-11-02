<template>
  <div class="container">
    <page-header title="Three"/>
    <div id="Three" class="content">
      <h1>{{ oneText }}</h1>
      <a href="javascript:;">{{contactMe}}</a>
      <router-link :to="{path: '/ui'}" v-waves>
        <i class="icon-integral color3"/>
        <p>ui</p>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Three',
  components: {
  },
  data () {
    return {
      oneText: '我是第三个组件页面',
      contactMe: 'QQ-1079832313'
    }
  }
}
</script>

