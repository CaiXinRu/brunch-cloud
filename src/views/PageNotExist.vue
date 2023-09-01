<template>
  <div class="noPage-bg">
    <div class="noPage">
      <h4 class="sub-border" style="font-size: 56px">Oops!</h4>
      <h4 class="sub-border">404 NOT FOUND</h4>
      <div class="logo">
        <router-link to="/">
            <img
            src="@/assets/img/logo/logo+word--light-brown_ver.png"
            alt="雲端早午安"
            />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.noPage-bg {
  height: 100vh;
  width: 100vw;
  background-color: var(--color--light-brown);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0 150px 0;
}
.sub-border {
  color: #1897ff;
  -webkit-text-stroke: 0;
}
.noPage {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo{
  overflow: hidden;
  margin: auto;
  display: flex;
  height: 400px;
  align-items: center;
}
</style>
