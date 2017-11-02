<template>
  <!-- header -->
  <div class="navbar">
    <nav>
      <!--左侧图标-->
      <a class="return" v-if="showBackBtn" @click="back">
        <i class="icon-return" />
      </a>
      <!--标题-->
      <h1 v-if="title" class="nav_title"><p>{{title}}</p></h1>
      <slot v-if="!title" name="title"/>
      <!--右侧图标-->
      <div class="nav_r">
        <slot v-if="title"/>
        <slot name="right"/>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String
    },
    showBackBtn: {
      type: Boolean,
      default: true
    },
    backUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
  },
  methods: {
    back: function () {
      this.$router.go(-1)
      this.$router.isBack = true
      // this.setIsRouteBack(true)
    }
  }
}
</script>
