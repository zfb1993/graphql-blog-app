<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">用户注册</h2>

                <form method="POST" @submit.prevent="signup">

                    <div class="field">
                        <label class="label">手机号</label>

                        <p class="control">
                            <input
                                    type="text"
                                    class="input"
                                    v-model="mobile">
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">密码</label>

                        <p class="control">
                            <input
                                    type="password"
                                    class="input"
                                    v-model="password">
                        </p>
                    </div>

                    <p class="control">
                        <button class="button is-primary is-fullwidth is-uppercase">注册</button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
  import { SIGNUP_MUTATION,LOGIN_MUTATION } from '@/graphql'

  export default {
    name: 'SignUp',
    data () {
      return {
        mobile: '18137133979',
        password: '123456'
      }
    },
    methods: {
      signup () {
        this.$apollo
          .mutate({
            mutation: LOGIN_MUTATION,
            variables: {
              mobile: this.mobile,
              // email: this.email,
              password: this.password
            }
          })
          .then(response => {
            // 重定向到登录页面
            console.log(response)
            // this.$router.replace('/login')
          })
      }
    }
  }
</script>