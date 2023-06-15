<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <LocationBar></LocationBar>
      <div class="location-area">
        <button data-area="north" class="location-btn">北部地區</button>
        <button data-area="middle" class="location-btn">中部地區</button>
        <button data-area="south" class="location-btn">南部地區</button>
        <button data-area="east" class="location-btn">東部地區</button>
      </div>
      <table style="width: 100%" class="location-table">
        <thead>
          <tr class="location-head">
            <th style="width: 20%">門市名稱</th>
            <th style="width: 20%">訂餐專線</th>
            <th style="width: 60%">門市位置</th>
          </tr>
        </thead>
        <tbody>
          <tr style="height: 60px" class="location-body" v-for="(location, index) in locations" :key="index">
            <td style="width: 20%">{{location.store}}</td>
            <td style="width: 20%">{{location.tel}}</td>
            <td style="width: 60%">{{location.address}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LocationBar from '@/components/locations/LocationBar.vue'
export default {
  data () {
    return {
      locations: [{
        store: '臺北北醫莊敬店',
        tel: '02-8732-8088',
        address: '台北市信義區莊敬路260巷13號',
        area: 'north'
      },
      {
        store: '臺北台大公館店',
        tel: '02-2378-0699',
        address: '台北市中正區羅斯福路137巷29號',
        area: 'north'
      },
      {
        store: '台中一中尊賢店',
        tel: '04-2225-6010',
        address: '台中市北區尊賢街3-1號',
        area: 'middle'
      },
      {
        store: '台中逢甲福星店',
        tel: '04-2707-9178',
        address: '台中市西屯區福星路22巷40號',
        area: 'middle'
      }]
    }
  },
  components: {
    LocationBar
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.location-area {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.location-btn {
  display: flex;
  text-align: center;
  justify-content: center;
  background: #fac664;
  color: #272727;
  font-weight: bold;
  padding: 1.18em 1.32em 1.03em;
  line-height: 1;
  border-radius: 38px;
  position: relative;
  min-width: 7.23em;
  text-decoration: none;
  font-family: var(--font);
  font-size: 1.25rem;
  z-index: 2;
  margin-bottom: 55px;
}
.location-btn:hover {
  color: #fef7e9;
}
.location-btn:before {
  width: 3.2em;
  height: 3.2em;
  position: absolute;
  content: '';
  display: flex;
  background: #fac664;
  border-radius: 50%;
  transition: 1s ease;
  z-index: -1;

  top: 0%;
  left: 13%;
  transform: scale(0.65);
  transition: all 0.5s;
}
.location-btn:after {
  width: 3.8em;
  height: 3.8em;
  position: absolute;
  content: '';
  display: flex;
  background: #fac664;
  border-radius: 50%;
  transition: 1s ease;
  z-index: -1;

  top: 0%;
  right: 10%;
  transform: scale(0.65);
  transition: all 1s ease;
}
.location-btn:hover:before {
  top: -40%;
  left: 13%;
  transform: scale(1);
}
.location-btn:hover:after {
  top: -60%;
  right: 10%;
  transform: scale(1);
}

.location-table {
  margin: 0 0 56px 0;
}
tr, th {
  display: flex;
  flex-direction: row;
  padding: 0 0 0 16px;
  text-align: start;
  align-items: center;
  justify-content: flex-start;
}
.location-head {
  color: #644536;
  background-color: #fac664;
  font-size: 18px;
  line-height: 50px;
  padding: 0;
}
.location-body {
  font-size: 20px;
  border-bottom: 3px solid #fac664;
}
</style>
