<template>
  <div>
    <dialog
      id="RiceNoodlesModal"
      ref="RiceNoodlesModal"
      :class="{ 'show-modal': isLanding }"
    >
      <a class="im-close" @click="closeModal">
        <font-awesome-icon icon="fa-solid fa-circle-xmark" />
      </a>
      <div class="im-container">
        <div class="im-pic">
          <div
            class="im-pic-inner"
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          ></div>
        </div>
        <div class="im-content">
          <div
            class="im-pic-sm"
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          ></div>
          <h2 class="u-mb-16">{{ product.title }}</h2>
          <p class="color--brown im-price" v-if="product.price">
            原價 NT${{ product.origin_price }}
          </p>
          <h5 class="color--third" v-if="product.price">
            特價 NT${{ product.price }}
          </h5>
          <div class="im-line"></div>
          <span class="im-detail">▎品項簡介：</span>
          <span class="im-detail">{{ product.description }}</span>
          <span class="im-detail">▎內容食材：</span>
          <span class="im-detail">{{ product.content }}</span>
          <span class="im-detail">▎可自取時間：06:00~14:15</span>
          <span class="im-detail">▎餐點注意事項：</span>
          <span class="im-detail"
            >餐點皆為現點現做，為保食物品質，請儘早食用，隔餐勿食。</span
          >
          <span class="im-detail"
            >下訂單後，系統自動分配到離您居住地最近的雲端門市，20分鐘內完成餐點，一小時內完成送達，敬請等候。</span
          >
          <div class="im-line u-mt-8"></div>
          <label class="im-choice-title">辣度選擇</label>
          <div class="im-box">
            <div
              class="im-box-container"
              v-for="(itemS, key) in spicyType"
              :key="'spicyRN' + key"
            >
              <label class="im-boxtext" :for="'spicyRN' + key">
                <input
                  class="im-input"
                  name="spicyRN"
                  type="radio"
                  :id="'spicyRN' + key"
                  :value="itemS"
                  v-model="spicy"
                />
                <span class="im-checkmark"></span>
                <span class="u-ml-4 u-mr-16">{{ itemS }}</span>
              </label>
            </div>
          </div>
          <div class="u-pt-16 im-number im-number-column">
            <div class="im-count-container">
              <font-awesome-icon
                class="im-count"
                icon="fa-regular fa-square-plus"
                @click="plusCount()"
              />
              <div class="im-count-num">{{ count }}</div>
              <font-awesome-icon
                class="im-count"
                icon="fa-regular fa-square-minus"
                @click="minusCount()"
              />
            </div>
            <button
              type="button"
              class="im-confirmed"
              @click="addToCart(product.id, count)"
              :class="{ disabled: status.loadingItem === product.id }"
            >
              <div
                v-if="this.status.loadingItem === product.id"
                class="spinner-grow text-light spinner-grow-sm"
                role="status"
              ></div>
              新增{{ count }}份至購物清單
            </button>
          </div>
        </div>
      </div>
      <LodingPage v-if="isLoading"></LodingPage>
    </dialog>
  </div>
</template>

<script>
import LodingPage from '../LodingPage.vue'
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    id: {
      required: true
    }
  },
  data () {
    return {
      isLoading: false,
      isLanding: false,
      product: {},
      status: {
        loadingItem: ''
      },
      spicyType: ['不要辣', '微辣', '小辣', '中辣', '大辣', '超辣'],
      spicy: '',
      count: 1
    }
  },
  components: {
    LodingPage
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.product = res.data.product
          const modal = document.getElementById('RiceNoodlesModal')
          console.log(res)
          modal.showModal()
          this.isLanding = true
        }
        this.isLoading = false
      })
    },
    closeModal () {
      this.$emit('update:modelValue', false)
      this.$refs.RiceNoodlesModal.close()
      this.isLanding = false
    },
    plusCount () {
      this.count += 1
    },
    minusCount () {
      if (this.count > 1) {
        this.count -= 1
      }
    },
    addToCart (id, qty) {
      // console.log(id, qty)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(api, { data: cart }).then((res) => {
        console.log(res)
        // this.$httpMessageState(response, '加入購物車')
        this.status.loadingItem = ''
        this.count = 1
        this.closeModal()
      })
    }
  },
  watch: {
    modelValue (newValue) {
      if (newValue) {
        // 打開ILRiceNoodlesModal時，禁用滾動事件
        document.body.style.overflow = 'hidden'
        this.getProduct()
        this.spicy = '不要辣'
      } else {
        // 關閉ILRiceNoodlesModal時，啟用滾動事件
        document.body.style.overflow = 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
dialog {
  border: none;
  box-shadow: 0 2px 6px #ccc;
  border-radius: 10px;
  width: 80vw;
  height: max-content;
  background-color: #fef7e9;
}
#RiceNoodlesModal {
  opacity: 0.5;
  transform: translateY(-50px);
  transition: all 0.5s ease;
}
#RiceNoodlesModal.show-modal {
  opacity: 1;
  transform: translateY(0);
  position: fixed;
}
dialog::backdrop {
  background-color: rgb(39, 39, 39, 0.5);
}
.im-close {
  font-size: 40px;
  z-index: 1;
  position: absolute;
  right: 1%;
  color: #644536;
  cursor: pointer;
}
.im-close:hover {
  color: #fac664;
}
.im-close:active {
  color: #fac664;
}
.im-container {
  display: flex;
  padding: 15px;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
.im-pic {
  // height: 450px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.im-pic-inner {
  width: 100%; /* Adjust the width as needed */
  height: 100%; /* Adjust the height as needed */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.im-pic-sm {
  width: 100%;
  height: 240px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  color: var(--color--light-brown);
  background-color: var(--color--dark-brown);
  padding: 5px;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.04em;
  margin-top: 0px;
  margin-bottom: 8px;
}
.im-box {
  display: flex;
  flex-direction: column;
  height: max-content;
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
  background-color: #fac664;
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
.im-count-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.im-count {
  font-size: 60px;
  margin-right: 30px;
  color: #644536;
  display: flex;
  user-select: none;
  cursor: pointer;
}
.im-count:hover {
  color: var(--color--primary);
}
.im-count-num {
  font-size: 60px;
  margin-right: 30px;
  color: #644536;
  display: flex;
  user-select: none;
}
.im-confirmed {
  width: max-content;
  height: 100%;
  background-color: #644536;
  color: #fef7e9;
  font-size: 20px;
  padding: 0 16px;
  border-radius: 30px;
  letter-spacing: 0.1em;
  cursor: pointer;
}
.im-confirmed:hover {
  background-color: var(--color--primary);
  color: var(--color--dark-brown);
}
.im-confirmed.disabled {
  opacity: 0.5;
  background-color: #644536;
  color: #fef7e9;
  pointer-events: none;
}
@media (max-width: 575px) {
  dialog {
    width: 100vw;
  }
  .im-pic {
    display: none;
  }
  .im-number-column {
    flex-direction: column;
  }
  .im-count {
    margin: 0;
  }
  .im-count-num {
    margin: 0 30px;
  }
  .im-confirmed {
    padding: 18px 16px;
    margin: 16px 0 0 0;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  dialog {
    width: 100vw;
  }
  .im-pic {
    display: none;
  }
  .im-number {
    justify-content: center;
  }
  .im-confirmed {
    padding: 18px 16px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  dialog {
    width: 80vw;
  }
  .im-pic {
    display: none;
  }
  .im-number {
    justify-content: center;
  }
  .im-confirmed {
    padding: 18px 16px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  dialog {
    width: 80vw;
  }
  .im-pic-sm {
    display: none;
  }
  .im-number-column {
    flex-direction: column;
  }
  .im-count {
    margin: 0;
  }
  .im-count-num {
    margin: 0 30px;
  }
  .im-confirmed {
    padding: 18px 16px;
    margin: 16px 0 0 0;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  dialog {
    width: 90vw;
  }
  .im-pic-sm {
    display: none;
  }
}
@media (min-width: 1400px) {
  dialog {
    width: 80vw;
  }
  .im-pic-sm {
    display: none;
  }
}
</style>
