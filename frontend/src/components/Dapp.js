// JSON's & JS's 
import React, { Component } from "react";
import CryptoJS from 'crypto-js';

// Web3
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import contractAddress from "../contracts/contract-address.json";
import getWeb3 from "./getWeb3";

// CSS
import "./css/Dapp.css";

class Dapp extends Component {

  state = { 
    user: '', 
    pass: '', 
    hash: '', 
    pk: '', 
    pk_aes: '' ,
    web3: null, accounts: null, contract: null 
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      // Hardhat Network ID
      const HARDHAT_NETWORK_ID = '1337';
      // Get the contract instance.
      const deployedNetwork = HARDHAT_NETWORK_ID;
      const contractName = SimpleStorageContract.contractName;

      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && contractAddress[contractName],
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  handleChangeUser = (event) => {
    event.preventDefault();
    this.setState ({ user: event.target.value });
  };

  handleChangePassword = (event) => {
    event.preventDefault();
    this.setState ({ 
      pass : event.target.value
    });

  };

  handleChangePK = (event) => {
    event.preventDefault();
    this.setState ({ 
      pk: event.target.value
    });
  };

  getEncrypt = (event) => {
    event.preventDefault();
    this.setState ({ 
      pk: event.target.value,
      hash : CryptoJS.SHA512(this.state.pass),
      pk_aes : CryptoJS.AES.encrypt(this.state.pk, this.state.pass).toString()
    });
  }

  storeData = async (event) => {
    event.preventDefault();

    this.setState({ pk : '' });

    const { accounts, contract } = this.state;

    try { 
      await contract.methods.storeData(
      this.state.user,
      this.state.hash.toString(),
      this.state.pk_aes.toString()
      ).send({ from: accounts[0] });
    }catch (error) {
      alert(
        error.message
      );
      console.error(error.message);
    }
  };

  getPassword = async (event) => {
    event.preventDefault();
    try{
      const { contract } = this.state;
      const response = await contract.methods.getPassword(this.state.user).call();
      this.setState({ hash: response });
    }catch (error) {
      alert(
        error.message
      );
      console.error(error.message);
    }
  };

  getEncryptedPK = async (event) => {
    event.preventDefault();
    try {      
      const { contract } = this.state;
      const response = await contract.methods.getEncryptedPK(this.state.user, CryptoJS.SHA512(this.state.pass).toString()).call();
      this.setState({ pk_aes: response });
    }catch (error) {
      alert(
        error.message
      );
      console.error(error.message);
    }
  };

  getPK = async (event) => {
    event.preventDefault();
    try{
      const { contract } = this.state;
      const response = await contract.methods.getEncryptedPK(this.state.user, CryptoJS.SHA512(this.state.pass).toString()).call();
      this.setState({ pk: CryptoJS.AES.decrypt(response, this.state.pass).toString(CryptoJS.enc.Utf8)});
    }catch (error) {
      alert(
        error.message
      );
      console.error(error.message);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="Dapp">
        <h1>Store It!</h1>
        <form onSubmit={this.storeData}>
          <label>Username</label>
          <br />
          <input type="text" value={this.state.user} onChange={this.handleChangeUser}></input>
          <br />
          <label>Private Key</label>
          <br />
          <input type="text" value={this.state.pk} onChange={this.handleChangePK}></input>
          <br />
          <label>Password</label>
          <br />
          <input type="password" value={this.state.pass} onChange={this.handleChangePassword}></input>
          <br />
          <label>Password Hashed</label>
          <br />
          <input type="text" value={this.state.hash} readOnly disabled></input>
          <br />
          <label>Private Key AES Encrypted</label>
          <br />
          <input type="text" value={this.state.pk_aes} readOnly disabled></input>
          <br />
          <br />
          <input type="submit" value="STORE DATA IN BLOCKCHAIN"></input>
          </form>
          <br />
          <form onSubmit={this.getEncrypt}>
          <input type="submit" value="ENCRYPT PASSWORD & PK"></input>
          </form>
          <br />
          <form onSubmit={this.getPassword}>
          <input type="submit" value="GET HASHED PASSWORD"></input>
          </form>
          <br />
          <form onSubmit={this.getEncryptedPK}>
          <input type="submit" value="GET AES PK"></input>
          </form>
          <br />
          <form onSubmit={this.getPK}>
          <input type="submit" value="GET PRIVATE KEY"></input>
          </form>
      </div>
    );
  }

}

export default Dapp;