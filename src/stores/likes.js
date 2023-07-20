import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('product', {
  // 定義狀態初始值
  state: () => ({
    isLoading: false,
    products: [],
    filteredLikes: []
  }),
  // 定義使用到的函式，可以為同步和非同步，如同 method
  actions: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      axios.get(api).then((res) => {
        this.products = res.data.products
        const likeIdArrStr = localStorage.getItem('likeIdArr')
        if (likeIdArrStr) {
          const likeIdArr = JSON.parse(likeIdArrStr)
          for (const id of likeIdArr) {
            for (const prod of this.products) {
              if (prod.id === id) {
                prod.like = true
              }
            }
          }
        }
        this.filteredLikes = this.products.filter((item) => item.like)
        this.isLoading = false
      })
    },
    toggleLike (item) {
      item.like = !item.like
      const likeIdArr = []
      for (const prod of this.products) {
        if (prod.like) {
          likeIdArr.push(prod.id)
        }
      }
      localStorage.setItem('likeIdArr', JSON.stringify(likeIdArr))
      this.filteredLikes = this.products.filter((item) => item.like)
    }
  }
})
