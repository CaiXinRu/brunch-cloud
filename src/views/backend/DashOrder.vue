<template>
  <div>
    <LoadingPage v-if="isLoading" />
    <div class="bg-color--white">
      <div class="container u-pt-48 u-pb-68">
        <table style="width: 100%" class="do-table">
          <thead>
            <tr class="do-head">
              <th style="width: 20%">購買時間</th>
              <th style="width: 30%">Email</th>
              <th style="width: 30%">購買項目</th>
              <th style="width: 20%">應付金額</th>
              <th style="width: 10%">項目檢視</th>
              <th style="width: 10%">是否刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style="height: auto"
              class="color--dark-brown do-body"
              v-for="item in orders"
              :key="item.id"
            >
              <td style="width: 20%">{{ $filters.date(item.create_at) }}</td>
              <td style="width: 30%">{{ item.user.email }}</td>
              <td style="width: 30%" class="do-litems">
                <ol>
                  <li v-for="product in item.products" :key="product.id">
                    {{ product.product.title }}：{{ product.qty }} 份
                  </li>
                </ol>
              </td>
              <td style="width: 20%">
                NT${{ $filters.currency(Math.round(item.total)) }}
              </td>
              <td style="width: 10%">
                <button
                  type="button"
                  class="color--dark-brown"
                  @click="openOrderModal(false, item)"
                >
                  <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </button>
              </td>
              <td style="width: 10%">
                <button
                  type="button"
                  class="color--dark-brown"
                  @click="openDelOrderModal(item)"
                >
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <DashOrderModal
      :order="tempOrder"
      ref="orderModal"
      @update-paid="updatePaid"
    />
    <DashDelModal :item="tempOrder" ref="delModal" @del-item="delOrder" />
  </div>
</template>

<script>
import DashOrderModal from '@/components/backend/DashOrderModal.vue'
import DashDelModal from '@/components/backend/DashDelModal.vue'
import LoadingPage from '@/components/LodingPage.vue'
export default {
  components: {
    DashOrderModal,
    DashDelModal,
    LoadingPage
  },
  props: {
    config: Object
  },
  data () {
    return {
      orders: {},
      isLoading: false,
      isNew: false,
      tempOrder: {},
      currentPage: 1,
      pagination: {}
    }
  },
  methods: {
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`
      this.isLoading = true
      this.$http.get(api, this.tempProduct).then((res) => {
        this.orders = res.data.orders
        console.log(this.orders)
        this.pagination = res.data.pagination
        this.isLoading = false
        console.log(res)
      })
    },
    openOrderModal (item) {
      this.tempOrder = { ...item }
      this.isNew = false
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    updatePaid (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid }).then((res) => {
        this.isLoading = false
        this.getOrders(this.currentPage)
      })
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(url).then((res) => {
        console.log(res)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getOrders(this.currentPage)
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.do-table {
  margin: 48px 0 48px 0;
}
tr {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.do-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
}
.do-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
}
.do-body:hover {
  background-color: #fef7e9;
}
.do-litems {
  display: flex;
  text-align: left;
  padding-left: 40px;
}
</style>
