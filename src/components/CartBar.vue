<template>
  <div>
    <dialog
      :id="id"
      ref="cartModal"
      :class="{ 'show-modal': modelValue, 'cartModal': true }"
    >
      <LodingPageModal v-if="isLoading"/>
      <div class="cb-container">
        <div class="cb-head">
          <div class="cbh-close" @click="closeModal()">
            <font-awesome-icon icon="fa-solid fa-angle-right" />
          </div>
          <div class="cbh-text">購物清單</div>
        </div>
        <thead class="u-mt-16 u-ml-4 u-mr-4" v-if="cart?.carts?.length">
          <tr class="cb-thead">
            <th style="width: 20%"></th>
            <th style="width: 30%">品名</th>
            <th style="width: 20%">單價</th>
            <th style="width: 20%">數量</th>
            <th style="width: 10%"></th>
          </tr>
        </thead>
        <div class="cb-content" v-if="cart?.carts?.length">
          <table style="width: 100%" v-if="cart.carts.length">
            <tbody>
              <tr
                class="color--dark-brown"
                v-for="item in cart.carts"
                :key="item.id"
              >
                <td style="width: 20%" class="cb-img">
                  <div
                    class="cb-img-inner"
                    :style="{
                      backgroundImage: `url(${item.product.imageUrl})`
                    }"
                  ></div>
                </td>
                <td style="width: 30%">
                  {{ item.product.title }}
                </td>
                <td style="width: 20%">
                  <p class="cb-sprice">特價 NT${{ item.product.price }}</p>
                  <p class="color--brown cb-price">
                    原價 NT${{ item.product.origin_price }}
                  </p>
                </td>
                <td style="width: 20%">
                  <div class="cb-number">
                    <font-awesome-icon
                      class="cb-count"
                      icon="fa-regular fa-square-plus"
                      :class="{ disabled: status.loadingItem === item.id }"
                      @click="plusCount(item)"
                    />
                    <div class="cb-count-num">{{ item.qty }}</div>
                    <font-awesome-icon
                      class="cb-count"
                      icon="fa-regular fa-square-minus"
                      :class="{ disabled: status.loadingItem === item.id }"
                      @click="minusCount(item)"
                    />
                  </div>
                </td>
                <td style="width: 10%">
                  <button type="button" class="cb-delete" @click="removeCartItem(item.id)">
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cb-content2" v-if="!cart?.carts?.length">
          <font-awesome-icon class="color--secondary" style="font-size: 70px; margin-bottom: 10px" icon="fa-solid fa-cloud" bounce />
          <div>您尚未選取任何餐點喔！</div>
        </div>
        <tfoot v-if="cart?.carts?.length">
          <tr>
            <td style="width: 20%" class="color--secondary">總價</td>
            <td style="width: 30%" class="color--dark-brown">
              NT${{ $filters.currency(cart.final_total) }}
            </td>
          </tr>
          <router-link
            to="/checklist"
            class="cb-checkout"
            @click="closeModal()"
          >
            訂單結帳
          </router-link>
        </tfoot>
      </div>
    </dialog>
  </div>
</template>

<script scoped>
import LodingPageModal from '@/components/LodingPageModal.vue'
import { mapState, mapActions } from 'pinia'
import useCartStore from '@/stores/cart.js'
export default {
  emits: ['update:modelValue'],
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  data: () => {
    return {}
  },
  components: {
    LodingPageModal
  },
  watch: {
    modelValue () {
      if (this.modelValue) {
        this.getCart()
      }
    }
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
    closeModal () {
      this.$emit('update:modelValue', false)
      this.$refs.cartModal.close()
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
dialog {
  border: none;
  height: calc(100vh - 38px);
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 2px 6px #ccc;
  padding: 0px;
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  margin: 19px auto;
  user-select: none;
}
dialog:focus-visible{
  outline: none;
}
.cartModal {
  transform: translateX(200%);
  transition: all 0.5s ease;
  height: calc(100vh - 38px);
}
.cartModal.show-modal {
  z-index: 99;
  height: calc(100vh - 38px);
}
dialog::backdrop {
  background-color: rgb(39, 39, 39, 0.5);
}
.cb-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.cb-head {
  width: 100%;
  height: 120px;
  background-color: #669afa;
  display: flex;
  flex-direction: row;
  border-bottom: 5px solid var(--color--primary);
  justify-content: center;
  align-items: center;
}
.cbh-close {
  color: #fef7e9;
  font-size: 32px;
  position: absolute;
  left: 20px;
  cursor: pointer;
}
.cbh-close:hover {
  color: var(--color--primary);
}
.cbh-text {
  color: #fef7e9;
  font-size: 24px;
  display: flex;
}
.cb-content {
  overflow: auto;
  height: max-content;
  flex: 1;
}
.cb-content2{
  overflow: auto;
  flex: 1;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: var(--color--dark-brown)
}
tr {
  display: flex;
  flex-direction: row;
  padding: 4px 0;
  text-align: center;
  align-items: center;
}
tbody tr {
  border-top: 1px solid rgb(102, 154, 250, 0.2);
}
tbody tr:hover {
  background-color: #fef7e9;
}
.cb-img {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.cb-img-inner {
  width: 100%;
  height: 90px;
  background-size: cover;
  background-position: center;
}
.cb-thead {
  font-size: 20px;
  color: #669afa;
}
.cb-sprice {
  margin: 0;
  padding: 0;
}
.cb-price {
  text-decoration: line-through;
  margin: 0;
  padding: 0;
}
.cb-count {
  font-size: 22px;
  user-select: none;
  cursor: pointer;
}
.cb-count.disabled {
  color: var(--color--brown);
  pointer-events: none;
}
.cb-count:hover {
  color: var(--color--primary);
}
.cb-count-num {
  font-size: 22px;
  user-select: none;
}
tfoot tr {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 0 0 0;
  padding: 16px 0;
  font-size: 20px;
  border-top: 5px solid var(--color--secondary);
}
.cb-delete {
  color: var(--color--dark-brown);
}
.cb-delete:hover {
  color: var(--color--primary);
}
.cb-checkout {
  width: 80%;
  height: 45px;
  background-color: #669afa;
  display: flex;
  margin: 0 auto 16px auto;
  border: none;
  justify-content: center;
  align-items: center;
  color: #fef7e9;
  font-size: 24px;
  user-select: none;
}
.cb-checkout:hover {
  background-color: var(--color--primary);
  color: var(--color--dark-brown);
  box-shadow: 5px 5px 0px var(--color--secondary);
}
@media (max-width: 991px) {
  dialog{
    width: 99vw;
  }
  .cartModal.show-modal {
    transform: translateX(0%);
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  dialog{
    width: 50vw;
  }
  .cartModal.show-modal {
    transform: translateX(49%);
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  dialog{
    width: 38vw;
  }
  .cartModal.show-modal {
    transform: translateX(81%);
  }
}
@media (min-width: 1400px) {
  dialog{
    width: 35vw;
  }
  .cartModal.show-modal {
    transform: translateX(92%);
  }
}
</style>
