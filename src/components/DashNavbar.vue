<template>
  <body>
    <div style="height: max-content" class="bg-color--secondary">
      <div class="container">
        <router-link to="/" class="dnb-img"
          ><img style="height: 120px" src="@/assets/img/logo/logo+word--light-brown_ver.png" alt="雲端早午安"
        /></router-link>
        <div class="list-bar">
          <ul class="list">
            <li>
              <router-link
                to="/dashboard/products"
                class="main-font"
                date-link-alt="PRODUCTS"
                ><span>產品列表</span></router-link
              >
            </li>
            <li><p class="color--light-brown main-font-1">｜</p></li>
            <li>
              <router-link to="/dashboard/orders" class="main-font" date-link-alt="ORDERLIST"
                ><span>訂單列表</span></router-link
              >
            </li>
            <li><p class="color--light-brown main-font-1">｜</p></li>
            <li>
              <router-link
                to="/dashboard/coupons"
                class="main-font"
                date-link-alt="COUPONS"
                ><span>優惠券別</span></router-link
              >
            </li>
            <li><p class="color--light-brown main-font-1">｜</p></li>
            <li>
              <a
                class="main-font"
                date-link-alt="LOGOUT"
                @click.prevent="logout"
                ><span>登出</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'DashNavbar',
  data: () => {
    return {}
  },
  components: {},
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dnb-img {
  display: flex;
  align-content: center;
  margin-right: 28px;
  cursor: pointer;
}
.list-bar {
  display: flex;
}
.list {
  list-style-type: none;
}
.list > li {
  float: left;
}
.main-font-1 {
  font-size: 24px;
  margin: 0 16px;
  font-weight: 500;
  display: block;
  overflow: hidden;
}
.main-font {
  font-size: 24px;
  padding: 0 32px;
  font-weight: 500;
  display: block;
  overflow: hidden;
  color: var(--color--primary);
}
.main-font span {
  color: var(--color--light-brown);
  display: block;
  transition: 1s;
}
.main-font:hover span {
  transform: translateY(-100%);
}
.main-font:before {
  position: absolute;
  content: attr(date-link-alt);
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  font-size: 16px;
  opacity: 0;
  transition: 1s;
}
.main-font:hover:before {
  top: 0;
  opacity: 1;
}
</style>
