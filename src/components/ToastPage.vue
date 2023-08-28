<template>
    <div
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref="toast"
    >
        <div class="toast-header">
          <span
              :class="`bg-${msg.style}`"
              class="p-2 rounded me-2 d-inline-block"
          ></span>
          <strong class="me-auto">{{ msg.title }}</strong>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
          ></button>
        </div>
        <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
        </div>
    </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
  props: ['msg'],
  // 啟動自己的生命週期時
  mounted () {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, {
      delay: 6000 // 啟動六秒鐘
    })
    toast.show()
  }
}
</script>

<style scoped>
.toast{
  --bs-toast-header-color: #634536 !important;
  --bs-toast-header-bg: #fde2b4 !important;
}
.toast-header{
  justify-content: flex-end
}
.toast-body{
  text-align: right;
}
</style>
