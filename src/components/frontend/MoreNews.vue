<template>
  <router-link to="/promotions" class="s-button">
    <div class="s-div">
      <div class="more-news"> </div>
    </div>
    <div class="s-text">More News</div>
  </router-link>
</template>

<style lang="scss" scoped>
.s-button {
  position: absolute;
  width: max-content;
  left: 85%;
}
.s-div {
  height: 52px;
}
.more-news {
  font-size: 24px;
  border: 1px solid #fac664;
  width: 52px;
  height: 52px;
  display: inline-block;
  background-color: #fac664;
  color: #fef7e9;
  border-radius: 26px;
  line-height: 52px;

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}

.s-text {
  padding-left: 75px;
  padding-right: 30px;
  position: relative;
  top: -51px;
  white-space: nowrap;
  font-weight: 700;
  line-height: 52px;
  color: #fac664;
  font-family: 'Aclonica', 'Montserrat', 'cwTeXYen', 'Helvetica', sans-serif;

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}

.more-news:before {
  content: '→';
  opacity: 0;
  font-weight: 300;
  font-size: 30px;
  font-family: 'Aclonica';

  line-height: 52px;
  color: #fef7e9;

  position: absolute;
  left: 19px;
  top: 1px;

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}
.s-button:hover {
  .more-news:before {
    opacity: 1;
    color: #fef7e9;

    transform: translateX(10px);
  }

  .more-news {
    width: 100%;
    padding: 0px 16px;
    color: #fef7e9;
  }

  .more-news:after {
    opacity: 0;
  }

  .s-text {
    color: #fef7e9;
  }
}

.more-news:after {
  content: '>';
  font-size: 28px;
  font-weight: 300;
  line-height: 52px;
  color: #fef7e9;
  font-family: 'Aclonica';

  position: absolute;
  left: 18px;
  top: 0;

  opacity: 1;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}

@media (max-width: 575px) {
  .s-button {
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .s-button {
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .s-button {
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .s-button {
    top: 15%;
    left: 78%;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .s-button {
    top: 17%;
  }
}
@media (min-width: 1400px) {
  .s-button {
    top: 17%;
  }
}
</style>
