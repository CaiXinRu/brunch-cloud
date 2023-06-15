<template>
  <dialog id="itemModal" ref="itemModal" v-if="open">
    <a class="im-close" id="close" @click="closeModal()">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </a>
    <div class="im-container">
      <div class="im-pic"><img src="https://picsum.photos/450" /></div>
      <div class="im-content">
        <h2 class="u-mb-16">鱈魚龍蝦沙拉漢堡</h2>
        <p class="color--brown im-price">原價NT$80</p>
        <h5 class="color--third">特價NT$64</h5>
        <div class="im-line"></div>
        <span class="im-detail">▎食材介紹：鱈魚、龍蝦、麵包</span>
        <span class="im-detail">▎熱量：436 kcal</span>
        <span class="im-detail">▎可自取時間：06:00~14:15</span>
        <span class="im-detail">▎餐點注意事項：</span>
        <span class="im-detail"
          >餐點皆為現點現做，為保食物品質，請儘早食用，隔餐勿食。</span
        >
        <span class="im-detail"
          >下訂單後，系統自動分配到離您居住地最近的雲端門市，10分鐘內完成餐點，一小時內完成送達，敬請等候。</span
        >
        <div class="im-line u-mt-8"></div>
        <label class="im-choice-title">客製（可複選）</label>
        <div class="im-box">
          <div
            class="im-box-container"
            v-for="(custom, key) in customType"
            :key="'custom' + key"
          >
            <label class="im-boxtext" :for="'custom' + key">
              <input
                class="im-input"
                name="customType"
                type="checkbox"
                :id="'custom' + key"
                :value="custom"
              />
              <span class="im-checkmark"></span>
              <span class="u-ml-4 u-mr-16">{{ custom }}</span>
            </label>
          </div>
        </div>
        <label class="im-choice-title">冰塊</label>
        <div class="im-box">
          <div
            class="im-box-container"
            v-for="(ice, key) in iceType"
            :key="'ice' + key"
          >
            <label class="im-boxtext" :for="'ice' + key">
              <input
                class="im-input"
                name="iceType"
                type="radio"
                :id="'ice' + key"
                :value="ice"
              />
              <span class="im-checkmark"></span>
              <span class="u-ml-4 u-mr-16">{{ ice }}</span>
            </label>
          </div>
        </div>
        <label class="im-choice-title">甜度</label>
        <div class="im-box">
          <div
            class="im-box-container"
            v-for="(sugar, key) in sugarType"
            :key="'sugar' + key"
          >
            <label class="im-boxtext" :for="'sugar' + key">
              <input
                class="im-input"
                name="sugarType"
                type="radio"
                :id="'sugar' + key"
                :value="sugar"
              />
              <span class="im-checkmark"></span>
              <span class="u-ml-4 u-mr-16">{{ sugar }}</span>
            </label>
          </div>
        </div>
        <div class="u-pt-16 im-number">
          <font-awesome-icon
            class="im-count"
            icon="fa-regular fa-square-plus"
          />
          <div class="im-count">1</div>
          <font-awesome-icon
            class="im-count"
            icon="fa-regular fa-square-minus"
          />
          <button class="im-confirmed">新增1份至購物清單</button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  props: ['open'],
  data () {
    return {
      modal: {}
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
dialog {
  border: none;
  box-shadow: 0 2px 6px #ccc;
  border-radius: 10px;
  width: 70vw;
  height: max-content;
  background-color: #fef7e9;
}
dialog::backdrop {
  background-color: rgb(39, 39, 39, 0.5);
}
.im-container {
  display: flex;
  padding: 15px;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
.im-close {
  font-size: 40px;
  z-index: 1;
  position: absolute;
  right: 1%;
  color: #644536;
}
.im-close:hover {
  color: #fac664;
}
.im-close:active {
  color: #E3BAC6;
}
.im-pic {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.im-content {
  display: flex;
  flex: 1;
  padding: 15px;
  flex-direction: column;
}
.im-price {
  height: 1px;
  width: max-content;
  padding: 0 5px;
  background-color: #c0b5a0;
  text-align: center;
  line-height: 1px;
}
.im-line {
  height: 1px;
  width: 100%;
  background-color: #c0b5a0;
  margin-bottom: 16px;
}
.im-detail {
  color: #c0b5a0;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-top: 0px;
  margin-bottom: 8px;
}
.im-choice-title {
  color: #644536;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-top: 0px;
  margin-bottom: 8px;
}
.im-box {
  display: flex;
  flex-direction: row;
  height: max-content;
  align-content: center;
}
.im-boxtext {
  display: flex;
  align-items: center;
  color: #644536;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin: 0px 0px 8px 0px;
  cursor: pointer;
}
.im-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.im-checkmark {
  display: flex;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: transparent;
  border: 2px solid #644536;
  cursor: pointer;
}
/* On mouse-over, add a grey background color */
.im-box-container:hover .im-input ~ .im-checkmark {
  background-color: #FAC664;
}
/* When the checkbox is checked, add a blue background */
.im-box-container .im-input:checked ~ .im-checkmark {
  background-color: #644536;
}
.im-number {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.im-count {
  font-size: 60px;
  margin-right: 30px;
  color: #644536;
  display: flex;
}
.im-confirmed {
  width: auto;
  height: 100%;
  background-color: #644536;
  color: #fef7e9;
  font-size: 20px;
  padding: 0 16px;
  border-radius: 30px;
  letter-spacing: 0.1em;
}
</style>
