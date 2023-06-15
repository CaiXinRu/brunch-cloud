<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <table style="width: 100%" class="dp-table">
        <thead>
            <tr class="dp-head">
                <th style="width: 20%">餐點類別</th>
                <th style="width: 20%">餐點名稱</th>
                <th style="width: 20%">原價</th>
                <th style="width: 20%">特價</th>
                <th style="width: 20%">是否啟用</th>
                <th style="width: 20%">是否編輯</th>
                <th style="width: 20%">是否刪除</th>
            </tr>
            </thead>
            <tbody>
            <tr
                style="height: 50px"
                class="color--dark-brown dp-body"
            >
                <td style="width: 20%">太空漢堡</td>
                <td style="width: 20%">龍蝦沙拉漢堡</td>
                <td style="width: 20%">NT$80</td>
                <td style="width: 20%">NT$64</td>
                <td style="width: 20%"><span class="color--positive">啟用</span></td>
                <td style="width: 20%">
                    <button><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>
                </td>
                <td style="width: 20%">
                    <button><font-awesome-icon icon="fa-solid fa-trash-can" /></button>
                </td>
            </tr>
            </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.dp-table {
  margin: 48px 0 48px 0;
}
tr {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.dp-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
}
.dp-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
}
.dp-body:hover {
  background-color: #fef7e9;
}
</style>
