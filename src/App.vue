<template>
<div id="root">
  <div id="header-container">
    <div id="header-content">
      <a id="header-title" class="has-text-primary is-size-5" href="https://tipjar.link">💸 TipJar</a>
      <button id="header-button" class="button is-primary is-rounded" v-bind:class="styleConnectButton" v-on:click="connectMetaMask">
        {{connectMessage}}
      </button>
    </div>
  </div>
  <div id="body-container">
    <div class="field has-addons has-addons-centered">
      <p class="control" v-for="tab in tabButtons" :key="tab.label">
        <button class="button is-rounded" @click="changeTab(tab)">{{tab.label}}</button>
      </p>
    </div>
    <component :is="currentTab"/>
  </div>
  <div id="footer-container">
    <div id="footer-content">
      <a id="footer-github" class="has-text-primary" href="https://github.com/fdpilkington/tipjar-dapp">GitHub</a>
      <a id="footer-about" class="has-text-primary" href="https://github.com/fdpilkington/tipjar-dapp#what-is-this">What is this?</a>
    </div>
  </div>
</div>
</template>

<script>
import Web3 from "web3";

import SendTab from "./components/SendTab.vue";
import ClaimTab from "./components/ClaimTab.vue";

export default {
  components: {
    SendTab,
    ClaimTab
  },
  data() {
    return {
      currentTab: SendTab,
      connectedToMetaMask: false,
      connectMessage: null,
      contract: null,
      idFromUrl: null
    }
  },
  computed: {
    tabButtons() {
      return Object
        .values(this.$options.components)
        .filter(tab => Object.prototype.hasOwnProperty.call(tab, "label"));
    },
    styleConnectButton() {
      return {
        'is-outlined': !this.connectedToMetaMask,
        'is-light': this.connectedToMetaMask
      }
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
    queryUrl() {
      var id = window.location.href.slice(window.location.href.indexOf('?') + 1);
      if (id == "https://tipjar.link/" || id == "http://localhost:8080/") {
        return "Got a TipJar link? Paste it in your browser.";
      } else {
        return id;
      }
    },
    connectMetaMask() {
      if (window.ethereum) {
        window.ethereum.enable().then(accounts => { this.connectMessage = accounts[0].substring(0, 12)+"..."; this.connectedToMetaMask = true; })
      } else {
        window.location.href = "https://metamask.io"
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
    if (!window.ethereum) {
        this.connectMessage = "Install MetaMask";
      } else {
        this.connectMessage = "Connect to MetaMask";
      }
    window.web3 = new Web3(window.web3.currentProvider);
    window.web3.eth.getAccounts().then(accounts => {
      if (accounts.length == 0) {
        this.connectMessage = "Connect to MetaMask";
      } else {
        this.connectMessage = accounts[0].toLowerCase().substring(0, 12)+"...";
        this.connectedToMetaMask = true;
      }
    });
    this.contract = this.getContract();
    this.idFromUrl = this.queryUrl();
    if (this.idFromUrl != "Got a TipJar link? Paste it in your browser.") {
      this.changeTab("claimTab");
    }
  }
}
</script>

<style scoped>
#root {
  position: relative;
  min-height: 100vh;
}

#header-container {
  background-color: white;
  width: 100%;
  display: flex; height: 100%; flex-direction: column;
}

#header-content {
  padding: 1.5rem;
  display: flex;
  align-items: center;
}

#header-button {
  margin-left: auto;
}

#body-container {
  text-align: center;
  max-width: 28rem;
  padding-top: 10vh;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
	margin: 0 auto;
}

#footer-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  
}

#footer-content {
  padding: 1.5rem;
}

#footer-about {
  float: right;
}
</style>