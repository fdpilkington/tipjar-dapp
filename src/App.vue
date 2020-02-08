<template>
  <div id="app">
    <p id="header-name">💸 TipJar</p>
    <p id="header-connect-button">
      <button class="button is-primary is-rounded" v-bind:class="styleConnectButton" v-on:click="connectMetaMask">
        {{connectMessage}}
      </button>
    </p>
    <div id="nav">
      <div class="field has-addons has-addons-centered">
        <p class="control">
          <button class="button is-rounded" @click="$router.push('send')">
            <span>Give</span>
          </button>
        </p>
        <p class="control">
          <button class="button is-rounded" @click="$router.push('claim')">
            <span>Claim</span>
          </button>
        </p>
      </div>
    </div>
    <div id="view">
      <router-view/>
    </div>
    <a class ="footer-link" id="footer-github-link" href="https://github.com/fdpilkington/tipjar">GitHub</a>
    <p class ="footer-link" id="footer-about-link">What is this?</p>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data() {
    return {
      connectMessage: null,
      contract: null
    }
  },
  computed: {
    styleConnectButton() {
      return {
        'is-outlined': this.connectMessage == "Connect to MetaMask",
        'is-light': this.connectMessage !== "Connect to MetaMask"
      }
    }
  },
  methods: {
    connectMetaMask() {
      if (window.ethereum) {
        window.ethereum.enable().then(accounts => { this.connectMessage = accounts[0].substring(0, 12)+"..." })
      } else {
        alert("You must have MetaMask installed.");
      }
    },
    getContract() {
      return new window.web3.eth.Contract([{
          "constant": false,
          "inputs": [
            {
              "internalType": "string",
              "name": "_id",
              "type": "string"
            }
          ],
          "name": "claim",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_hash",
              "type": "bytes32"
            }
          ],
          "name": "send",
          "outputs": [],
          "payable": true,
          "stateMutability": "payable",
          "type": "function"
        }], '0x10e8e03B97ebA42007C7AF80F1B723b954F7b550');
    }
  },
  mounted() {
    window.web3 = new Web3(window.web3.currentProvider);
    window.web3.eth.getAccounts().then(accounts => {
      if (accounts.length == 0) {
        this.connectMessage = "Connect to MetaMask";
      } else {
        this.connectMessage = accounts[0].toLowerCase().substring(0, 12)+"...";
      }
    });
    this.contract = this.getContract();
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  padding: 1.5rem;
}

#header-name {
  margin-left: 1.5rem;
  margin-top: .90rem;
  left: 0;
  position: fixed;
  transform: translateY(-50%);
  color: hsl(171, 100%, 41%);
  font-size: 120%;
}

#header-connect-button {
  margin-right: 1.5rem;
  margin-top: .90rem;
  right: 0;
  position: fixed;
  transform: translateY(-50%);
}

#nav {
  margin-top: 12%;
  margin-bottom: .75rem;
}

#view {
  max-width: 24rem;
  margin: 0 auto;
}

#footer-github-link {
  margin-left: 1.5rem;
  margin-bottom: .90rem;
  bottom: 0;
  left: 0;
  position: fixed;
  color: hsl(171, 100%, 41%);
  font-size: 90%;
}

#footer-about-link {
  margin-right: 1.5rem;
  margin-bottom: .90rem;
  bottom: 0;
  right: 0;
  position: fixed;
  color: hsl(171, 100%, 41%);
  font-size: 90%;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>