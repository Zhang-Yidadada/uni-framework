<template>
  <view>
    <view>待办列表</view>

    <tui-grid unlined>
      <block v-for="i in 4" :key="i">
        <tui-grid-item backgroundColor="#efefef" @click="handleMenuClick" :cell="4" :border="false" :bottomLine="false">
          <view style="text-align: center;">demo</view>
        </tui-grid-item>
      </block>
    </tui-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'workspace'
    }
  },
  onLoad() {

  },
  methods: {
    handleMenuClick() {
      this.$Router.push({ name: 'todo' })
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
