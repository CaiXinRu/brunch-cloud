<template>
  <LoadingPage v-if="isLoading" />
  <div
    class="modal fade"
    id="burgerModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="burgerModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="im-close" @click="hideModal">
          <font-awesome-icon icon="fa-solid fa-circle-xmark" />
        </div>
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
            <span class="im-detail">▎餐點注意事項：</span>
            <span class="im-detail"
              >餐點皆為現點現做，為保食物品質，請儘早食用，隔餐勿食。</span
            >
            <span class="im-detail"
              >下訂單後，系統自動分配到離您居住地最近的雲端門市，20分鐘內完成餐點，一小時內完成送達，敬請等候。</span
            >
            <div class="im-line u-mt-8"></div>
            <label class="im-choice-title">客製<br><span style="font-size: 16px">（可複選。預設為「我不挑食」，如想選擇其他選項，請先點掉預設選項。）</span></label>
            <div class="im-box">
              <div
                class="im-box-container"
                v-for="(itemC, key) in customType"
                :key="'custom' + key"
              >
                <label class="im-boxtext" :for="'custom' + key">
                  <input
                    class="im-input"
                    name="customType"
                    type="checkbox"
                    :id="'custom' + key"
                    :value="itemC"
                    v-model="custom"
                    :checked="custom.includes(itemC)"
                    @click="toggleCustomOption(itemC)"
                  />
                  <span class="im-checkmark"></span>
                  <span class="u-ml-4 u-mr-16">{{ itemC }}</span>
                </label>
              </div>
            </div>
            <div class="u-pt-16 im-number im-number-column">
              <div class="im-count-container">
                <font-awesome-icon
                  class="im-count"
                  icon="fa-regular fa-square-minus"
                  @click="minusCount"
                />
                <div class="im-count-num">{{ count }}</div>
                <font-awesome-icon
                  class="im-count"
                  icon="fa-regular fa-square-plus"
                  @click="plusCount"
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
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import LoadingPage from '@/components/LodingPage.vue'
import { mapActions } from 'pinia'
import useCartStore from '@/stores/cart.js'
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    id: {
      required: true
    },
    tempProduct: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  emits: ['update:modelValue'],
  components: {
    LoadingPage
  },
  data () {
    return {
      modal: {},
      isLanding: false,
      isLoading: false,
      product: {},
      status: {
        loadingItem: ''
      },
      customType: ['我不挑食', '不加番茄', '不加美生菜', '不加美奶滋'],
      custom: [],
      count: 1
    }
  },
  methods: {
    ...mapActions(useCartStore, ['getCart']),
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.custom = []
      this.count = 1
      this.modal.hide()
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
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(api, { data: cart }).then((res) => {
        this.$httpMessageState(res, '加入購物車')
        this.status.loadingItem = ''
        this.count = 1
        this.hideModal()
        this.getCart()
      })
    },
    toggleCustomOption (option) {
      if (option === '我不挑食') {
        if (this.custom.includes(option)) {
          this.custom = []
        } else {
          this.custom = [option]
        }
      } else {
        const index = this.custom.indexOf('我不挑食')
        if (index !== -1) {
          this.custom.splice(index, 1)
        }
        const optionIndex = this.custom.indexOf(option)
        if (optionIndex === -1) {
          this.custom.push(option)
        }
      }
    }
  },
  watch: {
    tempProduct () {
      this.product = this.tempProduct
      this.custom = ['我不挑食']
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.burgerModal)
  }
}
</script>

<style lang="scss" scoped>
.modal-content {
  background-color: var(--color--light-brown);
}
.im-close {
  font-size: 40px;
  z-index: 1;
  position: absolute;
  margin: 15px;
  right: 0%;
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
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.im-pic-inner {
  width: 100%;
  height: 100%;
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
  flex: 1.5;
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
.im-box-container:hover .im-input ~ .im-checkmark {
  background-color: #fac664;
}
.im-box-container .im-input:checked ~ .im-checkmark {
  background-color: #644536;
}
.im-box-container:hover .im-input:disabled ~ .im-checkmark {
  background-color: #d9beb0;
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

// RWD
@media (max-width: 575px) {
  .modal-xl {
    --bs-modal-width: 100vw;
  }
  .im-pic {
    display: none;
  }
  .im-content h2 {
    font-size: 36px;
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
  .modal-xl {
    --bs-modal-width: 100vw;
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
  .modal-xl {
    --bs-modal-width: 80vw;
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
  .modal-xl {
    --bs-modal-width: 90vw;
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
  .modal-xl {
    --bs-modal-width: 90vw;
  }
  .im-pic-sm {
    display: none;
  }
}
@media (min-width: 1400px) {
  .modal-xl {
    --bs-modal-width: 80vw;
  }
  .im-pic-sm {
    display: none;
  }
}
</style>
