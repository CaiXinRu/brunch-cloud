<template>
  <Loadingpage v-if="isLoading"></Loadingpage>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-48">
      <div class="co-stepbar">
        <div class="co-step">
          <div class="cs-num">1</div>
          <div class="cs-text">購物訂單</div>
          <div class="cs-bar"></div>
        </div>
        <div class="co-step">
          <div class="cs-num">2</div>
          <div class="cs-text">填寫資料</div>
          <div class="cs-bar"></div>
        </div>
        <div class="co-step">
          <div class="cs-num">3</div>
          <div class="cs-text">確認訂單</div>
          <div class="cs-bar"></div>
        </div>
        <div class="co-step">
          <div class="cs-num cs-lighter">4</div>
          <div class="cs-text">完成付款</div>
          <div class="cs-bar cs-lighter"></div>
        </div>
      </div>
      <form style="width: 100%">
        <table style="width: 100%" class="cf-table">
          <thead>
            <tr class="cf-head">
              <th style="width: 40%">品名</th>
              <!-- <th style="width: 25%">備註</th> -->
              <th style="width: 30%">單價</th>
              <th style="width: 30%">數量</th>
              <!-- <th style="width: 30%">小計</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              style="height: 100px"
              class="color--dark-brown cf-body"
              v-for="item in order.products"
              :key="item.id"
            >
              <td style="width: 40%; border-right: 3px solid #fac664">{{ item.product.title }}</td>
              <!-- <td style="width: 30%">{{ item.note }}</td> -->
              <td style="width: 30%; border-right: 3px solid #fac664">
                NT${{ $filters.currency(item.final_total) }}
              </td>
              <td style="width: 30%">{{ item.qty }} 份</td>
              <!-- <td style="width: 30%">
                {{ item.priceUnit }}{{ item.price * 0.8 * item.count }}
              </td> -->
            </tr>
          </tbody>
          <tfoot>
            <tr class="cf-total">
              <td style="width: 40%; border-right: 3px solid #ffff">總計</td>
              <td style="width: 60%">NT${{ $filters.currency(Math.floor(order.total)) }}</td>
            </tr>
          </tfoot>
        </table>
        <table style="width: 100%" class="cf-table2">
          <thead>
            <tr class="cf-head">
              <th style="width: 100%">顧客資料</th>
            </tr>
          </thead>
          <tbody>
            <tr style="height: 50px" class="cf-body">
              <td
                style="width: 40%; border-right: 3px solid #fac664"
                class="color--dark-brown"
              >
                收件人姓名
              </td>
              <td style="width: 60%" class="color--black">{{ order.user.name }}</td>
            </tr>
            <tr style="height: 50px" class="cf-body">
              <td
                style="width: 40%; border-right: 3px solid #fac664"
                class="color--dark-brown"
              >
                聯絡電話
              </td>
              <td style="width: 60%" class="color--black">{{ order.user.tel }}</td>
            </tr>
            <tr style="height: 50px" class="cf-body">
              <td
                style="width: 40%; border-right: 3px solid #fac664"
                class="color--dark-brown"
              >
                Email
              </td>
              <td style="width: 60%" class="color--black">{{ order.user.email }}</td>
            </tr>
            <tr style="height: 50px" class="cf-body">
              <td
                style="width: 40%; border-right: 3px solid #fac664"
                class="color--dark-brown"
              >
                收件地址
              </td>
              <td style="width: 60%" class="color--black">{{ order.user.address }}</td>
            </tr>
            <tr style="height: 50px" class="cf-body">
              <td
                style="width: 40%; border-right: 3px solid #fac664"
                class="color--dark-brown"
              >
                付款狀態
              </td>
              <td style="width: 60%" class="color--black">
                <span v-if="!order.is_paid" class="color--negative">尚未付款</span>
                <span v-else class="color--positive">付款完成</span>
              </td>
            </tr>
            <!-- <tr style="height: 50px" class="cf-body">
          <td
            style="width: 40%; border-right: 3px solid #fac664"
            class="color--dark-brown"
          >
            支付方式
          </td>
          <td style="width: 60%" class="color--black">？？</td>
        </tr> -->
            <!-- <tr style="height: 50px" class="cf-body">
          <td
            style="width: 40%; border-right: 3px solid #fac664"
            class="color--dark-brown"
          >
            預計收件日期與時間
          </td>
          <td style="width: 60%" class="color--black">？？</td>
        </tr> -->
          </tbody>
        </table>
        <div class="cf-submit-container">
            <button
              class="cf-submit"
              style="width: 30%"
              type="submit"
            >
              提交訂單
            </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LoadingPage from '@/components/LodingPage.vue'

export default {
  data: () => {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LoadingPage
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        console.log(res)
        if (res.data.success) {
          this.order = res.data.order
        }
        this.isLoading = false
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    // console.log(this.orderId)
    this.getOrder()
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.co-stepbar {
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.co-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cs-num {
  width: 40px;
  height: 40px;
  color: #fef7e9;
  background-color: #fac664;
  border-radius: 40px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
}
.cs-text {
  color: #644536;
  font-size: 20px;
  margin: 8px 0;
}
.cs-bar {
  width: 150px;
  height: 6px;
  background-color: #fac664;
  margin: 8px 0;
  border-radius: 5px;
}
.cs-lighter {
  opacity: 50%;
}
.cf-table {
  margin: 48px 0 48px 0;
}
tr {
  display: flex;
  flex-direction: row;
  /* padding: 4px 0; */
  text-align: center;
  align-items: center;
}
.cf-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
}
.cf-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
  border-right: 3px solid #fac664;
  border-left: 3px solid #fac664;
}
.cf-total {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
  padding: 8px 0;
}
.cf-table2 {
  margin: 0 0 48px 0;
}
.cf-submit-container{
  display: flex;
  justify-content: flex-end;
  margin: 0 0 56px 0;
}
.cf-submit {
  display: flex;
  height: 50px;
  /* background-color: #fac664;
  color: #644536; */
  background-color: var(--color--primary);
  color: var(--color--dark-brown);
  display: flex;
  align-items: center;
  justify-content: center;
}
.cf-submit:hover {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
}
</style>
