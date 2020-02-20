<template>
  <div>
    <div class="field has-addons has-addons-centered">
      <p class="control is-expanded">
        <input class="input is-fullwidth" type="text" :value="id" id="fill-id" readonly>
      </p>
    </div>
    <div>
      <button class="button is-primary is-rounded" id="claim-tip-button" @click="contractClaim">Claim Tip</button> 
    </div>
    <component :is="displayMessage"/>
  </div>
</template>

<script>
import MetaMaskMessage from "./MetaMaskMessage.vue";

const defaultIdFromUrl = "Got a TipJar link? Paste it in your browser.";

export default {
  label: "Claim",
  components: {
    MetaMaskMessage
  },
  data() {
    return {
      id: null,
      displayMessage: null
    }
  },
  methods: {
    contractClaim() {
      if (this.$parent.idFromUrl != defaultIdFromUrl) {
        if (this.$parent.connectedToMetaMask) {
          this.$parent.contract.methods.claim(this.$parent.idFromUrl).send({from: window.web3.givenProvider.selectedAddress});
        } else {
          this.displayMessage = MetaMaskMessage;
        }
      } else {
        this.errorFillId();
      }
    },
    errorFillId() {
      document.getElementById("fill-id").classList.add("is-danger");
    }
  },
  mounted() {
    this.id = this.$parent.idFromUrl;
  }
}
</script>

<style>
#fill-id {
  text-align: center;
  color: hsl(0, 0%, 50%);
}

#claim-tip-button {
    width: 10rem;
}
</style>