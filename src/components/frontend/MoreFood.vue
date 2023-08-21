<template>
  <router-link to="/menu" class="e-button">
    <div class="e-div">
      <div class="more-food"></div>
    </div>
    <div class="e-text">More Food</div>
  </router-link>
</template>

<style lang="scss" scoped>
.e-button {
  position: absolute;
  width: max-content;
  left: 85%;
  cursor: pointer;
}
.e-div {
  height: 52px;
}
.more-food {
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

.e-text {
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

.more-food:before {
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
.e-button:hover {
  .more-food:before {
    opacity: 1;
    color: #fef7e9;

    transform: translateX(10px);
  }

  .more-food {
    width: 100%;
    padding: 0px 16px;
    color: #fef7e9;
  }

  .more-food:after {
    opacity: 0;
  }

  .e-text {
    color: #fef7e9;
  }
}

.more-food:after {
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
  .e-button {
    left: 50%;
    bottom: -0.5%;
    transform: translateX(-50%);
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .e-button {
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .e-button {
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .e-button {
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .e-button {
    top: 18%;
  }
}
@media (min-width: 1400px) {
  .e-button {
    top: 18%;
  }
}
</style>
