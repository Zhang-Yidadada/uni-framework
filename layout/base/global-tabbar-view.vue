<template>
  <view class="global-tabbar-wrapper">
    <tui-navigation-bar title="Inbox" :isOpacity="false" color="#fff" backgroundColor="#00a9e0" :isFixed="false">
    </tui-navigation-bar>
    <view class="tabbar-main-container">
      <simple-router-view></simple-router-view>
    </view>
    <tui-tabbar :current="current" backdropFilter backgroundColor="#fff" :tabBar="tabBar" color="#777"
      selectedColor="#00a9e0" @click="tabbarSwitch" :isFixed="false"></tui-tabbar>
  </view>
</template>

<script>
const routeName = ['workspace', 'inbox', 'setting']
export default {
  name: 'GlobalTabbar',
  data() {
    return {
      current: 0,
      tabBar: [
        {
          text: this.$t('system.tabbar.workspace'),
          iconPath: '/static/images/tabbar/workspace.png',
          selectedIconPath: '/static/images/tabbar/workspace.png'
        },
        {
          text: this.$t('system.tabbar.inbox'),
          iconPath: '/static/images/tabbar/inbox.png',
          selectedIconPath: '/static/images/tabbar/inbox.png'
        },
        {
          text: this.$t('system.tabbar.setting'),
          iconPath: '/static/images/tabbar/setting.png',
          selectedIconPath: '/static/images/tabbar/setting.png',
        }
      ]
    }
  },
  onLoad() {
    this.current = routeName.indexOf(this.$Route.value.name)
  },
  watch: {
    '$Route.value.name'(val) {
      this.current = routeName.indexOf(val)
    }
  },
  methods: {
    tabbarSwitch(e) {
      this.$Router.replace({ name: routeName[e.index] })

      this.$nextTick(_ => {
        this.current = e.index
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.global-tabbar-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
  }

  .tabbar-main-container {
    flex: 1;
    height: 0;
    overflow-y: auto;
  }
}
</style>