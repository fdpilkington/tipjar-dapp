<template>
<div class="notification is-danger is-light">
  <button class="delete" @click=deleteMessage()></button>
  <strong>You must be connected to MetaMask.</strong>
  <br/>Press the button in the top right corner!
</div>
</template>

<script>
export default {
  methods: {
    deleteMessage() {
      this.$parent.displayMessage = null;
    }
  }
}
</script>

<style scoped>
.notification {
  margin-top: 2rem;
  background-color: #feecf0;
  color: #cc0f35;
}
</style>