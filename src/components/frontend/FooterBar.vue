<template>
  <body>
    <footer>
      <div class="bg-color--light-brown">
        <div class="container">
          <div class="footer">
            <div class="logo">
              <img src="@/assets/img/logo/logo+word_ver.png" alt="雲端早午安"/>
            </div>
            <div class="footer-content">
              <div class="footer-text color--secondary">
                營業時間 05:30~14:30 (最後點餐時間14:15)
              </div>
              <div class="footer-text color--secondary">加盟專線 0975-173513</div>
              <div class="footer-text color--secondary">
                電子郵件 brunchincloud@gmail.com
              </div>
              <div class="footer-text color--brown">
                本網站僅供個人作品使用，無作任何商業用途｜
                <router-link
                  to="/login" class="footer-login"
                  >登入後台</router-link
                >
              </div>
            </div>
            <div class="footer-content-sm">
              <div class="footer-text color--secondary">
                營業時間&nbsp;<span>05:30~14:30 (最後點餐時間14:15)</span>
              </div>
              <div class="footer-text color--secondary">加盟專線&nbsp;<span>0975-173513</span></div>
              <div class="footer-text color--secondary">
                電子郵件&nbsp;<span>brunchincloud@gmail.com</span>
              </div>
              <div class="footer-text color--brown">
                本網站僅供個人作品使用，<span>無作任何商業用途</span>
              </div>
              <router-link
                  to="/login" class="footer-text footer-login"
                  >｜登入後台｜
              </router-link>
              <div class="footer-icons-sm">
                <div>
                  <a
                    href="https://line.me/ti/p/5AZebOZFkr"
                    target="_blank"
                    class="footer-icon-1"
                    ><font-awesome-icon icon="fa-brands fa-line"
                  /></a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/lu.kyuhyun/"
                    target="_blank"
                    class="footer-icon"
                    ><font-awesome-icon icon="fa-brands fa-square-facebook"
                  /></a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/lu_kyuhyun/"
                    target="_blank"
                    class="footer-icon"
                    ><font-awesome-icon icon="fa-brands fa-square-instagram"
                  /></a>
                </div>
                <div>
                  <a
                    href="https://github.com/CaiXinRu"
                    target="_blank"
                    class="footer-icon"
                    ><font-awesome-icon icon="fa-brands fa-square-github"
                  /></a>
                </div>
              </div>
            </div>
            <div class="footer-icons">
              <div>
                <a
                  href="https://line.me/ti/p/5AZebOZFkr"
                  target="_blank"
                  class="footer-icon-1"
                  ><font-awesome-icon icon="fa-brands fa-line"
                /></a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/lu.kyuhyun/"
                  target="_blank"
                  class="footer-icon"
                  ><font-awesome-icon icon="fa-brands fa-square-facebook"
                /></a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/lu_kyuhyun/"
                  target="_blank"
                  class="footer-icon"
                  ><font-awesome-icon icon="fa-brands fa-square-instagram"
                /></a>
              </div>
              <div>
                <a
                  href="https://github.com/CaiXinRu"
                  target="_blank"
                  class="footer-icon"
                  ><font-awesome-icon icon="fa-brands fa-square-github"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<style scoped>
.container{
  padding: 16px 0;
}
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo{
  overflow: hidden;
  display: flex;
  position: absolute;
  left: 11%;
  z-index: 1;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 151px;
}
.footer-text {
  display: flex;
  margin: 8px 0;
  font-size: 18px;
  letter-spacing: 0.1em;
}
.footer-login {
  color: #c0b5a0;
}
.footer-login:hover{
  color: #fac664;
}
.footer-login:active{
  color: #e3bac6;
}
.footer-icons {
  width: max-content;
  height: 110px;
}
.footer-icon-1 {
  color: #fac664;
  font-size: 32px;
}
.footer-icon {
  color: #fac664;
  margin-left: 8px;
  font-size: 34px;
}

@media (max-width: 575px){
  .container{
    padding-top: 0;
  }
  .footer {
    flex-direction: column;
    justify-content: flex-start;
  }
  .logo[data-v-f906bf10] {
    overflow: hidden;
    display: flex;
    position: relative;
    left: -5px;
    bottom: -15px;
}
  .footer-content {
    display:none;
  }
  .footer-content-sm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer-text{
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer-text span{
    display: block;
  }
  .footer-login{
    font-size: 20px;
  }
  .footer-icons-sm{
    display: flex;
  }
  .footer-icon-1{
    margin: 0px;
  }
  .footer-icons{
    display: none;
  }
}
@media (min-width: 576px) and (max-width: 767px){
  .footer {
    justify-content: flex-start;
  }
  .logo{
    left: -5%;
  }
  .logo img {
    width: 160px;
  }
  .footer-content {
    display:none;
  }
  .footer-content-sm{
    display: block;
    margin: 0 0 0 130px;
    flex: 1;
  }
  .footer-icons-sm{
    display: flex;
  }
  .footer-icon-1{
    margin: 0px;
  }
  .footer-icons{
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 991px){
  .footer {
    justify-content: center;
  }
  .logo{
    left: -4%;
  }
  .logo img {
    width: 140px;
  }
  .footer-content {
    display: block;
    margin: 0 0px 0 16px;
  }
  .footer-content-sm{
    display: none;
  }
  .footer-icons-sm{
    display: none;
  }
  .footer-icon-1{
    margin-left: 8px;
  }
  .footer-icons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 10%;
  }
}
@media (min-width: 992px) and (max-width: 1199px){
  .footer {
    justify-content: center;
  }
  .logo{
    left: 0%;
  }
  .footer-content {
    display: block;
    margin: 0 55px 0 16px;
  }
  .footer-content-sm{
    display: none;
  }
  .footer-icons-sm{
    display: none;
  }
  .footer-icon-1{
    margin-left: 8px;
  }
  .footer-icons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
@media (min-width: 1200px) and (max-width: 1399px){
  .footer {
    justify-content: center;
  }
  .logo{
    left: 5%;
  }
  .footer-content {
    display: block;
    margin: 0 120px 0 16px;
  }
  .footer-content-sm{
    display: none;
  }
  .footer-icons-sm{
    display: none;
  }
  .footer-icon-1{
    margin-left: 8px;
  }
  .footer-icons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
@media (min-width: 1400px){
  .footer {
    justify-content: center;
  }
  .logo{
    left: 11%;
  }
  .footer-content {
    display: block;
    margin: 0 120px 0 16px;
  }
  .footer-content-sm{
    display: none;
  }
  .footer-icons-sm{
    display: none;
  }
  .footer-icon-1{
    margin-left: 8px;
  }
  .footer-icons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
