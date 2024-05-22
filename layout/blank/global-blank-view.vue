<template>
  <view class="global-blank-view">
    <tui-navigation-bar splitLine :title="pageTitle" :isOpacity="false" color="#fff" backgroundColor="#00a9e0"
      :isFixed="false">
      <view class="tui-header-icon">
        <tui-icon name="arrowleft" color="#fff" @click="handleBackClick"></tui-icon>
      </view>
    </tui-navigation-bar>
    <view class="blank-main-container">
      <simple-router-view></simple-router-view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'GlobalBlankView',
  data() {
    return {
    }
  },
  computed: {
    pageTitle() {
      return this.$Route.value.meta?.title
    }
  },
  methods: {
    handleBackClick() {
      uni.navigateBack()
    }
  },
}
</script>

<style lang="scss" scoped>
.tui-header-icon {
  display: flex;
  align-items: center;
  height: 44px;

  position: fixed;
  top: var(--status-bar-height);
}

.global-blank-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;


  .blank-main-container {
    flex: 1;
    height: 0;
    overflow-y: auto;
  }
}
</style>