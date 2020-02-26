<template>
<div>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded has-icons-left">
      <input class="input is-fullwidth" v-model="fiatInput"  @click="errorFiatInputReset()" type="text" placeholder="0.00" maxlength="9" id="fiat-input">
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
        <span>{{isCopied}}</span>
      </a>
    </p>
  </div>
  <div>
    <button class="button is-primary is-rounded" id="send-tip-button" v-on:click="contractSend">Generate Link</button>
  </div>
  <component :is="displayMessage"/>
</div>
</template>

<script>
import axios from 'axios';
import { keccak256 } from 'js-sha3';
import srs from 'secure-random-string';

import MetaMaskMessage from "./MetaMaskMessage.vue";

const defaultGeneratedLink = "Your link will appear here.";

export default {
  label: "Send",
  components: {
    MetaMaskMessage
  },
  data() {
    return {
      fiatInput: null,
      ethPriceUsd: null,
      ethAmount: null,
      generatedLink: defaultGeneratedLink,
      isCopied: "Copy",
      displayMessage: null
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
      if (this.$parent.connectedToMetaMask) {
        if (this.generatedLink == defaultGeneratedLink) {
          if (this.fiatInput && !isNaN(this.fiatInput)) {
            var id = srs({length: 16});
            this.generatedLink = document.URL + "?" + id;
            var hash = "0x" + keccak256(id);
            var amount = window.web3.utils.toWei(this.ethAmount.toString(), 'ether');
            this.$parent.contract.methods.send(hash).send({from: window.web3.givenProvider.selectedAddress, value: amount});
          } else {
            this.errorFiatInput();
          }
        }
      } else {
        this.displayMessage = MetaMaskMessage;
      }
    },
    copyGeneratedLink() {
      if (this.generatedLink != defaultGeneratedLink) {
        var copyLink = document.getElementById("get-link");
        copyLink.select();
        copyLink.setSelectionRange(0, 99999);
        document.execCommand("copy");
        this.isCopied = "Copied!"
      }
    },
    errorFiatInput() {
      document.getElementById("fiat-input").classList.add("is-danger");
    },
    errorFiatInputReset() {
      document.getElementById("fiat-input").classList.remove("is-danger");
    }
  },
  mounted() {
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