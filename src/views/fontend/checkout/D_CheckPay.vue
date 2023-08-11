<template>
  <LoadingPage v-if="isLoading" />
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
        <div class="co-step-sm">
          <div class="cs-num">4</div>
          <div class="cs-text">完成付款</div>
          <div class="cs-bar"></div>
        </div>
      </div>
      <table style="width: 100%" class="cp-table">
        <thead>
          <tr class="cp-head">
            <th style="width: 100%">付款狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr class="cp-body">
            <td class="cp-detail">
              <div class="cp-container">
                <font-awesome-icon
                  class="cp-icon"
                  icon="fa-regular fa-circle-check"
                  bounce
                />
                <div>付款完成</div>
                <div class="color--secondary cp-text">
                  您的餐點將在一個小時內送達，敬請耐心等候。
                </div>
                <div class="color--secondary cp-text-sm">
                  <div>您的餐點將在一個小時內送達</div>
                  <div>敬請耐心等候</div>
                </div>
                <div class="cf-btn-container">
                  <router-link :to="`/checkout/${orderId}`" class="cf-btn">
                    ＜ 查看訂單
                  </router-link>
                  <router-link to="/menu" class="cf-btn">
                    繼續點餐 ＞
                  </router-link>
                </div>
              </div>
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
    return {
      orderId: ''
    }
  },
  components: {
    LoadingPage
  },
  created () {
    this.orderId = this.$route.params.orderId
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
.co-step-sm {
  flex-direction: column;
  align-items: center;
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
  height: 6px;
  background-color: #fac664;
  margin: 8px 0;
  border-radius: 5px;
}
.cs-lighter {
  opacity: 50%;
}
.cp-table {
  margin: 48px 0 56px 0;
}
.cp-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;

  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.cp-body {
  display: flex;
  flex-direction: row;
  text-align: start;
  align-items: flex-start;

  font-size: 20px;
  border-bottom: 3px solid #fac664;
  border-right: 3px solid #fac664;
  border-left: 3px solid #fac664;
}
.cp-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 100px 0;
}
.cp-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
}
.cp-text-sm {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.cp-icon {
  font-size: 150px;
  color: var(--color--primary);
  margin-bottom: 32px;
}
.cf-btn-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 32px;
}
.cf-btn {
  display: flex;
  height: 50px;
  width: 40%;
  background-color: var(--color--primary);
  color: var(--color--dark-brown);
  align-items: center;
  justify-content: center;
}
.cf-btn:hover {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
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
  .cp-text {
    display: none;
  }
  .cp-text-sm {
    display: flex;
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
  .cp-text {
    display: block;
  }
  .cp-text-sm {
    display: none;
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
  .cp-text {
    display: block;
  }
  .cp-text-sm {
    display: none;
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
  .cp-text {
    display: block;
  }
  .cp-text-sm {
    display: none;
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
  .cp-text {
    display: block;
  }
  .cp-text-sm {
    display: none;
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
  .cp-text {
    display: block;
  }
  .cp-text-sm {
    display: none;
  }
}
</style>
