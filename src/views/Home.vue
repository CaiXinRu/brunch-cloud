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
                  結氣西口更。手雪玩相方「未首時各送毛語」水哪原弓和放枝、喜習鴨校可坐黑裝三幸七反雨乞。原巾豆毛個兆耳民第采。
                  牛空屋乙占別院鼻喜視種子波笑借看害課貓。它母帽間尺拉士士世帽半上固花寫欠助。音間故平卜未？了車坐消詞。蛋步勿姐主次再邊去綠品，隻汁公泉穴燈冰蝶黑。
                  犬室雨清綠步教婆頁現。土好常節午高畫肖鳥，門寫要免鳥弓丟喝裏人雄外春忍完，奶停常尺您是二跑澡波丁良追山目巾家服，下壯右高眼蝴申生訴寺玉三海苗那許火走中，村魚怕神尤。
                </p>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="u-ml-48">
                <img
                  src="https://picsum.photos/750/500"
                  class="u-center-block"
                />
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
              <router-link to="/menu#menuTop" data-category="ITBurger"><h6 class="try-btn">太空漢堡系列</h6></router-link>
            </div>
            <div class="try-list u-mt-16">
              <img src="https://picsum.photos/180" class="u-center-block" />
              <h3 class="u-text-center color--black">火腿巧克力吐司</h3>
              <router-link to="/menu#ITSandwich" data-category="ITsandwich"><h6 class="try-btn">飄浮吐司系列</h6></router-link>
            </div>
            <div class="try-list u-mt-16">
              <img src="https://picsum.photos/180" class="u-center-block" />
              <h3 class="u-text-center color--black">煙燻鮭魚義大利麵</h3>
              <a href="#" data-category="ITrice&noodles"><h6 class="try-btn">柔嫩飯麵系列</h6></a>
            </div>
            <div class="try-list u-mt-16">
              <img src="https://picsum.photos/180" class="u-center-block" />
              <h3 class="u-text-center color--black">低脂舒肥雞胸沙拉</h3>
              <a href="#" data-category="ITsnack"><h6 class="try-btn">輕盈小點系列</h6></a>
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
            <div class="news-list" v-for="(promo, index) in promos" :key="index">
              <div class="news-type">{{promo.typeC}}</div>
              <img src="https://picsum.photos/380/300" class="u-center-block" />
              <p class="sub u-mt-16 u-mb-4">{{promo.time}}</p>
              <hr class="news-hr" />
              <a href="#"
                ><h3 class="u-mt-16 u-mb-16">{{promo.event}}</h3></a
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
.try-lists{
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
.try-btn:hover{
  background-color: var(--color--secondary);
  color: var(--color--light-brown);
  box-shadow: 5px 5px 0px var(--color--primary);
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
</style>
