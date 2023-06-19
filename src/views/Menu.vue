<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <MenuBar id="menuTop"></MenuBar>
      <div class="menu-category">
        <button
          data-category="north"
          class="menu-btn"
          @click="filterLocations('north')"
        >
          太空漢堡
        </button>
        <button
          data-category="middle"
          class="menu-btn"
          @click="filterLocations('middle')"
        >
          飄浮吐司
        </button>
        <button
          data-category="south"
          class="menu-btn"
          @click="filterLocations('south')"
        >
          柔情飯麵
        </button>
        <button
          data-category="east"
          class="menu-btn"
          @click="filterLocations('east')"
        >
          輕盈小點
        </button>
        <button
          data-category="east"
          class="menu-btn"
          @click="filterLocations('east')"
        >
          沁涼飲品
        </button>
        <button
          data-category="east"
          class="menu-btn"
          @click="filterLocations('all')"
        >
          完整菜單
        </button>
      </div>
        <!-- Burger -->
        <ITBurger></ITBurger>
        <ILBurger></ILBurger>
        <!-- Sandwich -->
        <ITSandwich></ITSandwich>
        <!-- <ILSandwich></ILSandwich> -->
        <!-- Rice & Noodles -->
        <ITRiceNoodles></ITRiceNoodles>
        <!-- <ILRiceNoodles></ILRiceNoodles> -->
        <!-- Snack -->
        <ITSnack></ITSnack>
        <!-- <ILSnack></ILSnack> -->
        <!-- Drinks -->
        <ITDrinks></ITDrinks>
        <!-- <ILDrinks></ILDrinks> -->
      </div>
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import ITBurger from '@/components/Item-Title/1-ITBurger.vue'
import ITSandwich from '@/components/Item-Title/2-ITSandwich.vue'
import ITRiceNoodles from '@/components/Item-Title/3-ITRiceNoodles.vue'
import ITSnack from '@/components/Item-Title/4-ITSnack.vue'
import ITDrinks from '@/components/Item-Title/5-ITDrinks.vue'
import ILBurger from '@/components/Item-List/1-ILBurger.vue'
// import ILSandwich from '@/components/Item-List/2-ILSandwich.vue'
// import ILRiceNoodles from '@/components/Item-List/3-ILRiceNoodles.vue'
// import ILSnack from '@/components/Item-List/4-ILSnack.vue'
// import ILDrinks from '@/components/Item-List/5-ILDrinks.vue'

export default {
  components: {
    MenuBar,
    ITBurger,
    ITSandwich,
    ITRiceNoodles,
    ITSnack,
    ITDrinks,
    ILBurger
    // ILSandwich,
    // ILRiceNoodles,
    // ILSnack,
    // ILDrinks
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu-category {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.menu-btn {
  display: flex;
  text-align: center;
  justify-content: center;
  background: #fac664;
  color: #272727;
  font-weight: bold;
  padding: 1.18em 1.32em 1.03em;
  line-height: 1;
  border-radius: 38px;
  position: relative;
  min-width: 7.23em;
  text-decoration: none;
  font-family: var(--font);
  font-size: 1.25rem;
  z-index: 2;
  margin-bottom: 36px;
}
.menu-btn:hover {
  color: #fef7e9;
}
.menu-btn:before {
  width: 3.2em;
  height: 3.2em;
  position: absolute;
  content: '';
  display: flex;
  background: #fac664;
  border-radius: 50%;
  transition: 1s ease;
  z-index: -1;

  top: 0%;
  left: 13%;
  transform: scale(0.65);
  transition: all 0.5s;
}
.menu-btn:after {
  width: 3.8em;
  height: 3.8em;
  position: absolute;
  content: '';
  display: flex;
  background: #fac664;
  border-radius: 50%;
  transition: 1s ease;
  z-index: -1;

  top: 0%;
  right: 10%;
  transform: scale(0.65);
  transition: all 1s ease;
}
.menu-btn:hover:before {
  top: -40%;
  left: 13%;
  transform: scale(1);
}
.menu-btn:hover:after {
  top: -60%;
  right: 10%;
  transform: scale(1);
}
</style>
