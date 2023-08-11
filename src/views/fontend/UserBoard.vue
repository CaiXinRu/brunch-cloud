<template>
  <div class="sticky-footer">
    <NavBarSm class="sticky-top" :style="{ top: navbarTop }" />
    <NavBar />
    <router-view />
    <FooterBar class="sticky-footer-bar" />
    <NavBarFooter />
  </div>
</template>

<script>
import NavBar from '@/components/frontend/NavBar.vue'
import NavBarSm from '@/components/frontend/NavBarSm.vue'
import FooterBar from '@/components/frontend/FooterBar.vue'
import NavBarFooter from '@/components/frontend/NavBarFooter.vue'

export default {
  data () {
    return {
      navbarTop: '-50%'
    }
  },
  components: {
    NavBar,
    NavBarSm,
    FooterBar,
    NavBarFooter
  },
  mounted () {
    window.addEventListener('scroll', this.scrollFunction)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.scrollFunction)
  },
  methods: {
    scrollFunction () {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.navbarTop = '0'
      } else {
        this.navbarTop = '-50%'
      }
    }
  }
}
</script>

<style scoped>
.sticky-footer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.sticky-top {
  position: fixed;
  left: 0px;
  width: 100vw;
  z-index: 10;
  height: fit-content;
  transition: 0.5s all ease;
}
</style>
