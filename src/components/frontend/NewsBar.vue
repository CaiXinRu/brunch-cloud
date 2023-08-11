<template>
  <div class="news-bar">
    <div class="news-element">
      <div class="news-text-font">
        <font-awesome-icon icon="fa-solid fa-bullhorn" bounce />
      </div>
      <div class="news-text">NEWS IN THE CLOUD</div>
    </div>
  </div>
</template>

<style scoped>
.news-bar {
  width: 70%;
  height: 96px;
  margin: 0 0 36px 0;
  display: flex;
}
.news-element {
  height: 48px;
  width: 100%;
  border-radius: 24px;
  background-color: #fef7e9;
  border: 1px solid #644536;
  margin: auto;
  box-shadow: 8px 8px 0px #fac664;

  display: flex;
  justify-content: center;
  align-items: center;
}
.news-text-font {
  font-size: 40px;
  color: #669afa;
  font-family: 'Aclonica', 'Helvetica', sans-serif;
  display: flex;
  flex-direction: row;
  margin: 0 8px 16px 4px;
  letter-spacing: 0.1em;
  transform: rotate(-45deg);
}
.news-text {
  font-size: 28px;
  color: #669afa;
  font-family: 'Aclonica', 'Helvetica', sans-serif;
  display: flex;
  flex-direction: row;
  margin: 0 4px;
  letter-spacing: 0.1em;
}

/* RWD */
@media (max-width: 413px) {
  .news-bar {
    width: 100%;
  }
  .news-text {
    font-size: 18px;
  }
  .news-text-font {
    font-size: 28px;
  }
}
@media (min-width: 414px) and (max-width: 575px) {
  .news-bar {
    width: 100%;
  }
  .news-text {
    font-size: 24px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .news-bar {
    width: 100%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
}
@media (min-width: 992px) and (max-width: 1199px) {
}
@media (min-width: 1200px) and (max-width: 1399px) {
}
@media (min-width: 1400px) {
}
</style>
