<template>
  <body>
    <div class="wrapper">
      <div class="bg-color--white">
        <div class="container u-pt-68 u-pb-68">
          <div class="about">
            <div class="about-main">
              <h2>關於 雲端早午安</h2>
              <h4 class="sub-border">BRUNCH IN THE CLUOD</h4>
              <div class="about-main-textsm">
                <span>結合傳統的早午餐元素與現代飲食趨勢，打造獨特而有趣的菜單。</span>
                <span>每個人都有屬於自己的「雲端」，它代表著無限的可能性和自由。</span>
                <span>在「雲端」中，可以品嚐到各式類型的漢堡、三明治、義大利飯麵、炸物點心。</span>
                <span>「雲端」嚴選新鮮食材，注重品質和營養，確保每道菜都能帶給顧客美味和健康。</span>
                <span>「雲端」是舒適和溫馨的，在放鬆身心、享受美食的同時，也能享受到「雲端」般的無拘束感。</span>
                <span>無論是與家人朋友共享一頓美味的早午餐，或是獨自享受寧靜時光，「雲端早午安」都將成為您身、心、胃的理想之地。</span>
              </div>
            </div>
            <div class="about-lists-container">
              <div class="about-lists">
                <div class="about-item">
                  <img class="about-img" src="@/assets/pics/home/1-delicious.jpg" />
                  <img class="about-img-sm" src="@/assets/pics/home/1-delicious-2.jpg" />
                  <div class="about-text">無限美味</div>
                  <div class="about-square-sm">
                    <div class="about-title">無限美味</div>
                    <div class="about-line"></div>
                    <div class="about-slogan">數不盡的雲端獨特</div>
                  </div>
                  <div class="about-square">
                    <div class="about-title">無限美味</div>
                    <div class="about-line"></div>
                    <div class="about-slogan">數不盡的雲端獨特</div>
                  </div>
                </div>
                <div class="about-item">
                  <img class="about-img" src="@/assets/pics/home/2-vegetable.jpg" />
                  <img class="about-img-sm" src="@/assets/pics/home/2-vegetable-2.jpg" />
                  <div class="about-text">新鮮健康</div>
                  <div class="about-square-sm">
                    <div class="about-title">新鮮健康</div>
                    <div class="about-line"></div>
                    <div class="about-slogan">營養豐富的雲端饗宴</div>
                  </div>
                  <div class="about-square">
                    <div class="about-title">新鮮健康</div>
                    <div class="about-line"></div>
                    <div class="about-slogan">營養豐富的雲端饗宴</div>
                  </div>
                </div>
                <div class="about-item">
                  <img class="about-img" src="@/assets/pics/home/3-quality.jpg" />
                  <img class="about-img-sm" src="@/assets/pics/home/3-quality-2.jpg" />
                  <div class="about-text">扎實品質</div>
                  <div class="about-square-sm">
                    <div class="about-title">扎實品質</div>
                    <div class="about-line"></div>
                    <div class="about-slogan">嚴選製程的卓越雲端</div>
                  </div>
                  <div class="about-square">
                    <div class="about-title">扎實品質</div>
                    <div class="about-line"></div>
                    <div class="about-slogan">嚴選製程的卓越雲端</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-color--light-brown">
        <div class="container u-pt-48 u-pb-68">
          <div class="u-text-center u-mb-48">
            <h2>必點首選</h2>
            <h4 class="sub-border">MUST-TRY IN THE CLOUD</h4>
          </div>
          <MoreFood></MoreFood>
          <div class="try-lists">
            <div class="try-list" v-for="(item, index) in foods" :key="index">
              <div class="try-img"></div>
              <h3 class="u-text-center color--black">{{item.food}}</h3>
              <a href="/menu#{{ item.hashtag }}"><h6 class="try-btn">{{item.categoryC}}</h6></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bg-color--white">
        <div class="container u-pt-48 u-pb-56">
          <div class="news-title-sm">
            <h2>最新消息</h2>
            <h4 class="sub-border">NEWS IN THE CLOUD</h4>
          </div>
          <MoreNews></MoreNews>
          <div class="news-lists">
            <div
              class="news-list"
              v-for="(promo, index) in promos"
              :key="index"
            >
              <div class="news-type">{{ promo.typeC }}</div>
              <div class="news-img"></div>
              <p class="sub u-mt-16 u-mb-4">{{ promo.time }}</p>
              <hr class="news-hr" />
              <a href="#"
                ><h3 class="u-mt-16 u-mb-16">{{ promo.event }}</h3></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import MoreFood from '@/components/MoreFood.vue'
import MoreNews from '@/components/MoreNews.vue'

export default {
  name: 'HomeView',
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
        }
      ],
      foods: [
        {
          categoryC: '太空漢堡系列',
          food: '宇宙鮮蝦米堡',
          hashtag: 'ITBurger'
        },
        {
          categoryC: '飄浮吐司系列',
          food: '飛翔龍蝦帕尼尼',
          hashtag: 'ITSandwich'
        },
        {
          categoryC: '柔情飯麵系列',
          food: '青醬天婦羅燉飯',
          hashtag: 'ITRiceNoodles'
        },
        {
          categoryC: '輕盈小點系列',
          food: '紫薯QQ球',
          hashtag: 'ITSnack'
        }
      ]
    }
  },
  components: {
    MoreFood,
    MoreNews
  }
}
</script>

<style scoped>
.about{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-main{
  width: 33%;
  display: flex;
  flex-direction: column;
}
.about-lists-container{
  width: 65%;
  display: flex;
  margin-left: auto;
}
.about-lists {
  width: 100%;
  height: 600px;
  background-color: var(--color--black);
  border-radius: 10px;
  user-select: none;
  display: flex;
  justify-content: center;
}
.about-item{
  flex: 1;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
}
.about-item:hover{
  transform: scale(1.1);
  border-radius: 10px;
  z-index: 1;
}
.about-img, .about-img-sm{
  height: 100%;
  width: 100%;
  filter:brightness(65%);
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
}
.about-item:hover .about-img{
  filter:brightness(100%);
  transform: translateY(-20%);
  transform-origin: center;
}
.about-text {
  width: 100%;
  height: 100%;
  color: var(--color--white);
  font-size: 32px;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  font-weight: bold;
  letter-spacing: 11px;
  opacity: 1;
  transition: all 0.2s ease-in;
}
.about-text:before{
  content: '';
  background-color: #27272749;
  width: 100%;
  height: 100%;
}
.about-item:hover .about-text{
  opacity: 0;
}
.about-square{
  width: 100%;
  height: 30%;
  background-color: var(--color--black);
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease;
}
.about-square-sm{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.about-item:hover .about-square{
  transform: translateY(0);
  z-index: 1;
}
.about-title{
  color: var(--color--light-brown);
  font-size: 48px;
  line-height: 50px;
}
.about-line{
  background-color: var(--color--light-brown);
  width: 70%;
  height: 1px;
  margin: 20px 0;
}
.about-slogan{
  color: var(--color--light-brown);
  font-size: 18px;
}
.try-lists {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(auto, max-content);
  justify-items: center;
  grid-gap: 10px;
  margin-top: 16px;
}
.try-list {
  width: 100%;
  height: auto;
  border: 2px solid #fac664;
  padding: 40px 25px;
  margin: 0px 1px;
  background-color: hsl(40, 91%, 95%);
  border-radius: 50px;
  user-select: none;
  position: relative;
}
.try-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-image: url("https://picsum.photos/180");
  background-size: cover;
  background-position: center;
  width: 180px;
  height: 180px;
}
.try-btn {
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  display: flex;
  height: 50px;
  width: 80%;
  background-color: #fac664;
  color: #644536;
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
}
.try-btn:hover {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
}
.news-lists {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, max-content);
  justify-items: center;
}
.news-type {
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
  font-size: 20px;
  width: fit-content;
  padding: 10px;
  position: relative;
  transform: translate(-15px, 50%);
  z-index: 1;
}
.news-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-image: url("https://picsum.photos/380/300");
  background-size: cover;
  background-position: center;
  width: 380px;
  height: 300px;
}
.news-hr {
  display: block;
  height: 0.5px;
  border: 0;
  border-top: 2px solid #fac664;
  padding: 0;
  margin-bottom: 0px;
}

@media (max-width: 413px) {
  .about{
    flex-direction: column;
  }
  .about-main, .about-lists-container{
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 30px;
  }
  h2{
    font-size: 40px;
  }
  .sub-border{
    -webkit-text-stroke: 1px #644536;
    font-size: 20px;
  }
  .about-main-textsm{
    margin-bottom: 16px;
  }
  .about-lists{
    height: 430px;
    flex-direction: column;
  }
  .about-item:hover {
    transform: scale(1);
  }
  .about-img{
    display: none;
  }
  .about-text{
    display: none;
  }
  .about-square{
    display: none;
  }
  .about-title{
    font-size: 30px;
    line-height: 25px;
  }
  .about-slogan{
    font-size: 15px;
  }

  /* More Food */
  .try-lists{
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0;
    margin-bottom:24px;
  }
  .try-list{
    width: 80%;
  }
  h3{
    font-size: 25px;
  }
  .try-btn{
    font-size: 18px;
  }

  /* More News */
  .news-title-sm{
    text-align: center;
  }
  .news-lists{
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0;
    margin-bottom:24px;
  }
  .news-img{
    width: 285px;
    height: 225px;
  }
  .news-type{
    font-size: 18px;
    padding: 8px;
    transform: translate(-10px, 50%);
  }
}
@media (min-width: 414px) and (max-width: 575px) {
  .about{
    flex-direction: column;
  }
  .about-main, .about-lists-container{
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 30px;
  }
  .about-main-textsm{
    margin-bottom: 16px;
  }
  .about-lists{
    height: 430px;
    flex-direction: column;
  }
  .about-item:hover {
    transform: scale(1);
  }
  .about-img{
    display: none;
  }
  .about-text{
    display: none;
  }
  .about-square{
    display: none;
  }
  .about-title{
    font-size: 30px;
    line-height: 25px;
  }
  .about-slogan{
    font-size: 15px;
  }

  /* More Food */
  .try-lists{
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0;
    margin-bottom:24px;
  }
  .try-list{
    width: 80%;
  }

  /* More News */
  .news-title-sm{
    text-align: center;
  }
  .news-lists{
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0;
    margin-bottom:24px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .about{
    flex-direction: column;
  }
  .about-main, .about-lists-container{
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 30px;
  }
  .about-main-textsm{
    margin-bottom: 16px;
  }
  .about-lists{
    height: 450px;
  }
  .about-img-sm{
    display: none;
  }
  .about-square-sm{
    display: none;
  }
  .about-title{
    font-size: 30px;
    line-height: 25px;
  }
  .about-slogan{
    font-size: 15px;
  }

  /* More Food */
  .try-lists{
    grid-template-columns: repeat(2, 1fr);
    margin-top: 0;
    margin-bottom:24px;
  }
  .try-list h3{
    font-size: 27px;
  }

  /* More News */
  .news-lists{
    grid-template-columns: repeat(1, 1fr);
    margin-top: 0;
    margin-bottom:24px;
  }
  .news-img{
    width: 475px;
    height: 375px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .about{
    flex-direction: column;
  }
  .about-main, .about-lists-container{
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 30px;
  }
  .about-main-textsm{
    margin-bottom: 16px;
  }
  .about-main-textsm span{
    display: block;
  }
  .about-lists{
    height: 450px;
  }
  .about-img-sm{
    display: none;
  }
  .about-square-sm{
    display: none;
  }
  .about-title{
    font-size: 40px;
    line-height: 30px;
  }

  /* More Food */
  .try-lists{
    grid-template-columns: repeat(2, 1fr);
    margin-top: 0;
    margin-bottom:24px;

  }
  /* More News */
  .news-lists{
    grid-template-columns: repeat(1, 1fr);
  }
  .news-img{
    width: 475px;
    height: 375px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .about{
    flex-direction: column;
  }
  .about-main, .about-lists-container{
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 30px;
  }
  .about-main-textsm{
    margin-bottom: 16px;
  }
  .about-main-textsm span{
    display: block;
  }
  .about-lists{
    height: 460px;
  }
  .about-img-sm{
    display: none;
  }
  .about-square-sm{
    display: none;
  }

  /* More Food */
  .try-lists{
    grid-template-columns: repeat(2, 1fr);
    margin-top: 0;
    margin-bottom:24px;
  }

  /* More News */
  .news-img{
    width: 287px;
    height: 240px;
  }
  .news-list h3{
    font-size: 26px;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .about-lists{
    height: 510px;
  }
  .sub-border{
    font-size: 26px;
  }
  .about-img-sm{
    display: none;
  }
  .about-square-sm{
    display: none;
  }

  /* More Food */
  h3{
    font-size: 30px;
  }

  /* More News */
  .news-img{
    width: 342px;
    height: 270px;
  }
}
@media (min-width: 1400px) {
  .about-square-sm{
    display: none;
  }
  .about-img-sm{
    display: none;
  }
}
</style>
