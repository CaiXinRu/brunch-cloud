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
          <div class="cs-num">4</div>
          <div class="cs-text">完成付款</div>
          <div class="cs-bar"></div>
        </div>
      </div>
      <table style="width: 100%" class="cc-table">
        <thead>
            <tr class="cc-head">
            <th style="width: 100%">付款狀態</th>
            </tr>
        </thead>
        <tbody>
            <tr class="cc-body">
            <td style="width: 100%" class="cc-detail">
            </td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import LoadingPage from '@/components/LodingPage.vue'

export default {
  data () {
    return {}
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LoadingPage
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
.cc-table {
  margin: 48px 0 56px 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
