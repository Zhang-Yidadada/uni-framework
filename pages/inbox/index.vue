<template>
  <view class="inbox-wrapper">
    <tui-searchbar :showLabel="false" searchColor="#00a9e0" backgroundColor="#fff"
      inputBgColor="#ededed"></tui-searchbar>
    <view class="inbox-list">
      <view v-for="i in 50" :key="i">demo</view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'Inbox'
}
</script>
<style lang="scss" scoped>
.inbox-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  .inbox-list {
    flex: 1;
    height: 0;
    overflow-y: auto;

    // background: #ddd;
  }
}
</style>