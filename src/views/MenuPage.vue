<template>
  <LoadingPage v-if="isLoading" />
  <div class="bg-color--white">
    <div class="container u-pt-48 u-pb-68">
      <MenuBar id="menuTop" />
      <div class="menu-category">
        <button
          type="button"
          data-category="burger"
          class="menu-btn"
          @click="filterMeals('burger')"
        >
          太空漢堡
        </button>
        <button
          type="button"
          data-category="sandwich"
          class="menu-btn"
          @click="filterMeals('sandwich')"
        >
          飄浮吐司
        </button>
        <button
          type="button"
          data-category="rice&noodles"
          class="menu-btn"
          @click="filterMeals('rice&noodles')"
        >
          柔情飯麵
        </button>
        <button
          type="button"
          data-category="snack"
          class="menu-btn"
          @click="filterMeals('snack')"
        >
          輕盈小點
        </button>
        <button
          type="button"
          data-category="drink"
          class="menu-btn"
          @click="filterMeals('drink')"
        >
          沁涼飲品
        </button>
        <button
          type="button"
          data-category="all"
          class="menu-btn"
          @click="filterMeals('all')"
        >
          完整菜單
        </button>
      </div>
      <div class="dropdown">
        <button type="button" class="dropbtn" @click="toggleDropdown">
          請選擇雲端種類<span>▼</span>
        </button>
        <div :class="{ 'dropdown-content': true, show: isDropdownOpen }">
          <div
            data-category="burger"
            class="dropdown-btn"
            @click="filterMeals('burger')"
          >
            太空漢堡
          </div>
          <div
            data-category="sandwich"
            class="dropdown-btn"
            @click="filterMeals('sandwich')"
          >
            飄浮吐司
          </div>
          <div
            data-category="rice&noodles"
            class="dropdown-btn"
            @click="filterMeals('rice&noodles')"
          >
            柔情飯麵
          </div>
          <div
            data-category="snack"
            class="dropdown-btn"
            @click="filterMeals('snack')"
          >
            輕盈小點
          </div>
          <div
            data-category="drink"
            class="dropdown-btn"
            @click="filterMeals('drink')"
          >
            沁涼飲品
          </div>
          <div
            data-category="all"
            class="dropdown-btn"
            @click="filterMeals('all')"
          >
            完整菜單
          </div>
        </div>
      </div>

      <!-- Burger -->
      <ITBurger
        v-if="filteredMeals.includes('ITBurger')"
        id="ITBurger"
        ref="ITBurger"
      />
      <ILBurger v-if="filteredMeals.includes('ILBurger')" ref="ILBurger" />
      <div
        class="menu-arrow"
        @click="goToTop"
        v-if="filteredMeals.includes('ITBurger')"
        id="beforeSandwich"
      >
        <font-awesome-icon icon="fa-solid fa-circle-up" />
      </div>

      <!-- Sandwich -->
      <ITSandwich
        v-if="filteredMeals.includes('ITSandwich')"
        ref="ITSandwich"
        id="ITSandwich"
      />
      <ILSandwich
        v-if="filteredMeals.includes('ILSandwich')"
        ref="ILSandwich"
      />
      <div
        class="menu-arrow"
        @click="goToTop"
        v-if="filteredMeals.includes('ITSandwich')"
        id="beforeRiceNoodles"
      >
        <font-awesome-icon icon="fa-solid fa-circle-up" />
      </div>

      <!-- Rice & Noodles -->
      <ITRiceNoodles
        v-if="filteredMeals.includes('ITRiceNoodles')"
        ref="ITRiceNoodles"
        id="ITRiceNoodles"
      />
      <ILRiceNoodles
        v-if="filteredMeals.includes('ILRiceNoodles')"
        ref="ILRiceNoodles"
      />
      <div
        class="menu-arrow"
        @click="goToTop"
        v-if="filteredMeals.includes('ITRiceNoodles')"
        id="beforeSnack"
      >
        <font-awesome-icon icon="fa-solid fa-circle-up" />
      </div>

      <!-- Snack -->
      <ITSnack
        v-if="filteredMeals.includes('ITSnack')"
        ref="ITSnack"
        id="ITSnack"
      />
      <ILSnack v-if="filteredMeals.includes('ILSnack')" ref="ILSnack" />
      <div
        class="menu-arrow"
        @click="goToTop"
        v-if="filteredMeals.includes('ITSnack')"
        id="beforeDrinks"
      >
        <font-awesome-icon icon="fa-solid fa-circle-up" />
      </div>

      <!-- Drinks -->
      <ITDrinks
        v-if="filteredMeals.includes('ITDrinks')"
        ref="ITDrinks"
        id="ITDrinks"
      />
      <ILDrinks v-if="filteredMeals.includes('ILDrinks')" ref="ILDrinks" />
      <div
        class="menu-arrow"
        @click="goToTop"
        v-if="filteredMeals.includes('ITDrinks')"
      >
        <font-awesome-icon icon="fa-solid fa-circle-up" />
      </div>
    </div>
  </div>
</template>

<script>
import LoadingPage from '@/components/LodingPage.vue'
import MenuBar from '@/components/MenuBar.vue'
import ITBurger from '@/components/Item-Title/A_ITBurger.vue'
import ITSandwich from '@/components/Item-Title/B_ITSandwich.vue'
import ITRiceNoodles from '@/components/Item-Title/C_ITRiceNoodles.vue'
import ITSnack from '@/components/Item-Title/D_ITSnack.vue'
import ITDrinks from '@/components/Item-Title/E_ITDrinks.vue'
import ILBurger from '@/components/Item-List/A_ILBurger.vue'
import ILSandwich from '@/components/Item-List/B_ILSandwich.vue'
import ILRiceNoodles from '@/components/Item-List/C_ILRiceNoodles.vue'
import ILSnack from '@/components/Item-List/D_ILSnack.vue'
import ILDrinks from '@/components/Item-List/E_ILDrinks.vue'

export default {
  data () {
    return {
      isLoading: false,
      selectedCategory: 'all',
      isDropdownOpen: false
    }
  },
  mounted () {
    setTimeout(() => {
      if (
        window.location.hash &&
        window.location.hash !== '' &&
        window.location.hash.split('#').length > 2
      ) {
        const el = document.querySelector(
          '#' +
            window.location.hash.split('#')[
              window.location.hash.split('#').length - 1
            ]
        )
        if (el !== null) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 2000)
    window.addEventListener('click', this.closeDropdown)
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  },
  components: {
    LoadingPage,
    MenuBar,
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
  },
  methods: {
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    closeDropdown (event) {
      if (!event.target.matches('.dropbtn')) {
        this.isDropdownOpen = false
      }
    },
    filterMeals (category) {
      this.selectedCategory = category
    },
    goToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    filteredMeals () {
      if (this.selectedCategory === 'all') {
        return [
          'ITBurger',
          'ILBurger',
          'ITSandwich',
          'ILSandwich',
          'ITRiceNoodles',
          'ILRiceNoodles',
          'ITSnack',
          'ILSnack',
          'ITDrinks',
          'ILDrinks'
        ]
      } else {
        switch (this.selectedCategory) {
          case 'burger':
            return ['ITBurger', 'ILBurger']
          case 'sandwich':
            return ['ITSandwich', 'ILSandwich']
          case 'rice&noodles':
            return ['ITRiceNoodles', 'ILRiceNoodles']
          case 'snack':
            return ['ITSnack', 'ILSnack']
          case 'drink':
            return ['ITDrinks', 'ILDrinks']
          default:
            return []
        }
      }
    }
  },
  beforeUnmount () {
    window.removeEventListener('click', this.closeDropdown)
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
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 55px;
}
.dropbtn {
  background-color: var(--color--brown);
  color: var(--color--white);
  width: 100%;
  font-size: 1.25rem;
  display: flex;
  justify-content: flex-start;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
.dropdown:hover .dropbtn {
  background-color: var(--color--primary);
}
.dropbtn span {
  font-size: 18px;
  position: absolute;
  right: 3%;
  line-height: 18px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--color--light-brown);
  width: 100%;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
.dropdown-btn {
  justify-content: center;
  color: var(--color--dark-brown);
  padding: 16px 0;
  text-decoration: none;
  display: flex;
  cursor: pointer;
}
.dropdown-btn:hover {
  background-color: var(--color--white);
}
.show {
  display: block;
}
.menu-arrow {
  font-size: 50px;
  color: var(--color--primary);
  align-self: flex-end;
  cursor: pointer;
  margin-top: 18px;
}
@media (max-width: 991px) {
  .menu-category {
    display: none;
  }
  .dropdown {
    display: inline-block;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .menu-btn {
    min-width: 6em;
    font-size: 1rem;
  }
  .menu-btn:before {
    width: 3.2em;
    height: 3.2em;
  }
  .menu-btn:hover:before {
    left: 13%;
  }
  .menu-btn:after {
    width: 3.5em;
    height: 3.5em;
  }
  .menu-btn:hover:after {
    right: 8%;
  }
  .menu-category {
    display: flex;
  }
  .dropdown {
    display: none;
  }
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .menu-btn {
    min-width: 6.23em;
    font-size: 1.1rem;
  }
  .menu-btn:before {
    width: 3.2em;
    height: 3.2em;
  }
  .menu-btn:hover:before {
    left: 13%;
  }
  .menu-btn:after {
    width: 3.5em;
    height: 3.5em;
  }
  .menu-btn:hover:after {
    right: 8%;
  }
  .menu-category {
    display: flex;
  }
  .dropdown {
    display: none;
  }
}
@media (min-width: 1400px) {
  .menu-btn {
    min-width: 7.23em;
    font-size: 1.25rem;
  }
  .menu-btn:before {
    width: 3.2em;
    height: 3.2em;
  }
  .menu-btn:hover:before {
    left: 13%;
  }
  .menu-btn:after {
    width: 3.8em;
    height: 3.8em;
  }
  .menu-btn:hover:after {
    right: 10%;
  }
  .menu-category {
    display: flex;
  }
  .dropdown {
    display: none;
  }
}
</style>
