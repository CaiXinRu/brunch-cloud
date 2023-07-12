<template>
  <div class="navbar-footer">
    <nav>
      <ul>
        <router-link to="/favorites" class="nf-link">
            <li>
                <span>
                    <font-awesome-icon icon="fa-solid fa-heart" />
                </span>
                <span>我的最愛</span>
            </li>
        </router-link>
        <div @click="showModal()" class="nf-link">
            <li>
                <span>
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </span>
                <span>購物清單</span>
            </li>
        </div>
      </ul>
    </nav>
  </div>
  <CartBar
    id="cartModalNavBarFooter"
    :modelValue="isCartBarOpen"
    @update:modelValue="
      (val) => {
        isCartBarOpen = val
      }
    "
  ></CartBar>
</template>

<script>
import CartBar from '@/components/CartBar.vue'

export default {
  data: () => {
    return {
      isCartBarOpen: false,
      isPopupListOpen: false
    }
  },
  components: {
    CartBar
  },
  methods: {
    showModal () {
      this.isCartBarOpen = true
      const modal = document.getElementById('cartModalNavBarFooter')
      modal.showModal()
    }
  }
}
</script>

<style scoped>
.navbar-footer {
  width: 100vw;
  height: 50px;
  position: sticky;
  bottom: 0;
  background-color: var(--color--secondary);
  z-index: 2;
}
.navbar-footer nav {
  width: 100%;
}
.navbar-footer ul {
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nf-link{
    width: 100%;
    cursor: pointer;
}
li {
  list-style-type: none;
  height: 50px;
  width: 100%;
  overflow: hidden;
}
li > span {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
li > span:nth-child(1) {
  color: var(--color--light-brown);
  background-color: var(--color--secondary);
  font-size: 18px;
}
li > span:nth-child(2) {
  background-color: var(--color--primary);
  color: var(--color--dark-brown);
  font-family: 'Aclonica', 'Montserrat', 'cwTeXYen', 'Helvetica', sans-serif;
  font-size: 18px;
  padding: 0;
}
li:hover span {
  transform: translateY(-100%);
}
CartBar::backdrop {
  background-color: rgb(39, 39, 39, 0.5);
}
@media (max-width: 575px) {
  .navbar-footer {
    display: block;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .navbar-footer {
    display: block;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .navbar-footer {
    display: block;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .navbar-footer {
    display: block;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .navbar-footer {
    display: none;
  }
}
@media (min-width: 1400px) {
  .navbar-footer {
    display: none;
  }
}
</style>
