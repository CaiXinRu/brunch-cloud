<template>
  <div class="favor-bar">
    <div class="favor-element">
      <div class="favor-text" style="transform: rotate(347deg) translateY(-4px); font-size: 32px; ">
        <font-awesome-icon icon="fa-solid fa-heart-circle-check" bounce />
      </div>
      <div class="favor-text">FAVORITES</div>
    </div>
  </div>
</template>

<style scoped>
.favor-bar {
  width: 70%;
  height: 96px;
  margin: 0 0 36px 0;
  display: flex;
}
.favor-element {
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
.favor-text {
  font-size: 28px;
  color: #669afa;
  font-family: 'Aclonica', 'Helvetica', sans-serif;
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  letter-spacing: 0.1em;
}
</style>
