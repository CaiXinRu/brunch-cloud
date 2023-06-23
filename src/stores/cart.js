import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('cart', {
  // 定義狀態初始值
  state: () => ({
    isLoadingStore: false,
    cartStore: undefined
  }),
  // 對狀態加工的 getters，如同 computed
  getters: {},
  // 定義使用到的函式，可以為同步和非同步，如同 method
  actions: {
    getCartStore () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoadingStore = true
      axios.get(api).then((response) => {
        console.log(response)
        this.cartStore = response.data.data
        this.isLoadingStore = false
      })
    }
  }
})
