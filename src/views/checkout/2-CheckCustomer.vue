<template>
  <LodingPage v-if="isLoading"/>
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
          <div class="cs-num">2</div>
          <div class="cs-text">填寫資料</div>
          <div class="cs-bar"></div>
        </div>
      </div>
      <table style="width: 100%" class="cc-table">
        <thead>
          <tr class="cc-head">
            <th style="width: 100%">顧客資料</th>
          </tr>
        </thead>
        <tbody>
          <tr class="cc-body">
            <td style="width: 100%" class="cc-detail">
              <Form @submit="createOrder" v-slot="{ errors }">
                <div class="cc-inside">
                  <div class="cc-column">
                    <div class="u-mb-24">
                      <label class="cc-label" for="姓名">收件人姓名＊</label
                      ><br />
                      <Field
                        class="cc-input"
                        style="width: 85%"
                        type="text"
                        id="姓名"
                        name="姓名"
                        autocomplete="off"
                        autofocus
                        placeholder="請輸入姓名..."
                        rules="required"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        v-model="form.user.name"
                      ></Field
                      ><error-message
                        name="姓名"
                        class="invalid-feedback"
                      ></error-message
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="phone">聯絡電話＊</label
                      ><br />
                      <Field
                        class="cc-input"
                        style="width: 85%"
                        type="tel"
                        id="phone"
                        name="phone"
                        autocomplete="off"
                        placeholder="請輸入手機號碼..."
                        :rules="isPhone"
                        :class="{ 'is-invalid': errors['phone'] }"
                        v-model="form.user.tel"
                      ></Field
                      ><error-message
                        name="phone"
                        class="invalid-feedback"
                      ></error-message
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="Email">Email＊</label><br />
                      <Field
                        class="cc-input"
                        style="width: 85%"
                        type="Eemail"
                        id="Email"
                        name="Email"
                        autocomplete="off"
                        placeholder="請輸入電子信箱..."
                        rules="email|required"
                        :class="{ 'is-invalid': errors['Email'] }"
                        v-model="form.user.email"
                      ></Field>
                      <error-message
                        name="Email"
                        class="invalid-feedback"
                      ></error-message>
                      <br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="地址">收件地址＊</label
                      ><br />
                      <Field
                        class="cc-input"
                        style="width: 85%"
                        type="text"
                        id="地址"
                        name="地址"
                        autocomplete="off"
                        placeholder="請輸入收件地址..."
                        rules="required"
                        :class="{ 'is-invalid': errors['地址'] }"
                        v-model="form.user.address"
                      ></Field
                      ><error-message
                        name="地址"
                        class="invalid-feedback"
                      ></error-message
                      ><br />
                    </div>
                  </div>
                  <div class="cc-column">
                    <div class="u-mb-24">
                      <label class="cc-label" for="支付方式">支付方式＊</label
                      ><br />
                      <Field
                        class="cc-input"
                        style="width: 85%"
                        type="text"
                        id="支付方式"
                        name="支付方式"
                        autocomplete="off"
                        as="select"
                        :rules="isPayment"
                        :class="{ 'is-invalid': errors['支付方式'] }"
                        v-model="payment"
                      >
                        <option value="請選擇支付方式" disabled selected>
                          請選擇支付方式
                        </option>
                        <option value="貨到付款">貨到付款</option>
                        <option value="信用卡/金融卡">信用卡/金融卡</option>
                        <option value="LinePay">LinePay</option>
                        <option value="ApplePay">ApplePay</option>
                        <option value="GooglePay">GooglePay</option></Field
                      ><error-message
                        name="支付方式"
                        class="invalid-feedback"
                      ></error-message
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="note">留言備註</label><br />
                      <textarea
                        class="cc-note"
                        style="width: 85%"
                        name="note"
                        id="note"
                        autocomplete="off"
                        placeholder="還想告訴我們..."
                        v-model="form.message"
                      ></textarea
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <button
                        class="cc-submit"
                        style="width: 85%"
                        type="submit"
                      >
                        提交訂單
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 100%" class="cc-table-md">
        <thead>
          <tr class="cc-head">
            <th style="width: 100%">顧客資料</th>
          </tr>
        </thead>
        <tbody>
          <tr class="cc-body">
            <td style="width: 100%" class="cc-detail">
              <Form @submit="createOrder" v-slot="{ errors }">
                <div class="cc-inside">
                    <div class="u-mb-24">
                      <label class="cc-label" for="姓名">收件人姓名＊</label
                      ><br />
                      <Field
                        class="cc-input"
                        style="width: 100%"
                        type="text"
                        id="姓名"
                        name="姓名"
                        autocomplete="off"
                        autofocus
                        placeholder="請輸入姓名..."
                        rules="required"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        v-model="form.user.name"
                      ></Field
                      ><error-message
                        name="姓名"
                        class="invalid-feedback"
                      ></error-message
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="phone">聯絡電話＊</label
                      ><br />
                      <Field
                        class="cc-input"
                        style="width: 100%"
                        type="tel"
                        id="phone"
                        name="phone"
                        autocomplete="off"
                        placeholder="請輸入手機號碼..."
                        :rules="isPhone"
                        :class="{ 'is-invalid': errors['phone'] }"
                        v-model="form.user.tel"
                      ></Field
                      ><error-message
                        name="phone"
                        class="invalid-feedback"
                      ></error-message
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="Email">Email＊</label><br />
                      <Field
                        class="cc-input"
                        style="width: 100%"
                        type="Eemail"
                        id="Email"
                        name="Email"
                        autocomplete="off"
                        placeholder="請輸入電子信箱..."
                        rules="email|required"
                        :class="{ 'is-invalid': errors['Email'] }"
                        v-model="form.user.email"
                      ></Field>
                      <error-message
                        name="Email"
                        class="invalid-feedback"
                      ></error-message>
                      <br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="地址">收件地址＊</label
                      ><br />
                      <Field
                        class="cc-input"
                        style="width: 100%"
                        type="text"
                        id="地址"
                        name="地址"
                        autocomplete="off"
                        placeholder="請輸入收件地址..."
                        rules="required"
                        :class="{ 'is-invalid': errors['地址'] }"
                        v-model="form.user.address"
                      ></Field
                      ><error-message
                        name="地址"
                        class="invalid-feedback"
                      ></error-message
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="支付方式">支付方式＊</label
                      ><br />
                      <Field
                        class="cc-input"
                        style="width: 100%"
                        type="text"
                        id="支付方式"
                        name="支付方式"
                        autocomplete="off"
                        as="select"
                        :rules="isPayment"
                        :class="{ 'is-invalid': errors['支付方式'] }"
                        v-model="payment"
                      >
                        <option value="請選擇支付方式" disabled selected>
                          請選擇支付方式
                        </option>
                        <option value="貨到付款">貨到付款</option>
                        <option value="信用卡/金融卡">信用卡/金融卡</option>
                        <option value="LinePay">LinePay</option>
                        <option value="ApplePay">ApplePay</option>
                        <option value="GooglePay">GooglePay</option></Field
                      ><error-message
                        name="支付方式"
                        class="invalid-feedback"
                      ></error-message
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <label class="cc-label" for="note">留言備註</label><br />
                      <textarea
                        class="cc-note"
                        style="width: 100%"
                        name="note"
                        id="note"
                        autocomplete="off"
                        placeholder="還想告訴我們..."
                        v-model="form.message"
                      ></textarea
                      ><br />
                    </div>
                    <div class="u-mb-24">
                      <button
                        class="cc-submit"
                        style="width: 100%"
                        type="submit"
                      >
                        提交訂單
                      </button>
                    </div>
                </div>
              </Form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LodingPage from '@/components/LodingPage.vue'
export default {
  data () {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      payment: '請選擇支付方式',
      orderId: ''
    }
  },
  components: {
    LodingPage
  },
  methods: {
    createOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const info = this.form
      this.$http.post(api, { data: info }).then((res) => {
        this.isLoading = false
        this.$router.push(`/checkout/${res.data.orderId}`)
      })
      return false
    },
    isPayment (value) {
      if (value === '請選擇支付方式') {
        return '請選擇支付方式'
      } else {
        return true
      }
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的手機號碼(09開頭)'
    }
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
.co-step-sm {
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
.cc-table {
  margin: 32px 0 48px 0;
}
.cc-table-md {
  margin: 32px 0 48px 0;
}
.cc-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;

  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.cc-body {
  display: flex;
  flex-direction: row;
  padding: 48px 0 16px 0;
  text-align: start;
  align-items: flex-start;

  font-size: 20px;
  border-bottom: 3px solid #fac664;
  border-right: 3px solid #fac664;
  border-left: 3px solid #fac664;
}
.cc-detail {
  padding: 0 0 0 80px;
}
.cc-inside {
  display: flex;
}
.cc-column {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.cc-label {
  color: #644536;
  margin-bottom: 8px;
  display: inline-block;
}
.cc-input {
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #644536;
  display: flex;
  align-items: center;
  color: #272727;
  padding-left: 16px;
}
.cc-input:focus-within {
  border: 3px solid #fac664;
}
.cc-note {
  height: 175px;
  background-color: #ffffff;
  border: 2px solid #644536;
  display: flex;
  line-height: 34px;
  color: #272727;
  padding-left: 16px;
}
.cc-note:focus-within {
  border: 3px solid #fac664;
}
.cc-submit {
  height: 50px;
  background-color: #fac664;
  color: #644536;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.cc-submit:hover {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
}
.invalid-feedback {
  color: #fa7864;
  margin: 0;
  padding: 0;
}
@media (max-width: 575px) {
  .co-stepbar {
    justify-content: center;
  }
  .co-step {
    display: none;
  }
  .co-step-sm {
    display: flex;
  }
  .cs-bar {
    width: 120px;
  }
  .cc-table{
    display: none;
  }
  .cc-table-md{
    display: table
  }
  .cc-inside{
    flex-direction: column;
  }
  .cc-detail{
    padding: 0 32px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .co-stepbar {
    width: 100%;
  }
  .cs-bar {
    width: 120px;
  }
  .co-step-sm {
    display: none;
  }
  .cc-table{
    display: none;
  }
  .cc-table-md{
    display: table
  }
  .cc-inside{
    flex-direction: column;
  }
  .cc-detail{
    padding: 0 32px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .co-stepbar {
    width: 80%;
  }
  .cs-bar {
    width: 130px;
  }
  .co-step-sm {
    display: none;
  }
  .cc-table{
    display: none;
  }
  .cc-table-md{
    display: table
  }
  .cc-inside{
    flex-direction: column;
  }
  .cc-detail{
    padding: 0 56px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .co-stepbar {
    width: 60%;
  }
  .cs-bar {
    width: 130px;
  }
  .co-step-sm {
    display: none;
  }
  .cc-table{
    display: table;
  }
  .cc-table-md{
    display: none
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .co-stepbar {
    width: 50%;
  }
  .cs-bar {
    width: 130px;
  }
  .co-step-sm {
    display: none;
  }
  .cc-table{
    display: table;
  }
  .cc-table-md{
    display: none
  }
}
@media (min-width: 1400px) {
  .co-stepbar {
    width: 50%;
  }
  .cs-bar {
    width: 150px;
  }
  .co-step-sm {
    display: none;
  }
  .cc-table{
    display: table;
  }
  .cc-table-md{
    display: none
  }
}
</style>
