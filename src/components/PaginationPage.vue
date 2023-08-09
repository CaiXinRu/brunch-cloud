<template>
  <nav class="pagiantion">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{'disabled': pages.has_pre === false}">
        <a class="page-link" aria-label="Previous" @click.prevent="updatePage(pages.current_page-1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="(page, index) in pages.total_pages" :key="index" :class="{ 'active': page === pages.current_page}">
        <a class="page-link" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{'disabled': pages.has_next === false}">
        <a class="page-link" aria-label="Next" @click.prevent="updatePage(pages.current_page+1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('emit-pages', page)
    }
  }
}
</script>

<style scoped>
.pagiantion{
    display: flex;
    justify-content: center;
    margin: 32px;
}
.disabled > .page-link{
    color: var(--color--brown);
    border-color: var(--color--brown);
}
.active > .page-link{
    background-color: var(--color--secondary);
    border-color: var(--color--secondary);
}
</style>
