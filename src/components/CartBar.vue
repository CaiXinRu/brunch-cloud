<template>
    <div :class="['cb-container', modelValue? 'show' : '']">
      <div class="cb-head">
          <div class="cbh-close" @click="$emit('update:modelValue', false)"><font-awesome-icon icon="fa-solid fa-angle-right" /></div>
          <div class="cbh-text">購物清單</div>
        <!-- <div @click="$emit('update:modelValue', false)">Close</div> -->
      </div>
      <thead class="u-mt-16 u-ml-4 u-mr-4">
        <tr class="cb-thead">
          <th style="width:20%"></th>
          <th style="width:30%">品名</th>
          <th style="width:20%">單價</th>
          <th style="width:20%">數量</th>
          <th style="width:10%"></th>
        </tr>
      </thead>
      <div class="cb-content">
        <table style="width:100%">
          <tbody>
            <tr class="color--dark-brown" v-for="(item, index) in items" :key="'item'+index">
              <td style="width:20%" class="cb-img"><img style="width: 100%" src="https://picsum.photos/90" /></td>
              <td style="width:30%">{{item.name}}<br>(備註：{{ item.note }})</td>
              <td style="width:20%">
                <p class="cb-sprice">特價{{item.priceUnit}}{{ item.price * 0.8 }}</p>
                <p class="color--brown cb-price">原價{{item.priceUnit}}{{ item.price }}</p>
              </td>
              <td style="width:20%">
                <div class="cb-number">
                  <font-awesome-icon
                    class="cb-count"
                    icon="fa-regular fa-square-plus"
                    @click="plusCount(item)"
                  />
                  <div class="cb-count">{{item.count}}</div>
                  <font-awesome-icon
                    class="cb-count"
                    icon="fa-regular fa-square-minus"
                    @click="minusCount(item)"
                  />
                </div>
              </td>
              <td style="width:10%"><font-awesome-icon icon="fa-solid fa-trash-can" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <tfoot>
        <tr>
          <td style="width:20%" class="color--secondary">總價</td>
          <td style="width:30%" class="color--dark-brown">NT$128</td>
        </tr>
        <router-link to="/BrunchInCloud/checkout" class="cb-checkout">
          <div class="cbb-text">訂單結帳</div>
        </router-link>
      </tfoot>
    </div>
</template>
<script scoped>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  data: () => {
    return {
      isOpen: true,
      items: [{
        name: '鱈魚龍蝦沙拉漢堡',
        price: 80,
        priceUnit: 'NT$',
        count: 1,
        note: '不加生菜'
      },
      {
        name: '鮭魚麻辣沙拉漢堡',
        price: 80,
        priceUnit: 'NT$',
        count: 1,
        note: '不加生菜'
      },
      {
        name: '鮭魚麻辣沙拉漢堡',
        price: 80,
        priceUnit: 'NT$',
        count: 1,
        note: '不加生菜'
      },
      {
        name: '鮭魚麻辣沙拉漢堡',
        price: 80,
        priceUnit: 'NT$',
        count: 1,
        note: '不加生菜'
      },
      {
        name: '鮭魚麻辣沙拉漢堡',
        price: 80,
        priceUnit: 'NT$',
        count: 1,
        note: '不加生菜'
      },
      {
        name: '鮭魚麻辣沙拉漢堡',
        price: 80,
        priceUnit: 'NT$',
        count: 1,
        note: '不加生菜'
      },
      {
        name: '鮭魚麻辣沙拉漢堡',
        price: 80,
        priceUnit: 'NT$',
        count: 1,
        note: '不加生菜'
      }]
    }
  },
  methods: {
    plusCount (items) {
      items.count += 1
    },
    minusCount (items) {
      if (items.count > 1) {
        items.count -= 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cb-container{
  width: 35vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: fixed;
  top: 0;
  right: -100%;
  transition: all 1s ease;
  &.show{
    right:0;
  }
}
.cb-content{
  overflow: auto;
  height: max-content;
  flex:1;
}
.cb-head{
  width: 100%;
  height: 120px;
  background-color: #669AFA;
  display: flex;
  flex-direction: row;
  border-bottom: 5px solid var(--color--primary);
  justify-content: center;
  align-items: center;
}
.cbh-close{
  color: #FEF7E9;
  font-size: 32px;
  position: absolute;
  left: 20px;
}
.cbh-text{
  color: #FEF7E9;
  font-size: 24px;
  display: flex;
}
tr {
  display: flex;
  flex-direction: row;
  padding: 4px 0;
  text-align: center;
  align-items: center;
}
tbody tr {
  border-top: 1px solid rgb(102, 154, 250, 0.2);
}
tbody tr:hover {
  background-color: #FEF7E9;
}
.cb-img{
  display: flex;
  justify-content: center;
  align-items: center;
}
.cb-thead{
  font-size: 20px;
  color: #669AFA;
}
.cb-sprice{
  margin: 0;
  padding: 0;
}
.cb-price {
  text-decoration: line-through;
  margin: 0;
  padding: 0;
}
.cb-count{
  font-size: 22px;
  user-select: none;
}
tfoot tr{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 0 0 0;
  padding: 16px 0;
  font-size: 20px;
  border-top: 5px solid var(--color--secondary);
}
.cb-checkout{
  width: 80%;
  height: 45px;
  background-color: #669AFA;
  display: flex;
  margin: 0 auto 16px auto;
}
.cbb-text{
  color: #FEF7E9;
  font-size: 24px;
  margin: 0 auto;
  line-height: 45px;
}
</style>
