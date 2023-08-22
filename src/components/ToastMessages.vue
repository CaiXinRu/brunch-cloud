<template>
  <div
    class="toast-container position-absolute pe-3 top-0 end-0"
    style="z-index: 1050"
  >
    <ToastPage v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import ToastPage from '@/components/ToastPage.vue'
export default {
  components: { ToastPage },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    // message外部傳來的資訊
    this.emitter.on('push-message', (message) => {
      // 將外部傳來的資訊傳進定義的變數
      const { style = 'success', title, content } = message
      // 並且推送到我們的訊息列表裡
      this.messages.push({ style, title, content })
    })
  }
}
</script>

<style scoped>
.toast-container{
    position: fixed;
    right: 0;
    top: 80px;
}
</style>
