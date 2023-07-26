<template>
  <Lodingpage v-if="isLoading"></Lodingpage>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-48">
      <div class="co-stepbar">
        <div class="co-step">
          <div class="cs-num">1</div>
          <div class="cs-text">購物訂單</div>
          <div class="cs-bar"></div>
        </div>
        <div class="co-step">
          <div class="cs-num cs-lighter">2</div>
          <div class="cs-text">填寫資料</div>
          <div class="cs-bar cs-lighter"></div>
        </div>
        <div class="co-step">
          <div class="cs-num cs-lighter">3</div>
          <div class="cs-text">確認訂單</div>
          <div class="cs-bar cs-lighter"></div>
        </div>
        <div class="co-step">
          <div class="cs-num cs-lighter">4</div>
          <div class="cs-text">完成付款</div>
          <div class="cs-bar cs-lighter"></div>
        </div>
        <div class="co-step-sm">
          <div class="cs-num">1</div>
          <div class="cs-text">購物訂單</div>
          <div class="cs-bar"></div>
        </div>
      </div>
      <table style="width: 100%" class="cl-table">
        <thead>
          <tr class="cl-head">
            <th style="width: 25%">品名</th>
            <th style="width: 20%">單價</th>
            <th style="width: 25%">數量</th>
            <th style="width: 20%">小計</th>
            <th style="width: 10%"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            style="height: 100px"
            class="color--dark-brown cl-body"
            v-for="item in cart.carts"
            :key="item.id"
          >
            <td style="width: 25%">
              {{ item.product.title }}
              <div class="color--positive" v-if="item.coupon">
                （已套用優惠券）
              </div>
            </td>
            <td style="width: 20%">
              <div v-if="item.coupon">
                <span class="color--positive">下殺折扣價：</span>NT${{
                  (item.coupon.percent * item.product.price) / 100
                }}
              </div>
              <div v-else>特價 NT${{ item.product.price }}</div>
            </td>
            <td style="width: 25%" class="cl-number">
              <div>
                <font-awesome-icon
                  icon="fa-regular fa-square-plus"
                  :class="{ disabled: status.loadingItem === item.id }"
                  @click="plusCount(item)"
                  class="cl-count"
                />
              </div>
              <div class="u-ml-48 u-mr-48 cl-count-num">{{ item.qty }}</div>
              <div>
                <font-awesome-icon
                  icon="fa-regular fa-square-minus"
                  :class="{ disabled: status.loadingItem === item.id }"
                  @click="minusCount(item)"
                  class="cl-count"
                />
              </div>
            </td>
            <td style="width: 20%">
              <div v-if="item.final_total !== item.total">
                <span class="color--positive">下殺折扣價：</span>NT${{
                  $filters.currency(item.final_total)
                }}
              </div>
              <div v-else>NT${{ $filters.currency(item.total) }}</div>
            </td>
            <td style="width: 10%">
              <button class="cl-delete" @click="removeCartItem(item.id)">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 100%" class="cl-table-md">
        <thead>
          <tr class="cl-head">
            <th style="width: 25%">品名</th>
            <th style="width: 20%">單價</th>
            <th style="width: 30%">數量</th>
            <th style="width: 20%">小計</th>
            <th style="width: 5%"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            style="height: 100px"
            class="color--dark-brown cl-body"
            v-for="item in cart.carts"
            :key="item.id"
          >
            <td style="width: 25%">
              {{ item.product.title }}
              <div class="color--positive" v-if="item.coupon">
                （已套用優惠券）
              </div>
            </td>
            <td style="width: 20%">
              <div v-if="item.coupon">
                <span class="color--positive">下殺折扣價：</span>NT${{
                  (item.coupon.percent * item.product.price) / 100
                }}
              </div>
              <div v-else>特價 NT${{ item.product.price }}</div>
            </td>
            <td style="width: 30%" class="cl-number">
              <div>
                <font-awesome-icon
                  icon="fa-regular fa-square-plus"
                  :class="{ disabled: status.loadingItem === item.id }"
                  @click="plusCount(item)"
                  class="cl-count"
                />
              </div>
              <div class="cl-count-num">{{ item.qty }}</div>
              <div>
                <font-awesome-icon
                  icon="fa-regular fa-square-minus"
                  :class="{ disabled: status.loadingItem === item.id }"
                  @click="minusCount(item)"
                  class="cl-count"
                />
              </div>
            </td>
            <td style="width: 20%">
              <div v-if="item.final_total !== item.total">
                <span class="color--positive">下殺折扣價：</span>NT${{
                  $filters.currency(item.final_total)
                }}
              </div>
              <div v-else>NT${{ $filters.currency(item.total) }}</div>
            </td>
            <td style="width: 5%">
              <button class="cl-delete" @click="removeCartItem(item.id)">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 100%" class="cl-table-sm">
        <thead>
          <tr class="cl-head">
            <th style="width: 35%">數量</th>
            <th style="width: 55%">訂單內容</th>
            <th style="width: 10%"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            style="height: 100px"
            class="color--dark-brown cl-body"
            v-for="item in cart.carts"
            :key="item.id"
          >
            <td style="width: 35%" class="cl-number">
              <div>
                <font-awesome-icon
                  icon="fa-regular fa-square-plus"
                  :class="{ disabled: status.loadingItem === item.id }"
                  @click="plusCount(item)"
                  class="cl-count"
                />
              </div>
              <div class="cl-count-num">{{ item.qty }}</div>
              <div>
                <font-awesome-icon
                  icon="fa-regular fa-square-minus"
                  :class="{ disabled: status.loadingItem === item.id }"
                  @click="minusCount(item)"
                  class="cl-count"
                />
              </div>
            </td>
            <td style="width: 55%">
              {{ item.product.title }}
              <div class="color--positive" v-if="item.coupon">
                （已套用優惠券）
              </div>
              <div v-if="item.final_total !== item.total">
                <span class="color--positive">下殺折扣價：</span>NT${{
                  $filters.currency(item.final_total)
                }}
              </div>
              <div class="cl-total-sm" v-else>小計NT${{ $filters.currency(item.total) }}</div>
            </td>
            <td style="width: 10%">
              <div class="cl-delete" @click="removeCartItem(item.id)">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="cl-bottom">
        <table>
          <tr>
            <td class="clc-input">
              <input
                autocomplete="off"
                type="text"
                name="coupon"
                placeholder="請輸入優惠碼..."
                v-model="coupon_code"
              />
            </td>
            <td class="clc-btn-sm">
              <button class="clc-btn" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </td>
          </tr>
          <tr class="cl-total">
            <td class="cl-toal-text">總價</td>
            <td class="cl-total-num">NT${{ $filters.currency(cart.total) }}</td>
          </tr>
          <tr class="cl-total" v-if="cart.final_total !== cart.total">
            <td class="cl-toal-text color--positive">下殺折扣價</td>
            <td class="cl-total-num color--positive">
              NT${{ $filters.currency(Math.floor(cart.final_total)) }}
            </td>
          </tr>
          <tr>
            <td style="width: 100%">
              <router-link to="/checkinfo" class="cl-checkBtn" type="submit" @click="clearCheckList">送出訂單</router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Lodingpage from '@/components/LodingPage.vue'
import { mapState, mapActions } from 'pinia'
import useCartStore from '@/stores/cart.js'
export default {
  data: () => {
    return {
      coupon_code: ''
    }
  },
  components: {
    Lodingpage
  },
  computed: {
    ...mapState(useCartStore, ['isLoading', 'cart', 'status'])
  },
  methods: {
    ...mapActions(useCartStore, [
      'getCart',
      'updateCart',
      'removeCartItem',
      'plusCount',
      'minusCount'
    ]),
    addCouponCode () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(api, { data: coupon }).then((res) => {
        console.log(res)
        // this.$httpMessageState(res, '加入優惠券')
        this.coupon_code = ''
        this.getCart()
        this.isLoading = false
      })
    },
    clearCheckList () {
      this.cart = ''
    }
  },
  created () {
    this.getCart()
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
  display: flex;
  justify-content: space-between;
}
.co-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.co-step-sm{
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
  height: 6px;
  background-color: #fac664;
  margin: 8px 0;
  border-radius: 5px;
}
.cs-lighter {
  opacity: 50%;
}
.cl-table {
  margin: 32px 0;
}
.cl-table-md {
  margin: 32px 0;
}
.cl-table-sm {
  margin: 16px 0;
}
tr {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.cl-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
}
.cl-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
  border-right: 3px solid #fac664;
  border-left: 3px solid #fac664;
}
.cl-body:hover {
  background-color: #fef7e9;
}

.cl-count {
  font-size: 30px;
  user-select: none;
  cursor: pointer;
}
.cl-count.disabled {
  color: var(--color--brown);
  pointer-events: none;
}
.cl-count:hover {
  color: var(--color--primary);
}
.cl-count-num {
  user-select: none;
  font-size: 30px;
}
.cl-number {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cl-delete {
  color: var(--color--dark-brown);
}
.cl-delete:hover {
  color: var(--color--primary);
}
.cl-total-sm{
  font-size: 16px;
  color: var(--color--brown);
}
.cl-bottom {
  width: 100%;
  margin: 0 0 56px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.clc-input {
  width: 250px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #c0b5a0;
  display: flex;
  align-items: center;
}
.clc-input:focus-within {
  border: 3px solid #fac664;
}
.clc-input input {
  border: none;
  background: transparent;
  margin-left: 5px;
  color: #fac664;
  font-size: 20px;
}
.clc-input input:focus-visible {
  outline: none;
}
.clc-btn {
  height: 60px;
  width: 200px;
  background-color: #fac664;
  color: #644536;
  font-size: 18px;
}
.clc-btn:hover {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
}
.cl-total {
  font-size: 32px;
  color: #644536;
  margin: 16px 0;
}
.cl-toal-text {
  width: 250px;
  display: flex;
  justify-content: right;
}
.cl-total-num {
  width: 200px;
  justify-content: center;
}
.cl-checkBtn {
  display: flex;
  height: 50px;
  width: 450px;
  background-color: #fac664;
  color: #644536;
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.cl-checkBtn:hover {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
}

@media (max-width: 413px) {
  .co-stepbar{
    justify-content: center;
  }
  .co-step{
    display: none;
  }
  .co-step-sm{
    display: flex;
  }
  .cs-bar{
    width: 120px;
  }
  .cl-table{
    display: none;
  }
  .cl-table-md{
    display: none;
  }

  .cl-table-sm{
    display: table;
  }
  .cl-body{
    font-size: 16px;
  }
  .cl-count{
    font-size: 24px;
  }
  .cl-count-num {
    margin: 0 16px;
    font-size: 24px;
  }
  .cl-delete {
    display: flex;
    justify-content: flex-start;
  }
  .cl-bottom table{
    width: 100%;
  }
  .clc-input{
    width: 60%;
  }
  .clc-btn-sm{
    width: 40%;
  }
  .clc-btn{
    width: 100%;
  }
  .cl-toal-text{
    width: 60%;
  }
  .cl-total-num{
    width: 40%;
  }
  .cl-checkBtn{
    width: 100%;
  }
  .cl-total{
    font-size: 26px;
  }
}
@media (min-width: 414px) and (max-width: 575px) {
  .co-stepbar{
    justify-content: center;
  }
  .co-step{
    display: none;
  }
  .co-step-sm{
    display: flex;
  }
  .cs-bar{
    width: 120px;
  }
  .cl-table{
    display: none;
  }
  .cl-table-md{
    display: none;
  }

  .cl-table-sm{
    display: table;
  }
  .cl-count-num {
    margin: 0 24px;
  }
  .cl-delete {
    display: flex;
    justify-content: flex-start;
  }
  .cl-bottom table{
    width: 100%;
  }
  .clc-input{
    width: 60%;
  }
  .clc-btn-sm{
    width: 40%;
  }
  .clc-btn{
    width: 100%;
  }
  .cl-toal-text{
    width: 60%;
  }
  .cl-total-num{
    width: 40%;
  }
  .cl-checkBtn{
    width: 100%;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .co-stepbar{
    width: 100%;
  }
  .cs-bar{
    width: 120px;
  }
  .co-step-sm{
    display: none;
  }
  .cl-table{
    display: none;
  }
  .cl-table-md{
    display: none;
  }
  .cl-table-sm{
    display: table;
  }
  .cl-count-num {
    margin: 0 32px;
  }
  .cl-bottom table{
    width: 100%;
  }
  .clc-input{
    width: 60%;
  }
  .clc-btn-sm{
    width: 40%;
  }
  .clc-btn{
    width: 100%;
  }
  .cl-toal-text{
    width: 60%;
  }
  .cl-total-num{
    width: 40%;
  }
  .cl-checkBtn{
    width: 100%;
  }
  .cl-delete {
    display: flex;
    justify-content: flex-start;
  }

}
@media (min-width: 768px) and (max-width: 991px) {
  .co-stepbar{
    width: 80%;
  }
  .cs-bar{
    width: 130px;
  }
  .co-step-sm{
    display: none;
  }
  .cl-table{
    display: none;
  }
  .cl-table-md{
    display: table;
  }
  .cl-table-sm{
    display: none;
  }
  .cl-count-num {
    margin: 0 32px;
  }
  .cl-delete {
    display: flex;
    justify-content: flex-start;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .co-stepbar{
    width: 60%;
  }
  .cs-bar{
    width: 130px;
  }
  .co-step-sm{
    display: none;
  }
  .cl-table{
    display: table;
  }
  .cl-table-md{
    display: none;
  }
  .cl-table-sm{
    display: none;
  }
  .cl-count-num {
    margin: 0 24px;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .co-stepbar{
    width: 50%;
  }
  .cs-bar{
    width: 130px;
  }
  .co-step-sm{
    display: none;
  }
  .cl-table{
    display: table;
  }
  .cl-table-md{
    display: none;
  }
  .cl-table-sm{
    display: none;
  }
  .cl-count-num {
    margin: 0 48px;
  }
}
@media (min-width: 1400px) {
  .co-stepbar{
    width: 50%;
  }
  .cs-bar{
    width: 150px;
  }
  .co-step-sm{
    display: none;
  }
  .cl-table{
    display: table;
  }
  .cl-table-md{
    display: none;
  }
  .cl-table-sm{
    display: none;
  }
  .cl-count-num {
    margin: 0 48px;
  }
}
</style>
