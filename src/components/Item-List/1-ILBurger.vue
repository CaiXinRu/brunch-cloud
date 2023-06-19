<template>
    <div class="item-list">
      <div
        v-for="(item, index) in items"
        :key="'food' + index"
        class="item-per"
      >
        <font-awesome-icon
          v-if="item.like"
          @click="item.like = !item.like"
          icon="fa-solid fa-heart"
          class="heart"
        />
        <font-awesome-icon
          v-else
          @click="item.like = !item.like"
          icon="fa-regular fa-heart"
          class="heart"
        />
        <a id="show" @click="showModal()"
          ><img src="https://picsum.photos/180" class="u-center-block"
        /></a>
        <span class="u-text-center item-text"
          ><a @click="showModal()">{{ item.name }}</a></span
        >
        <ul>
          <li>
            <span class="item-add">
              <a class="item-add-icon" @click="showModal()"
                ><font-awesome-icon icon="fa-solid fa-cart-plus"
              /></a>
            </span>
            <span class="item-price">{{ item.priceUnit + item.price }}</span>
          </li>
        </ul>
        <ILBurgerModal
          :modelValue="isModalVisible"
          @update:modelValue="
            (val) => {
              isModalVisible = val
            }
          "
        ></ILBurgerModal>
      </div>
    </div>
</template>

<script>
import ILBurgerModal from './1-ILBurgerModal.vue'
export default {
  data () {
    return {
      items: [
        {
          name: '鱈魚龍蝦沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          like: false
        },
        {
          name: '鱈魚龍蝦沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          like: false
        },
        {
          name: '鱈魚龍蝦沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          like: false
        },
        {
          name: '鱈魚龍蝦沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          like: false
        },
        {
          name: '鱈魚龍蝦沙拉漢堡',
          price: 80,
          priceUnit: 'NT$',
          like: false
        }
      ],
      isModalVisible: false
    }
  },
  components: {
    ILBurgerModal
  },
  methods: {
    showModal () {
      this.isModalVisible = true
      const modal = document.getElementById('itemModal')
      modal.showModal()
    }
  }
}
</script>

<style>
.item-list {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item-per {
  background-color: #fef7e9;
  padding: 80px 25px 28px 25px;
  margin: 10px 10px;
  border-radius: 50px;
  width: 295px;
  height: auto;
  user-select: none;
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
</style>
