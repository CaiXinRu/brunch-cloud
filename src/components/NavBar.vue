<template>
  <header>
    <div class="navbar bg-color--secondary">
      <div class="container">
        <div class="logo">
          <router-link to="/"><img src="@/assets/logo/logo_light-brown.png" alt="雲端早午安"/></router-link>
        </div>
        <div class="list-toggle-sm">
          <div class="list-toggle" @click="isPopupListOpen=true">
            <div class="list-sub">See More</div>
            <font-awesome-icon class="list-icon" icon="fa-solid fa-angles-up" />
          </div>
        </div>
        <div class="list-bar">
          <ul class="list">
            <li>
              <router-link to="/menu" class="main-font" date-link-alt="MENU"
                ><span>雲端美味</span></router-link
              >
            </li>
            <li><p class="color--light-brown main-font-1">｜</p></li>
            <li>
              <router-link
                to="/promotions"
                class="main-font"
                date-link-alt="PROMOTIONS"
                ><span>促銷優惠</span></router-link
              >
            </li>
            <li><p class="color--light-brown main-font-1">｜</p></li>
            <li>
              <router-link
                to="/locations"
                class="main-font"
                date-link-alt="LOCATIONS"
                ><span>門市據點</span></router-link
              >
            </li>
          </ul>
        </div>
        <div id="popup-list" :class="{'list-bar-sm': true, 'popup-open':isPopupListOpen} ">
          <a class="list-close-sm" @click="isPopupListOpen=false">
            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
          </a>
          <ul class="list-sm">
            <li>
              <img class="list-img-sm" src="@/assets/logo/logo+word_hor.png" alt="雲端早午安"/>
            </li>
            <li>
              <router-link to="/menu" class="main-font-sm" date-link-alt="MENU" @click="isPopupListOpen=false"
                ><span>雲端美味</span></router-link
              >
            </li>
            <li>
              <router-link
                to="/promotions"
                class="main-font-sm"
                date-link-alt="PROMOTIONS"
                @click="isPopupListOpen=false"
                ><span>促銷優惠</span></router-link
              >
            </li>
            <li>
              <router-link
                to="/locations"
                class="main-font-sm"
                date-link-alt="LOCATIONS"
                @click="isPopupListOpen=false"
                ><span>門市據點</span></router-link
              >
            </li>
          </ul>
        </div>
        <div class="top-right-btn">
          <nav>
            <ul>
              <li>
                <span>
                  <font-awesome-icon icon="fa-solid fa-heart" />
                  <div v-if="filteredLikes.length > 0" class="number-cart">{{ filteredLikes.length }}</div>
                </span>
                <span>
                  <router-link to="/favorites">我的最愛</router-link>
                </span>
              </li>
              <li>
                <span>
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                  <div v-if="cart?.carts?.length" class="number-cart">{{ this.cart?.carts?.length }}</div>
                </span>
                <span>
                  <a @click="showModal()">購物清單</a>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <CartBar id="cartModalNavBar" :modelValue="isCartBarOpen" @update:modelValue="(val)=>{isCartBarOpen = val}"/>
  </header>
</template>

<script>
import CartBar from '@/components/CartBar.vue'
import { mapState, mapActions } from 'pinia'
import useCartStore from '@/stores/cart.js'
import productStore from '@/stores/likes.js'

export default {
  name: 'NavBar',
  data: () => {
    return {
      isCartBarOpen: false,
      isPopupListOpen: false
    }
  },
  components: {
    CartBar
  },
  computed: {
    ...mapState(productStore, ['isLoading', 'products', 'filteredLikes']),
    ...mapState(useCartStore, ['cart'])
  },
  methods: {
    ...mapActions(useCartStore, [
      'getCart'
    ]),
    ...mapActions(productStore, [
      'getProducts',
      'toggleLike'
    ]),
    showModal () {
      this.isCartBarOpen = true
      const modal = document.getElementById('cartModalNavBar')
      modal.showModal()
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.navbar {
  height: auto;
}
.logo {
  margin: auto;
  overflow: hidden;
  height: 115px;
  display: flex;
  align-items: center;
}
.logo img {
  width: 180px;
}
.list-bar {
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.list {
  list-style-type: none;
}
.list > li {
  float: left;
}
.main-font-1 {
  font-size: 24px;
  margin: 0 20px;
  font-weight: 500;
  display: block;
  overflow: hidden;
}
.main-font {
  font-size: 24px;
  margin: 0 20px;
  padding: 0 18px;
  font-weight: 500;
  display: block;
  overflow: hidden;
  color: var(--color--primary);
}
.main-font span {
  color: var(--color--light-brown);
  display: block;
  transition: 1s;
}
.main-font:hover span {
  transform: translateY(-100%);
}
.main-font:before {
  position: absolute;
  content: attr(date-link-alt);
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  font-size: 16px;
  opacity: 0;
  transition: 1s;
}
.main-font:hover:before {
  top: 0;
  opacity: 1;
}
.list-toggle-sm{
  width: 100%;
  justify-content: center;
}
.list-toggle{
  color: var(--color--light-brown);
  font-size: 32px;
  cursor: pointer;
  z-index: 1;
  margin: 5px 0 0 0;
  width: max-content;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.list-toggle:hover{
  color: var(--color--primary);
}
.list-toggle:focus{
  color: var(--color--primary);
}
.list-sub{
  font-family: 'Aclonica', "Helvetica", sans-serif;
}
.list-icon{
  margin: 5px 0 0 0;
}

.list-bar-sm{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: -100%;
  left: 0;
  background-color: var(--color--secondary);
  display: block;
  z-index: 15;
  transition: all 1s ease;
}
.list-bar-sm.popup-open{
  top: 0;
}
.list-bar-sm.popup-open{
  top: 0;
}
.list-img-sm{
  width: 400px;
  overflow: hidden;
  top: 30px;
}
.list-close-sm{
  font-size: 48px;
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 5;
  color: var(--color--primary);
  cursor: pointer;
}
.list-close-sm:hover {
  color: var(--color--light-brown);
}
.list-close-sm:active {
  color: var(--color--light-brown);
}
.list-sm{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.main-font-sm {
  font-size: 32px;
  line-height: 132px;
  padding: 0 30px;
  font-weight: 500;
  display: block;
  overflow: hidden;
  color: var(--color--primary);
}
.main-font-sm span {
  color: var(--color--light-brown);
  display: block;
  transition: 1s;
}
.main-font-sm:hover span {
  transform: translateY(-100%);
}
.main-font-sm:before {
  position: absolute;
  content: attr(date-link-alt);
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  font-size: 24px;
  opacity: 0;
  transition: 0.5s ease;
}
.main-font-sm:hover:before {
  top: 0;
  opacity: 1;
}

.top-right-btn {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 10%;
  right: 0%;
}
.top-right-btn nav {
    width: 18vw;
  }
.top-right-btn ul {
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top-right-btn li {
  list-style-type: none;
  height: 50px;
  width: 90px;
  overflow: hidden;
}
.top-right-btn li > span {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.top-right-btn li > span:nth-child(1) {
  color: var(--color--light-brown);
  background-color: var(--color--secondary);
  font-size: 18px;
}
.top-right-btn li > span:nth-child(2) {
  background-color: var(--color--light-brown);
}
li:hover span {
  transform: translateY(-100%);
}
.top-right-btn a {
  color: var(--color--secondary);
  font-family: 'Aclonica', 'Montserrat', 'cwTeXYen', 'Helvetica', sans-serif;
  font-size: 18px;
  text-align: center;
}
.top-right-btn a:hover {
  color: var(--color--secondary);
}
.number-cart{
  line-height: 20px;
  background-color: var(--color--light-brown);
  border: 3px solid var(--color--primary);
  color: var(--color--secondary);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  right: 16px;
  top: 25px;
  font-size: 12px;
}
CartBar::backdrop {
  background-color: rgb(39, 39, 39, 0.5);
}

/* RWD */
@media (max-width: 575px) {
  .list-bar{
    display: none;
  }
  .list-toggle-sm{
    display: flex;
  }
  .list-img-sm{
    width: 250px;
  }
  .top-right-btn{
    display: none;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .list-bar{
    display: none;
  }
  .list-toggle-sm{
    display: flex;
  }
  .top-right-btn{
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .list-bar{
    display: flex;
  }
  .list-toggle-sm{
    display: none;
  }
  .top-right-btn{
    display: none;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .list-bar{
    display: flex;
  }
  .list-toggle-sm{
    display: none;
  }
  .top-right-btn{
    display: none;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .list-bar{
    display: flex;
  }
  .list-toggle-sm{
    display: none;
  }
  .top-right-btn{
    display: flex;
  }
}
@media (min-width: 1400px) {
  .list-bar{
    display: flex;
  }
  .list-toggle-sm{
    display: none;
  }
  .top-right-btn{
    display: flex;
  }
}
</style>
