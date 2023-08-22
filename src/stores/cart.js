import { defineStore } from 'pinia'
import axios from 'axios'
import $httpMessageState from '@/methods/pushMessageState'

export default defineStore('cart', {
  // 定義狀態初始值
  state: () => ({
    isLoading: false,
    cart: {},
    status: {
      loadingItem: ''
    },
    $httpMessageState
  }),
  // 對狀態加工的 getters，如同 computed
  getters: {},
  // 定義使用到的函式，可以為同步和非同步，如同 method
  actions: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      axios.get(api).then((res) => {
        console.log(res.data.data.carts.length)
        this.cart = res.data.data
        this.isLoading = false
      })
    },
    updateCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(api, { data: cart })
        .then((res) => {
          // console.log(res)
          this.status.loadingItem = ''
          this.getCart()
        })
    },
    plusCount (item) {
      item.qty += 1
      this.updateCart(item)
    },
    minusCount (item) {
      if (item.qty > 1) {
        item.qty -= 1
        this.updateCart(item)
      } else if (item.qty === 1) {
        this.removeCartItem(item.id)
      }
    },
    removeCartItem (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      axios.delete(api)
        .then((res) => {
          this.$httpMessageState(res, '移除購物車品項')
          this.getCart()
          this.isLoading = false
        })
    }
  }
})
