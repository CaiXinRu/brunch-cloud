<template>
  <div>
    <dialog
      id="promoModal"
      ref="promoModal"
      :class="{ 'show-modal': isLanding }"
    >
      <a class="promo-close" @click="closeModal">
        <font-awesome-icon icon="fa-solid fa-circle-xmark" />
      </a>
      <div class="promo-container">
        <img class="im-pic" :src="Promotions[promo.img]" :alt="promo.detail" />
        <br />
        <div class="promo-title">▎活動時間:</div>
        <div class="promo-text">{{ promo.timeC }}</div>
        <div class="promo-title">▎活動說明：</div>
        <div class="promo-text">{{ promo.detail }}</div>
      </div>
    </dialog>
  </div>
</template>

<script>
import Promotions from '@/assets/js/promotions.js'
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    id: {
      required: true
    },
    promos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isLanding: false,
      promo: {},
      image: null,
      Promotions: Promotions
    }
  },
  components: {},
  methods: {
    async getPromo () {
      this.promo = this.promos.find((promo) => promo.id === this.id)
      console.log(this.promo)
      const modal = this.$refs.promoModal
      modal.showModal()
      this.isLanding = true
    },
    closeModal () {
      this.$emit('update:modelValue', false)
      this.$refs.promoModal.close()
      this.isLanding = false
    }
  },
  watch: {
    modelValue () {
      if (this.modelValue) {
        this.getPromo()
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
  width: 60vw;
  height: max-content;
  background-color: #fef7e9;
  z-index: 20;
}
dialog:focus-visible {
  outline: none;
}
#promoModal {
  opacity: 0.5;
  transform: translateY(-50px);
  transition: all 1s ease;
}
#promoModal.show-modal {
  opacity: 1;
  transform: translateY(0);
  position: fixed;
}
dialog::backdrop {
  background-color: rgb(39, 39, 39, 0.5);
}

.promo-close {
  font-size: 40px;
  z-index: 1;
  position: absolute;
  right: 20px;
  color: #644536;
  cursor: pointer;
}
.promo-close:hover {
  color: #fac664;
}
.promo-close:active {
  color: #fac664;
}
.promo-container {
  display: flex;
  padding: 60px 40px 0px 40px;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.im-pic {
  height: 510px;
  align-self: center;
}
.promo-title {
  font-size: 24px;
  color: var(--color--dark-brown);
  line-height: 35px;
}
.promo-text {
  font-size: 22px;
  color: var(--color--black);
  line-height: 30px;
}

// RWD
@media (max-width: 413px) {
  dialog {
    width: 100vw;
  }
  .promo-container {
    padding: 60px 0px 0px 0px;
  }
  .im-pic {
    height: 180px;
  }
}
@media (min-width: 414px) and (max-width: 575px) {
  dialog {
    width: 100vw;
  }
  .promo-container {
    padding: 60px 0px 0px 0px;
  }
  .im-pic {
    height: 275px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  dialog {
    width: 100vw;
  }
  .promo-container {
    padding: 60px 0px 0px 0px;
  }
  .im-pic {
    height: 390px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  dialog {
    width: 100vw;
  }
  .im-pic {
    height: 480px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  dialog {
    width: 70vw;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  dialog {
    width: 70vw;
  }
}
@media (min-width: 1400px) {
}
</style>
