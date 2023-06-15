<template>
    <div
      class="modal fade"
      id="itemModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
            <!-- <div class="bg-color--light-brown"></div> -->
          <div class="modal-header">
            <div class="item-modal">
                <div class="im-pic"><img src="https://picsum.photos/1000"
          /></div>
                <div class="im-content">ddd</div>
            </div>
            <!-- <div class="bg-color--light-brown">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
            </div> -->
          </div>
          <!-- <div class="modal-body">
          </div> -->
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
  </template>

<script>
import Modal from 'bootstrap/js/dist/modal.js'
export default {
  data  () {
    return {
      modal: {}
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>

<style scoped>
.item-modal{
    display: flex;
    background-color:  #FEF7E9;
    height: auto;
    width: auto;
    padding: 15px;
    flex-direction: row;
}
.im-pic{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}
.im-content{
    display: flex;
    flex: 1;
    padding: 15px;
}
</style>
