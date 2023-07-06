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
      <div class="dropdown">
        <button class="dropbtn" @click="toggleDropdown">請選擇類別<span>▼</span></button>
        <div :class="{ 'dropdown-content': true, 'show': isDropdownOpen }">
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
        <div class="news-list" v-for="(promo, index) in filteredPromos" :key="index">
          <div class="news-type">{{promo.typeC}}</div>
          <div class="news-img"></div>
          <p class="sub u-mt-16 u-mb-4">{{promo.time}}</p>
          <hr class="news-hr" />
          <a href="#"
            ><div class="news-text">{{promo.event}}</div></a
          >
        </div>
      </div>
      <div class="news-arrow" @click="goToTop"><font-awesome-icon icon="fa-solid fa-circle-up" /></div>
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
      selectedType: 'all',
      isDropdownOpen: false
    }
  },
  components: {
    NewsBar
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
  },
  mounted () {
    window.addEventListener('click', this.closeDropdown)
    if (window.location.hash && window.location.hash !== '') {
      const el = document.querySelector(window.location.hash)
      if (el !== null) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy () {
    window.removeEventListener('click', this.closeDropdown)
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
.show{
  display: block;
}

.news-lists{
  display: grid;
  width: 100%;
  grid-auto-rows: minmax(auto, max-content);
  justify-items: center;
}
.news-type{
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
  width: fit-content;
  position: relative;
  transform: translate(-15px, 50%) ;
  z-index: 1;
}
.news-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-image: url("https://picsum.photos/380/300");
  background-size: cover;
  background-position: center;
}
.news-hr {
  display: block;
  height: 0.5px;
  border: 0;
  border-top: 2px solid #fac664;
  padding: 0;
  margin-bottom: 0px;
}
.news-text{
  margin: 16px 0;
  font-weight: 400;
  line-height: 40px;
  margin-top: 24px;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}
.news-arrow{
  font-size: 50px;
  color: var(--color--primary);
  align-self: flex-end;
  cursor: pointer;
}
@media (max-width: 991px){
  .promo-type{
    display: none;
  }
  .dropdown{
    display: inline-block;
  }
  .news-lists{
    grid-template-columns: repeat(1, 1fr);
  }
  .news-type{
    font-size: 20px;
    padding: 10px;
  }
  .news-img{
    width: 417px;
    height: 330px;
  }
  .news-text{
    font-size: 34px;
  }
}
@media (min-width: 992px) and (max-width: 1199px){

  .promo-btn{
    min-width: 7.23em;
    font-size: 1.25rem;
  }
  .promo-btn:before{
    width: 3.2em;
    height: 3.2em;
  }
  .promo-btn:hover:before{
    left: 13%;
  }
  .promo-btn:after{
    width: 3.8em;
    height: 3.8em;
  }
  .promo-btn:hover:after{
    right: 10%;
  }
  .promo-type{
    display: flex;
  }
  .dropdown{
    display: none;
  }
  .news-lists{
    grid-template-columns: repeat(2, 1fr);
  }
  .news-type{
    font-size: 20px;
    padding: 10px;
  }
  .news-img{
    width: 380px;
    height: 300px;
  }
  .news-text{
    font-size: 34px;
  }
}
@media (min-width: 1200px) and (max-width: 1399px){

  .promo-btn{
    min-width: 7.23em;
    font-size: 1.25rem;
  }
  .promo-btn:before{
    width: 3.2em;
    height: 3.2em;
  }
  .promo-btn:hover:before{
    left: 13%;
  }
  .promo-btn:after{
    width: 3.8em;
    height: 3.8em;
  }
  .promo-btn:hover:after{
    right: 10%;
  }
  .promo-type{
    display: flex;
  }
  .dropdown{
    display: none;
  }
  .news-lists{
    grid-template-columns: repeat(3, 1fr);
  }
  .news-type{
    font-size: 18px;
    padding: 8px;
  }
  .news-img{
    width: 342px;
    height: 270px;
  }
  .news-text{
    font-size: 32px;
  }
}
@media (min-width: 1400px){
  .promo-btn{
    min-width: 7.23em;
    font-size: 1.25rem;
  }
  .promo-btn:before{
    width: 3.2em;
    height: 3.2em;
  }
  .promo-btn:hover:before{
    left: 13%;
  }
  .promo-btn:after{
    width: 3.8em;
    height: 3.8em;
  }
  .promo-btn:hover:after{
    right: 10%;
  }
  .promo-type{
    display: flex;
  }
  .dropdown{
    display: none;
  }
  .news-lists{
    grid-template-columns: repeat(3, 1fr);
  }
  .news-type{
    font-size: 20px;
    padding: 10px;
  }
  .news-img{
    width: 380px;
    height: 300px;
  }
  .news-text{
    font-size: 34px;
  }
}
</style>
