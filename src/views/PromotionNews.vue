<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <NewsBar id="newsTop"/>
      <div class="promo-type">
        <button
          type="button"
          data-type="north"
          class="promo-btn"
          @click="filterPromos('discount')"
        >
          超瞎趴活動
        </button>
        <button
          type="button"
          data-type="middle"
          class="promo-btn"
          @click="filterPromos('gift')"
        >
          滿x佰就送
        </button>
        <button
          type="button"
          data-type="south"
          class="promo-btn"
          @click="filterPromos('code')"
        >
          爽領八折碼
        </button>
        <button
          type="button" data-type="east" class="promo-btn" @click="filterPromos('all')">
          最完整促銷
        </button>
      </div>
      <div class="dropdown">
        <button
          type="button" class="dropbtn" @click="toggleDropdown">
          請選擇類別<span>▼</span>
        </button>
        <div :class="{ 'dropdown-content': true, show: isDropdownOpen }">
          <div
            data-type="north"
            class="dropdown-btn"
            @click="filterPromos('discount')"
          >
            超瞎趴活動
          </div>
          <div
            data-type="middle"
            class="dropdown-btn"
            @click="filterPromos('gift')"
          >
            滿x佰就送
          </div>
          <div
            data-type="south"
            class="dropdown-btn"
            @click="filterPromos('code')"
          >
            爽領八折碼
          </div>
          <div
            data-type="east"
            class="dropdown-btn"
            @click="filterPromos('all')"
          >
            最完整促銷
          </div>
        </div>
      </div>
      <div class="news-lists">
        <div
          class="news-list"
          v-for="(promo, index) in filteredPromos"
          :key="index"
        >
          <div class="news-type">{{ promo.typeC }}</div>
          <img
            class="news-img"
            :src="Promotions[promo.img]"
            @click="showModal(promo.id)"
          />
          <p class="sub u-mt-16 u-mb-4">{{ promo.time }}</p>
          <hr class="news-hr" />
          <div class="news-text" @click.prevent="showModal(promo.id)">{{ promo.event }}</div>
        </div>
      </div>
      <div class="news-arrow" @click="goToTop">
        <font-awesome-icon icon="fa-solid fa-circle-up" />
      </div>
    </div>
  </div>
  <PromotionModal
    :id="promoId"
    :promos="promos"
    :modelValue="isModalVisible"
    @update:modelValue="
      (val) => {
        isModalVisible = val
      }
    "/>
</template>

<script>
import NewsBar from '@/components/NewsBar'
import PromotionModal from '@/components/PromotionModal.vue'
import Promotions from '@/assets/js/promotions.js'
export default {
  data () {
    return {
      promos: [
        {
          type: 'discount',
          typeC: '超瞎趴活動',
          time: '2023 JUL. / AUG.',
          timeC: '2023年 7/1（六）～8/31（四）',
          event: '暑期雲端全面打九折！',
          detail: '活動期間，凡購買雲端餐點品項，一律九折！（此活動可與其他優惠合併使用。）',
          img: '1.jpeg',
          id: 'discount1'
        },
        {
          type: 'gift',
          typeC: '滿X佰就送',
          time: '2023 JUL.',
          timeC: '2023年 7/1（六）～7/31（二）',
          event: '限量！滿五佰送雲端手提袋',
          detail: '活動期間，凡購買雲端餐點品項額滿NT$500，即送「雲端早午安」特製環保手提袋！（限600件，恕無法指定或挑選樣式及顏色。此活動可與其他優惠合併使用。）',
          img: '4.jpeg',
          id: 'gift1'
        },
        {
          type: 'code',
          typeC: '爽領八折碼',
          time: '2023 JUL. / AUG.',
          timeC: '2023年 7/1（六）～8/31（四）',
          event: 'X呱吉：本名筆畫字數？',
          detail: '呱吉也來支持「雲端早午安」！凡在活動期間，答出優惠碼（如圖提示），結帳時主動輸入，即可再享八折優惠。（此活動可與其他優惠合併使用。）',
          img: '7.jpeg',
          id: 'code1'
        },
        {
          type: 'discount',
          typeC: '超瞎趴活動',
          time: '2023 JUN.',
          timeC: '2023年 6/1（四）～6/30（五）',
          event: 'Google五星好評折50',
          detail: '活動期間，至「雲端早午安」Google商店留下五星好評，總餐點價格立折NT$50！（訂單需滿百元即可享折扣。乙件訂單限折乙次。此活動可與其他優惠合併使用。）',
          img: '2.jpeg',
          id: 'discount2'
        },
        {
          type: 'gift',
          typeC: '滿X佰就送',
          time: '2023 JUN.',
          timeC: '2023年 6/1（四）～6/30（五）',
          event: '限量！滿兩佰送雲端Ｑ徽章',
          detail: '活動期間，凡購買雲端餐點品項額滿NT$200，即送「雲端早午安」特製Q版徽章！（限700件，恕無法指定或挑選樣式及顏色）',
          img: '5.jpeg',
          id: 'gift2'
        },
        {
          type: 'code',
          typeC: '爽領八折碼',
          time: '2023 JUN.',
          timeC: '2023年 6/1（四）～6/30（五）',
          event: 'X百靈果：成立時間？',
          detail: '百靈果也來支持「雲端早午安」！凡在活動期間，答出優惠碼（如圖提示），結帳時主動輸入，即可再享八折優惠。（此活動可與其他優惠合併使用。）',
          img: '8.jpeg',
          id: 'code2'
        },
        {
          type: 'discount',
          typeC: '超瞎趴活動',
          time: '2023 MAY.',
          timeC: '2023年 5/1（一）～5/31（三）',
          event: '四人有「雲」一人免錢',
          detail: '活動期間，如姓名有「ㄩㄣˊ」字，並購買四種以上的主食餐點品項（漢堡、三明治、飯麵），一份主食餐點即可免費！（免費餐點由低價折扣。此活動可與其他優惠合併使用。）',
          img: '3.jpeg',
          id: 'discount3'
        },
        {
          type: 'gift',
          typeC: '滿X佰就送',
          time: '2023 MAY.',
          timeC: '2023年 5/1（一）～5/31（三）',
          event: '限量！滿仟送雲端餐具',
          detail: '活動期間，凡購買雲端餐點品項額滿NT$1,000，即送「雲端早午安」特製餐具套組！（限500件，恕無法指定或挑選樣式及顏色）',
          img: '6.jpeg',
          id: 'gift3'
        },
        {
          type: 'code',
          typeC: '爽領八折碼',
          time: '2023 MAY.',
          timeC: '2023年 5/1（一）～5/31（三）',
          event: 'X股癌：第一本書？',
          detail: '癌大也來支持「雲端早午安」！凡在活動期間，答出優惠碼（如圖提示），結帳時主動輸入，即可再享八折優惠。（此活動可與其他優惠合併使用。）',
          img: '9.jpeg',
          id: 'code3'
        }
      ],
      Promotions: Promotions,
      selectedType: 'all',
      isDropdownOpen: false,
      isModalVisible: false,
      promoId: ''
    }
  },
  components: {
    NewsBar,
    PromotionModal
  },
  methods: {
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    closeDropdown (event) {
      if (!event.target.matches('.dropbtn')) {
        this.isDropdownOpen = false
      }
    },
    filterPromos (type) {
      this.selectedType = type
    },
    goToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    showModal (id) {
      this.promoId = id
      this.isModalVisible = true
    }
  },
  computed: {
    filteredPromos () {
      if (this.selectedType === '' || this.selectedType === 'all') {
        return this.promos
      } else {
        return this.promos.filter((promo) => promo.type === this.selectedType)
      }
    }
  },
  mounted () {
    window.addEventListener('click', this.closeDropdown)
    setTimeout(() => {
      if (window.location.hash && window.location.hash !== '' && window.location.hash.split('#').length > 2) {
        const el = document.querySelector('#' + window.location.hash.split('#')[window.location.hash.split('#').length - 1])
        if (el !== null) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 2000)
  },
  beforeUnmount () {
    window.removeEventListener('click', this.closeDropdown)
  }
}
</script>

<style scoped>
.container {
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

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 55px;
}
.dropbtn {
  background-color: var(--color--brown);
  color: var(--color--white);
  width: 100%;
  font-size: 1.25rem;
  display: flex;
  justify-content: flex-start;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
.dropdown:hover .dropbtn {
  background-color: var(--color--primary);
}
.dropbtn span {
  font-size: 18px;
  position: absolute;
  right: 3%;
  line-height: 18px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--color--light-brown);
  width: 100%;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
.dropdown-btn {
  justify-content: center;
  color: var(--color--dark-brown);
  padding: 16px 0;
  text-decoration: none;
  display: flex;
  cursor: pointer;
}
.dropdown-btn:hover {
  background-color: var(--color--white);
}
.show {
  display: block;
}

.news-lists {
  display: grid;
  width: 100%;
  grid-auto-rows: minmax(auto, max-content);
  justify-items: center;
}
.news-type {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
  width: fit-content;
  position: relative;
  transform: translate(-15px, 50%);
  z-index: 1;
}
.news-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.news-hr {
  display: block;
  height: 0.5px;
  border: 0;
  border-top: 2px solid #fac664;
  padding: 0;
  margin-bottom: 0px;
}
.news-text {
  margin: 16px 0;
  font-weight: 400;
  line-height: 40px;
  margin-top: 24px;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  cursor: pointer;
}
.news-text:hover{
  color: var(--color--secondary);
}
.news-arrow {
  font-size: 50px;
  color: var(--color--primary);
  align-self: flex-end;
  cursor: pointer;
}

/* RWD */
@media (max-width: 991px) {
  .promo-type {
    display: none;
  }
  .dropdown {
    display: inline-block;
  }
  .news-lists {
    grid-template-columns: repeat(1, 1fr);
  }
  .news-type {
    font-size: 20px;
    padding: 10px;
  }
  .news-img {
    width: 417px;
    height: 330px;
  }
  .news-text {
    font-size: 34px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .promo-btn {
    min-width: 7.23em;
    font-size: 1.25rem;
  }
  .promo-btn:before {
    width: 3.2em;
    height: 3.2em;
  }
  .promo-btn:hover:before {
    left: 13%;
  }
  .promo-btn:after {
    width: 3.8em;
    height: 3.8em;
  }
  .promo-btn:hover:after {
    right: 10%;
  }
  .promo-type {
    display: flex;
  }
  .dropdown {
    display: none;
  }
  .news-lists {
    grid-template-columns: repeat(2, 1fr);
  }
  .news-type {
    font-size: 20px;
    padding: 10px;
  }
  .news-img {
    width: 380px;
    height: 300px;
  }
  .news-text {
    font-size: 34px;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .promo-btn {
    min-width: 7.23em;
    font-size: 1.25rem;
  }
  .promo-btn:before {
    width: 3.2em;
    height: 3.2em;
  }
  .promo-btn:hover:before {
    left: 13%;
  }
  .promo-btn:after {
    width: 3.8em;
    height: 3.8em;
  }
  .promo-btn:hover:after {
    right: 10%;
  }
  .promo-type {
    display: flex;
  }
  .dropdown {
    display: none;
  }
  .news-lists {
    grid-template-columns: repeat(3, 1fr);
  }
  .news-type {
    font-size: 18px;
    padding: 8px;
  }
  .news-img {
    width: 342px;
    height: 270px;
  }
  .news-text {
    font-size: 32px;
  }
}
@media (min-width: 1400px) {
  .promo-btn {
    min-width: 7.23em;
    font-size: 1.25rem;
  }
  .promo-btn:before {
    width: 3.2em;
    height: 3.2em;
  }
  .promo-btn:hover:before {
    left: 13%;
  }
  .promo-btn:after {
    width: 3.8em;
    height: 3.8em;
  }
  .promo-btn:hover:after {
    right: 10%;
  }
  .promo-type {
    display: flex;
  }
  .dropdown {
    display: none;
  }
  .news-lists {
    grid-template-columns: repeat(3, 1fr);
  }
  .news-type {
    font-size: 20px;
    padding: 10px;
  }
  .news-img {
    width: 380px;
    height: 300px;
  }
  .news-text {
    font-size: 34px;
  }
}
</style>
