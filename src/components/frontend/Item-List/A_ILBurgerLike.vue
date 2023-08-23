<template>
  <LodingPage v-if="isLoading" />
  <div class="item-list">
    <div v-for="item in filteredProducts" :key="item.id" class="item-per">
      <font-awesome-icon
        v-if="item.like"
        @click="toggleLike(item)"
        icon="fa-solid fa-heart"
        class="heart"
      />
      <font-awesome-icon
        v-else
        @click="toggleLike(item)"
        icon="fa-regular fa-heart"
        class="heart"
      />
      <a href="#" id="show" @click.prevent="openModal(item)"
        ><div
          class="item-img"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
        ></div>
      </a>
      <span class="u-text-center item-text"
        ><a href="#" @click.prevent="openModal(item)">{{ item.title }}</a></span
      >
      <ul>
        <li>
          <span class="item-add">
            <a href="#" class="item-add-icon" @click.prevent="openModal(item)"
              ><font-awesome-icon icon="fa-solid fa-cart-plus"
            /></a>
          </span>
          <span class="item-price">NT$ {{ item.origin_price }}</span>
        </li>
      </ul>
    </div>
  </div>
  <ILBurgerModal
    ref="burgerModal"
    :tempProduct="tempProduct"
    :modelValue="isModalVisible"
    @update:modelValue="
      (val) => {
        isModalVisible = val
      }
    "
  />
</template>

<script>
import ILBurgerModal from './A_ILBurgerModal.vue'
import LodingPage from '@/components//LodingPage.vue'
import { mapState, mapActions } from 'pinia'
import productStore from '@/stores/likes.js'
export default {
  data () {
    return {
      isModalVisible: false,
      filteredProducts: [],
      tempProduct: {}
    }
  },
  components: {
    ILBurgerModal,
    LodingPage
  },
  computed: {
    ...mapState(productStore, ['isLoading', 'products', 'filteredLikes'])
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'toggleLike']),
    openModal (item) {
      this.tempProduct = { ...item }
      this.isModalVisible = true
      this.$refs.burgerModal.showModal()
    }
  },
  watch: {
    products: {
      handler () {
        this.filteredProducts = this.filteredLikes.filter(
          (item) => item.category === '太空漢堡'
        )
      }
    },
    immediate: true
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style>
.item-list {
  display: grid;
  grid-auto-rows: minmax(auto, max-content);
  grid-gap: 10px;
  justify-items: start;
}

.item-per {
  background-color: #fef7e9;
  padding: 80px 25px 28px 25px;
  border-radius: 50px;
  width: 100%;
  height: auto;
  user-select: none;
  position: relative;
}
.item-per a {
  cursor: pointer;
}
.heart {
  color: #fa7864;
  font-size: 32px;
  position: absolute;
  top: 8%;
  right: 14%;
  cursor: pointer;
}
.item-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center;
}
.item-text {
  display: block;
  font-family: 'Montserrat', 'cwTeXYen', 'Helvetica', 'Noto Sans TC', 'Roboto',
    'Arial', 'LiHei Pro', '黑體-繁', '微軟正黑體', sans-serif;
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}
.item-per li {
  display: flex;
  align-items: center;
}
.item-per ul {
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item-price {
  display: inline-block;
  width: auto;
  height: auto;
  font-size: 16px;
  background-color: #669afa;
  color: #fef7e9;
  padding: 10px 15px;
  line-height: 18px;
  margin: auto 10px;
  border-radius: 22px;
  text-align: center;
}
.item-add-icon {
  color: #669afa;
  font-size: 24px;
}
.item-add-icon:hover {
  color: #fac664;
}
.item-add-icon:active {
  color: #e3bac6;
}

@media (max-width: 575px) {
  .item-list {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
  .item-img {
    height: 250px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .item-list {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  .item-img {
    height: 180px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .item-list {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  .item-img {
    height: 180px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .item-list {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  .item-img {
    height: 180px;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .item-list {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
  .item-img {
    height: 180px;
  }
}
@media (min-width: 1400px) {
  .item-list {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
  .item-img {
    height: 180px;
  }
}
</style>
