<template>
  <body>
    <div class="wrapper">
      <div class="bg-color--white">
        <div class="container u-pt-68 u-pb-68">
          <div class="row u-pl-48">
            <div class="col-sm-4 d-flex align-items-center">
              <div>
                <h2>關於 雲端早午安</h2>
                <h4 class="sub-border">BRUNCH IN THE CLUOD</h4>
                <p>
                  結合傳統的早午餐元素與現代飲食趨勢，打造獨特而有趣的菜單。我們相信每個人都有屬於自己的「雲端」，代表著無限的可能性和自由。
                  您可以在這「雲端」品嚐到各種類型的漢堡、三明治、義大利飯麵和炸物點心。我們嚴選新鮮食材，注重品質和營養，確保每道菜都能帶給顧客美味和健康。
                  在這空間裡，它是舒適和溫馨的。在放鬆身心、享受美食的同時，也能享受到「雲端」般的無拘束感。它是一個社區的聚集地，無論是與家人朋友共享一頓美味的早午餐，或是獨自享受寧靜時光，「雲端早午安」都將成為您身、心、胃的理想之地。
                </p>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="u-ml-32 about-lists">
                <div class="about-item">
                  <img style="height: 100%; width: 100%" src="@/assets/pics/home/1-delicious.jpg" />
                  <div class="about-text">無限美味</div>
                  <div class="about-square">
                    <div class="about-title">無限美味</div>
                    <div class="about-line"></div>
                    <div class="about-slogan">數不盡的雲端獨特</div>
                  </div>
                </div>
                <div class="about-item">
                  <img style="height: 100%; width: 100%" src="@/assets/pics/home/2-vegetable.jpg" />
                  <div class="about-text">新鮮健康</div>
                  <div class="about-square">
                    <div class="about-title">新鮮健康</div>
                    <div class="about-line"></div>
                    <div class="about-slogan">營養豐富的雲端饗宴</div>
                  </div>
                </div>
                <div class="about-item">
                  <img style="height: 100%; width: 100%" src="@/assets/pics/home/3-quality.jpg" />
                  <div class="about-text">扎實品質</div>
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
            <h2>必點首選！</h2>
            <h4 class="sub-border">MUST-TRY IN THE CLOUD</h4>
          </div>
          <EatMore></EatMore>
          <div class="try-lists">
            <div class="try-list u-mt-16">
              <img src="https://picsum.photos/180" class="u-center-block" />
              <h3 class="u-text-center color--black">鱈魚龍蝦沙拉漢堡</h3>
              <a href="/menu#ITBurger" data-category="ITBurger"
                ><h6 class="try-btn">太空漢堡系列</h6></a
              >
            </div>
            <div class="try-list u-mt-16">
              <img src="https://picsum.photos/180" class="u-center-block" />
              <h3 class="u-text-center color--black">火腿巧克力吐司</h3>
              <a href="/menu#ITSandwich" data-category="ITsandwich"
                ><h6 class="try-btn">飄浮吐司系列</h6></a
              >
            </div>
            <div class="try-list u-mt-16">
              <img src="https://picsum.photos/180" class="u-center-block" />
              <h3 class="u-text-center color--black">煙燻鮭魚義大利麵</h3>
              <a href="#" data-category="ITrice&noodles"
                ><h6 class="try-btn">柔嫩飯麵系列</h6></a
              >
            </div>
            <div class="try-list u-mt-16">
              <img src="https://picsum.photos/180" class="u-center-block" />
              <h3 class="u-text-center color--black">低脂舒肥雞胸沙拉</h3>
              <a href="#" data-category="ITsnack"
                ><h6 class="try-btn">輕盈小點系列</h6></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bg-color--white">
        <div class="container u-pt-48 u-pb-56">
          <div>
            <h2>最新消息！</h2>
            <h4 class="sub-border">NEWS IN THE CLOUD</h4>
          </div>
          <SeeMore></SeeMore>
          <div class="news-lists">
            <div
              class="news-list"
              v-for="(promo, index) in promos"
              :key="index"
            >
              <div class="news-type">{{ promo.typeC }}</div>
              <img src="https://picsum.photos/380/300" class="u-center-block" />
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
import EatMore from '@/components/EatMore.vue'
import SeeMore from '@/components/SeeMore.vue'

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
      ]
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    EatMore,
    SeeMore
  }
}
</script>

<style scoped>
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
.about-item img{
  filter:brightness(75%);
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
}
.about-item:hover img {
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
}
.try-list {
  width: 100%;
  height: auto;
  border: 2px solid #fac664;
  padding: 40px 25px;
  margin: 0px 1px;
  background-color: #fef7e9;
  border-radius: 50px;
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
.news-hr {
  display: block;
  height: 0.5px;
  border: 0;
  border-top: 2px solid #fac664;
  padding: 0;
  margin-bottom: 0px;
}
</style>
