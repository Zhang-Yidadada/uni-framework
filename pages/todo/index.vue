<template>
  <tui-tabs :tabs="tabs" scale="1.1" :currentTab="currentTab" @change="change"></tui-tabs>
</template>
<script>
export default {
  name: 'Todo',
  data() {
    return {
      currentTab: 0,
      tabs: [{
        name: "待我审批"
      }, {
        name: "我已审批"
      }],
    }
  },
  methods: {
    //切换tab，逻辑请自行处理
    change(e) {
      this.currentTab = e.index
    }
  }
}
</script>