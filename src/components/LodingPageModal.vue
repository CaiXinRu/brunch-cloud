<template>
  <div class="loading-bg">
    <img src="@/assets/cloud.gif" alt="Loading..." />
  </div>
</template>

<style scoped>
.loading-bg {
  height: 100%;
  width: 100%;
  background-color: var(--color--primary);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-bg img {
  filter: blur(1px);
  width: 210px;
  border: 0;
}
</style>
