<template>
  <div class="menu-bar">
    <div class="menu-element">
      <font-awesome-icon class="menu-text" icon="fa-solid fa-utensils" bounce />
      <div class="menu-text">MENU</div>
      <font-awesome-icon class="menu-text" icon="fa-solid fa-utensils" bounce />
    </div>
  </div>
</template>

<style scoped>
.menu-bar {
  width: 70%;
  height: 96px;
  margin: 0 0 36px 0;
  display: flex;
}
.menu-element {
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
.menu-text {
  font-size: 28px;
  color: #669afa;
  font-family: 'Aclonica', 'Helvetica', sans-serif;
  display: flex;
  flex-direction: row;
  margin: 0 10px;
  letter-spacing: 0.1em;
}

/* RWD */
@media (max-width: 413px) {
  .menu-bar {
    width: 100%;
  }
  .menu-text {
    font-size: 18px;
  }
}
@media (min-width: 414px) and (max-width: 575px) {
  .menu-bar {
    width: 100%;
  }
  .menu-text {
    font-size: 24px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .menu-bar {
    width: 100%;
  }
}
</style>
