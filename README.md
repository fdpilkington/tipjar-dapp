# TipJar

[TipJar](https://tipjar.link/) is currently running on the Ropsten testnet.

## What is this?

This decentralized application allows you to send ETH without knowing the wallet address of your recipient. Simply enter the amount in USD you want to send, click Generate Link, and send your desired recipient the resulting URL (privately)!

## How does it work?

When you enter an amount and click Generate Link, the hash of a random alphanumeric string is produced client-side. This hash is then passed into TipJar's smart contract on the Ethereum network along with the amount of ETH you chose to send, where the hash is mapped to the amount. The alphanumeric string is contained in the generated link, and when your recipient opens the link and claims the tip, it is hashed and sent to to the smart contract. The hash matches the one produced when you generated the link, so the amount of ETH mapped to it is transferred to your recipient.