<template>
  <div>
    <div class="field has-addons has-addons-centered">
      <p class="control is-expanded">
        <input class="input is-fullwidth" type="text" :value="id" id="fill-id" readonly>
      </p>
    </div>
    <div>
      <button class="button is-primary is-rounded" id="claim-tip-button" v-on:click="contractClaim">Claim Tip</button> 
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: null
    }
  },
  methods: {
    queryUrl() {
      var id = window.location.href.slice(window.location.href.indexOf('?') + 1);
      if (id == "http://localhost:8080/claim") {
        return "Got a TipJar link? Paste it in your browser.";
      } else {
        return id;
      }
    },
    contractClaim() {
      if (this.id !== "Got a TipJar link? Paste it in your browser.") {
        this.$parent.contract.methods.claim(this.id).call({from: window.web3.givenProvider.selectedAddress});
      } else {
        this.errorFillId();
      }
    },
    errorFillId() {
      document.getElementById("fill-id").classList.add("is-danger");
    }
  },
  mounted() {
    this.id = this.queryUrl();
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