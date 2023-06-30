<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <NewsBar id="newsTop"></NewsBar>
      <div class="promo-type">
        <button
          data-type="north"
          class="promo-btn"
          @click="filterPromos('discount')"
        >
          超瞎趴活動
        </button>
        <button
          data-type="middle"
          class="promo-btn"
          @click="filterPromos('gift')"
        >
          滿x佰就送
        </button>
        <button
          data-type="south"
          class="promo-btn"
          @click="filterPromos('code')"
        >
          爽領八折碼
        </button>
        <button
          data-type="east"
          class="promo-btn"
          @click="filterPromos('all')"
        >
          最完整促銷
        </button>
      </div>
      <div class="news-lists">
        <div class="news-list" v-for="(promo, index) in filteredPromos" :key="index">
          <div class="news-type">{{promo.typeC}}</div>
          <img src="https://picsum.photos/380/300" class="u-center-block" />
          <p class="sub u-mt-16 u-mb-4">{{promo.time}}</p>
          <hr class="news-hr" />
          <a href="#"
            ><h3 class="u-mt-16 u-mb-16">{{promo.event}}</h3></a
          >
        </div>
      </div>
      <a class="news-arrow" href="#newsTop"><font-awesome-icon icon="fa-solid fa-circle-up" /></a>
    </div>
  </div>
</template>

<script>
import NewsBar from '@/components/NewsBar'
export default {
  data () {
    return {
      promos: [
        {
          type: 'discount',
          typeC: '超瞎趴活動',
          time: '2023 JUL. / AUG.',
          event: '暑期雲端全面打九折！'
        },
        {
          type: 'gift',
          typeC: '滿X佰就送',
          time: '2023 JUL.',
          event: '限量！滿五佰送雲端環保袋'
        },
        {
          type: 'code',
          typeC: '爽領八折碼',
          time: '2023 JUL.',
          event: 'X新資料夾：主持人筆畫？'
        },
        {
          type: 'discount',
          typeC: '超瞎趴活動',
          time: '2023 JUN.',
          event: 'Google五星好評折50'
        },
        {
          type: 'gift',
          typeC: '滿X佰就送',
          time: '2023 JUN.',
          event: '限量！滿兩佰送雲端Ｑ徽章'
        },
        {
          type: 'code',
          typeC: '爽領八折碼',
          time: '2023 JUN.',
          event: 'X百靈果：創立時間？'
        },
        {
          type: 'discount',
          typeC: '超瞎趴活動',
          time: '2023 MAY.',
          event: '四人有「雲」一人免錢'
        },
        {
          type: 'gift',
          typeC: '滿X佰就送',
          time: '2023 MAY.',
          event: '限量！滿仟送雲端餐具'
        },
        {
          type: 'code',
          typeC: '爽領八折碼',
          time: '2023 MAY.',
          event: 'X股癌：第一本書？'
        }
      ],
      selectedType: ''
    }
  },
  components: {
    NewsBar
  },
  methods: {
    filterPromos (type) {
      this.selectedType = type
    }
  },
  computed: {
    filteredPromos () {
      // 根據選取的地區過濾資料
      if (this.selectedType === '' || this.selectedType === 'all') {
        return this.promos
      } else {
        return this.promos.filter(
          (promo) => promo.type === this.selectedType
        )
      }
    }
  }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.promo-type {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.promo-btn {
  display: flex;
  text-align: center;
  justify-content: center;
  background: #fac664;
  color: #272727;
  font-weight: 600;
  padding: 1.18em 1.32em 1.03em;
  line-height: 1;
  border-radius: 38px;
  position: relative;
  min-width: 7.23em;
  text-decoration: none;
  font-size: 1.25rem;
  z-index: 2;
  margin-bottom: 30px;
}
.promo-btn:hover {
  color: #fef7e9;
}
.promo-btn:before {
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
.promo-btn:after {
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
.promo-btn:hover:before {
  top: -40%;
  left: 13%;
  transform: scale(1);
}
.promo-btn:hover:after {
  top: -60%;
  right: 10%;
  transform: scale(1);
}
.news-lists{
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, max-content);
  justify-items: center;
}
.news-type{
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
  font-size: 20px;
  width: fit-content;
  padding: 10px;
  position: relative;
  transform: translate(-15px, 50%) ;
  z-index: 1;
}
.news-hr {
  display: block;
  height: 0.5px;
  border: 0;
  border-top: 2px solid #fac664;
  padding: 0;
  margin-bottom: 0px;
}
.news-arrow{
  font-size: 50px;
  color: var(--color--primary);
  align-self: flex-end;
  cursor: pointer;
}
</style>
