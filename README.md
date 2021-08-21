# Storing your Private Key Securely

This repository contains a project that you can use as to store your private key in blockchain using a username and password system.

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/ivanmmurciaua/store-pk-with-user-and-password
cd store-pk-with-user-and-password
npm install
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm install web3
npm start
```

**Happy _buidling_!**