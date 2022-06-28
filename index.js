import { ethers } from "./ethers-5.6.esm.min.js";

const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");

connectButton.onclick = connect;

console.log(ethers);

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (error) {
      console.log(error);
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    connectButton.innerHTML = "Connected";
    console.log(accounts);
  } else {
    console.log("No Metamask detected!");
    connectButton.innerHTML = "Please install Metamask";
  }
}

async function fund(ethAmount) {
  console.log(`Funding with ${ethAmount}....`);
}
