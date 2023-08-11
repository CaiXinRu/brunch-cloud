<template>
  <LoadingPage v-if="isLoading"/>
  <div class="bg-color--white">
    <div class="container">
      <div class="login-row login-column-sm">
        <router-link to="/" class="login-element-left">
          <img src="@/assets/img/logo/logo+word--light-brown_ver.png" alt="雲端早午安"/>
        </router-link>
        <div class="login-element-right">
          <table style="width: 100%">
            <thead>
              <tr class="login-head">
                <th>後台登入</th>
              </tr>
            </thead>
            <tbody>
              <tr class="login-body">
                <td style="width: 100%">
                  <form class="login-form" @submit.prevent="signIn">
                    <div style="width: 90%" class="u-mb-24">
                      <label for="email" class="login-label">帳號信箱</label>
                      <input
                        class="login-input"
                        style="width: 100%"
                        type="text"
                        id="email"
                        name="email"
                        autocomplete="off"
                        placeholder="請輸入電子信箱..."
                        required
                        autofocus
                        v-model="user.username"
                      />
                    </div>
                    <div style="width: 90%" class="u-mb-48">
                      <label for="password" class="login-label">密碼</label>
                      <input
                        class="login-input"
                        style="width: 100%"
                        type="password"
                        id="password"
                        name="password"
                        autocomplete="off"
                        placeholder="請輸入密碼..."
                        required
                        v-model="user.password"
                      />
                    </div>
                    <div class="login-submit">
                      <button class="login-btn" type="submit">登入</button>
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingPage from '@/components/LodingPage.vue'
export default {
  data () {
    return {
      isLoading: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    LoadingPage
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.isLoading = true
      this.$http
        .post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token}; expired=${new Date(expired)}`
            this.$router.push('dashboard/products')
          }
          this.isLoading = false
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 120px 0 120px 0;
}
.login-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.login-element-left {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.login-element-left img {
  width: 500px;
}
.login-element-right {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.login-head {
  color: #644536;
  background-color: #fac664;
  border-radius: 10px;
  box-shadow: 8px 8px 0px #644536;
  font-size: 18px;
  line-height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.login-body {
  display: flex;
  padding: 48px 0 16px 0;
  text-align: start;
  align-items: flex-start;

  font-size: 20px;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-label {
  color: #644536;
  margin-bottom: 8px;
  display: inline-block;
}
.login-input {
  height: 50px;
  background-color: #ffffff;
  border: 2px solid #644536;
  display: flex;
  align-items: center;
  color: #272727;
  padding-left: 16px;
}
.login-input:focus-within {
  border: 3px solid #fac664;
}
.login-submit {
  display: flex;
  width: 90%;
  justify-content: flex-end;
}
.login-btn {
  height: 40px;
  padding: 20px 60px;
  background-color: var(--color--primary);
  border-radius: 8px;
  box-shadow: 8px 8px 0px #644536;
  border: 3px solid #644536;
  color: #644536;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  z-index: 1;
}
button {
  cursor: pointer;
}
.login-btn:hover {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  border: 3px solid var(--color--secondary);
  box-shadow: 8px 8px 0px var(--color--primary);
}

/* RWD */

@media (max-width: 991px){
  .container{
    padding: 0;
  }
  .login-column-sm{
    flex-direction: column;
  }
  .login-element-left{
    width: 100%;
  }
  .login-element-left img{
    width: 240px;
  }
  .login-element-right{
    width: 100%;
  }
}
</style>
