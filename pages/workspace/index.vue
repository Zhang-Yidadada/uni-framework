<template>
  <view class="workspace-wrapper">
    <tui-grid unlined style="margin-top: 20px;">
      <block v-for="(item, index) in menu" :key="index">
        <tui-grid-item backgroundColor="#fff" @click="handleMenuClick" :cell="4" :border="false" :bottomLine="false">
          <view class="menu-item">
            <image class="menu-item_icon" :src="`/static/images/menu/${item.icon}.png`" mode="aspectFit"></image>
            <view class="menu-item_name">{{ item.label }}</view>
          </view>
        </tui-grid-item>
      </block>
    </tui-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      menu: [{
        label: "待办",
        icon: 'biaodan'
      }, {
        label: '公告',
        icon: 'caidan'
      }, {
        label: '报表',
        icon: 'daiban'
      }, {
        label: '设置',
        icon: 'daifukuan'
      }]
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

<style scoped lang="scss">
.workspace-wrapper {
  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &_icon {
      width: 60rpx;
      height: 60rpx;
    }

    &_name {
      margin-top: 16rpx;
      font-size: 24rpx;
    }
  }
}
</style>
