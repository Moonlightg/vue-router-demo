<template>
  <div id="Two">
    <page-header :showBackBtn="false" title="消息中心"/>
    <div class="content">
      <h1>{{ oneText }}</h1>
      <a href="javascript:;">{{contactMe}}</a>
    </div>
    <page-footer active-tab="消息"/>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Two',
  data () {
    return {
      oneText: '我是第二个组件页面',
      contactMe: 'QQ-1079832313'
    }
  }
}
</script>
