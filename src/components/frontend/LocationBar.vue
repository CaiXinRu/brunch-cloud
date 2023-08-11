<template>
  <div class="location-bar">
    <div class="location-element">
      <font-awesome-icon
        class="location-text"
        icon="fa-solid fa-location-dot"
        bounce
      />
      <div class="location-text">LOCATIONS</div>
    </div>
  </div>
</template>

<style scoped>
.location-bar {
  width: 70%;
  height: 96px;
  margin: 0 0 36px 0;
  display: flex;
}
.location-element {
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
.location-text {
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
  .location-bar {
    width: 100%;
  }
  .location-text {
    font-size: 18px;
  }
  .location-text-font {
    font-size: 28px;
  }
}
@media (min-width: 414px) and (max-width: 575px) {
  .location-bar {
    width: 100%;
  }
  .location-text {
    font-size: 24px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .location-bar {
    width: 100%;
  }
}
</style>
