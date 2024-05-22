<template>
  <view class="setting-wrapper">
    <view class="userinfo-container">
      <image src="/static/logo.png" style="width: 80px; height: 80px; border-radius: 50px;" mode="aspectFit"></image>
      <view class="user_name">Meng Zhang</view>
      <view class="user_post">Frontend Engineer</view>
    </view>

    <view>
      <tui-list-cell :unlined="true" marginTop="20" arrow @click="handleLogoutClick">退出登录</tui-list-cell>
      <tui-list-cell :unlined="true" marginTop="20" arrow @click="handleLogoutClick">退出登录</tui-list-cell>
      <tui-list-cell :unlined="true" marginTop="20" arrow @click="handleLogoutClick">退出登录</tui-list-cell>
      <tui-list-cell :unlined="true" marginTop="20" arrow @click="handleLogoutClick">退出登录</tui-list-cell>
      <tui-list-cell :unlined="true" marginTop="20" arrow @click="handleLogoutClick">退出登录</tui-list-cell>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Setting',
  data() {
    return {
      title: 'setting'
    }
  },
  onLoad() {

  },
  methods: {
    handleLogoutClick() {
      this.$Router.replace({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  .userinfo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 180px;
    background: #00a9e0;

    .user_name {
      color: #fff;
      font-weight: bold;
      font-size: 40rpx;
      margin-top: 20px;
    }

    .user_post {
      color: #fff;
      /* margin-top: 4px; */
    }
  }
}
</style>
