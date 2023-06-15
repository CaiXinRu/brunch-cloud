<template>
  <table style="width: 100%" class="cl-table">
    <thead>
      <tr class="cl-head">
        <th style="width: 20%">品名</th>
        <th style="width: 20%">備註</th>
        <th style="width: 20%">單價</th>
        <th style="width: 20%">數量</th>
        <th style="width: 20%">小計</th>
        <th style="width: 10%"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        style="height: 100px"
        class="color--dark-brown cl-body"
        v-for="(item, index) in items"
        :key="'item' + index"
      >
        <td style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.note }}</td>
        <td style="width: 20%">
          特價{{ item.priceUnit }}{{ item.price * 0.8 }}
        </td>
        <td style="width: 20%" class="cl-number">
          <div>
            <font-awesome-icon
              icon="fa-regular fa-square-plus"
              @click="plusCount(item)"
              class="cl-count"
            />
          </div>
          <div class="u-ml-48 u-mr-48">{{ item.count }}</div>
          <div>
            <font-awesome-icon
              icon="fa-regular fa-square-minus"
              @click="minusCount(item)"
              class="cl-count"
            />
          </div>
        </td>
        <td style="width: 20%">
          <div>{{ item.priceUnit }}{{ item.price * 0.8 * item.count }}</div>
        </td>
        <td style="width: 10%">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="cl-bottom">
    <table>
      <tr>
        <td class="clc-input">
          <input
            autocomplete="off"
            type="text"
            name="coupon"
            placeholder="請輸入優惠碼..."
          />
        </td>
        <td><button class="clc-btn">套用優惠碼</button></td>
      </tr>
      <tr class="cl-total">
        <td style="width: 100%">總價</td>
        <td style="width: 80%">{{ priceUnit }}{{ total }}</td>
      </tr>
      <tr>
        <td style="width: 100%">
          <button class="cl-checkBtn" type="submit">送出訂單</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      total: 128,
      priceUnit: 'NT$',
      items: [
        {
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
        }
      ]
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

<style scoped>
.cl-table {
  margin: 48px 0 48px 0;
}
tr {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.cl-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
}
.cl-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
  border-right: 3px solid #fac664;
  border-left: 3px solid #fac664;
}
.cl-body:hover {
  background-color: #fef7e9;
}

.co-price {
  height: 1px;
  width: max-content;
  padding: 0 5px;
  margin: 8px 0;
  background-color: #c0b5a0;
  text-align: center;
  line-height: 1px;
}
.cl-count {
  font-size: 30px;
  user-select: none;
}
.cl-number {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cl-bottom {
  width: 100%;
  margin: 0 0 56px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.clc-input {
  width: 250px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #c0b5a0;
  display: flex;
  align-items: center;
}
.clc-input:focus-within {
  border: 3px solid #fac664;
}
.clc-input input {
  border: none;
  background: transparent;
  margin-left: 5px;
  color: #fac664;
  font-size: 20px;
}
.clc-input input:focus-visible {
  outline: none;
}
.clc-btn {
  height: 60px;
  width: 200px;
  background-color: #fac664;
  color: #644536;
  font-size: 18px;
}
.cl-total {
  font-size: 32px;
  color: #644536;
  margin: 16px 0;
}
.cl-checkBtn {
  height: 40px;
  width: 450px;
  background-color: #fac664;
  color: #644536;
  font-size: 20px;
  font-weight: 600;
}
</style>
