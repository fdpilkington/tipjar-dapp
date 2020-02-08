<template>
  <div>
    <div class="field has-addons has-addons-centered">
      <p class="control is-expanded has-icons-left">
        <input class="input is-fullwidth" v-model="fiatInput" type="text" placeholder="0.00" maxlength="9" id="input-fiat">
        <span class="icon is-small is-left">$</span>
      </p>
      <p class="control">
        <a class="button is-static" id="eth-price-button">
          <span id="eth-price-value">≈ {{convertedToEth}} ETH</span>
        </a>
      </p>
    </div>
    <div class="field has-addons has-addons-centered">
      <p class="control is-expanded">
        <input class="input is-fullwidth" type="text" :value="generatedLink" id="get-link" readonly>
      </p>
      <p class="control">
        <a class="button is-primary is-outlined" id="get-link-button" v-on:click="copyGeneratedLink">
          <span>Copy</span>
        </a>
      </p>
    </div>
    <div>
      <button class="button is-primary is-rounded" id="send-tip-button" v-on:click="contractSend">Generate Link</button>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import { keccak256 } from 'js-sha3';

export default {
  props: ['contract'],
  data() {
    return {
      fiatInput: null,
      ethPriceUsd: null,
      ethAmount: null,
      generatedLink: null
    }
  },
  computed: {
    convertedToEth() {
      let convertedFromFiat = this.convertedToEthHelper();
      if (isNaN(convertedFromFiat)) {
        return (0).toFixed(3);
      } else {
        return convertedFromFiat;
      }
    }
  },
  methods: {
    convertedToEthHelper() {
      let convertedFromFiat = parseFloat(this.fiatInput) / parseFloat(this.ethPriceUsd);
      this.ethAmount = convertedFromFiat;
      var floorLength = Math.floor(convertedFromFiat).toString().length;
      if (floorLength > 4) {
        var fixedLength = 7 - floorLength;
        return convertedFromFiat.toFixed(fixedLength);
      } else {
        return convertedFromFiat.toFixed(3);
      }
    },
    contractSend() {
      var id = Math.random().toString(36).substring(2, 15);
      this.generatedLink = "tipjar.link/claim?" + id;
      var hash = "0x" + keccak256(id);
      var amount = window.web3.utils.toWei(this.ethAmount.toString(), 'ether');
      this.$parent.contract.methods.send(hash).send({from: window.web3.givenProvider.selectedAddress, value: amount});
    },
    copyGeneratedLink() {
      var copyLink = document.getElementById("get-link");
      copyLink.select();
      copyLink.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  },
  mounted() {
    this.generatedLink = "Your link will appear here.";
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      .then(response => (this.ethPriceUsd = response.data.ethereum.usd))
  }
}
</script>

<style>
#eth-price-button {
  background-color: white;
  color: hsl(171, 100%, 41%);
  width: 8rem;
}

#get-link {
  color: hsl(0, 0%, 50%);
}

#get-link-button {
  width: 8rem;
}

#send-tip-button {
  width: 10rem;
}

.control.has-icons-left .icon {
  width: 2rem;
}

.control.has-icons-left .input {
  padding-left: 1.3rem;
}
</style>