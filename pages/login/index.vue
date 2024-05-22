<template>
  <tui-form ref="LoginFormRef" :showMessage="true" :model="loginModel" padding="20px">
    <tui-form-item asterisk :label="$t('login.field.username')" prop="username">
      <tui-input padding="0" v-model="loginModel.username" :borderBottom="false"
        :placeholder="$t('login.message.placeholder.username')"></tui-input>
    </tui-form-item>
    <tui-form-item asterisk :label="$t('login.field.password')" prop="password">
      <tui-input padding="0" v-model="loginModel.password" :borderBottom="false"
        :placeholder="$t('login.message.placeholder.password')"></tui-input>
    </tui-form-item>
    <tui-button @click="handleBtnClick">{{ $t('login.button.login') }}</tui-button>
  </tui-form>

</template>

<script>
const rules = [{
  name: 'username',
  rule: ['required'],
  msg: ['请输入']
}]

export default {
  name: "Login",
  data() {
    return {
      loginModel: {}
    }
  },
  methods: {
    handleBtnClick() {
      // this.$Router.push('/home')
      // this.$i18n.locale = 'en'

      this.$refs.LoginFormRef.validate(this.loginModel, rules, true)
        .then(res => {
          // console.log(res);
          const { isPass } = res

          if (isPass) {
            this.$Router.push({ name: 'workspace' })
          }
        })
    }
  }
}
</script>

<style scoped lang="scss"></style>