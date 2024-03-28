import React, { Component } from "react";
import Web3 from "web3";

class Web extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      errorMessage: "",
    };
  }

  connectWallet = async () => {
    try {
      if (window.ethereum) {
        const WebData = new Web3(window.ethereum);
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Check if connected

        const accounts = await WebData.eth.getAccounts();
        if (accounts.length > 0) {
          this.setState({ isConnected: true, errorMessage: "" });
        }
      } else {
        this.setState({
          isConnected: false,
          errorMessage: "MetaMask extension not detected.",
        });
      }
    } catch (error) {
      this.setState({ isConnected: false, errorMessage: error.message });
    }
  };

  render() {
    const { isConnected, errorMessage } = this.state;
    return (
      <div className="d-flex   flex-column align-items-center justify-content-center w-100 text-center">
        <button onClick={this.connectWallet} className="btn btn-primary">
          Connect Wallet
        </button>
        {isConnected && <p>Wallet connected successfully!</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

export default Web;
