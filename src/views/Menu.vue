<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <div class="row">
        <MenuBar></MenuBar>
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <SearchBar></SearchBar>
          <div>
            <!-- Burger -->
            <ITBurger></ITBurger>
            <ILBurger></ILBurger>
            <!-- Sandwich -->
            <ITSandwich></ITSandwich>
            <ILSandwich></ILSandwich>
            <!-- Rice & Noodles -->
            <ITRiceNoodles></ITRiceNoodles>
            <ILRiceNoodles></ILRiceNoodles>
            <!-- Snack -->
            <ITSnack></ITSnack>
            <ILSnack></ILSnack>
            <!-- Drinks -->
            <ITDrinks></ITDrinks>
            <ILDrinks></ILDrinks>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import MenuBar from '@/components/MenuBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import ITBurger from '@/components/Item-Title/1-ITBurger.vue'
import ITSandwich from '@/components/Item-Title/2-ITSandwich.vue'
import ITRiceNoodles from '@/components/Item-Title/3-ITRiceNoodles.vue'
import ITSnack from '@/components/Item-Title/4-ITSnack.vue'
import ITDrinks from '@/components/Item-Title/5-ITDrinks.vue'
import ILBurger from '@/components/Item-List/1-ILBurger.vue'
import ILSandwich from '@/components/Item-List/2-ILSandwich.vue'
import ILRiceNoodles from '@/components/Item-List/3-ILRiceNoodles.vue'
import ILSnack from '@/components/Item-List/4-ILSnack.vue'
import ILDrinks from '@/components/Item-List/5-ILDrinks.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MenuBar,
    SearchBar,
    ITBurger,
    ITSandwich,
    ITRiceNoodles,
    ITSnack,
    ITDrinks,
    ILBurger,
    ILSandwich,
    ILRiceNoodles,
    ILSnack,
    ILDrinks
  }
}
</script>
