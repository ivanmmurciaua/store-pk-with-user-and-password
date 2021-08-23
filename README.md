# Storing your Private Key Securely

This repository contains a project that you can use as to store your private key in blockchain using a username and password system.

## Diagram
![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/diagram.png?raw=true)

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/ivanmmurciaua/store-pk-with-user-and-password
cd store-pk-with-user-and-password
npm install
```

Once installed;

FOR LOCAL DEPLOYMENT:

Run Hardhat's testing network:

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

## Guide

First of all, you need to deploy all the scenario without errors:

### Store data

Write the username, your private key and your password:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/store_1.jpg?raw=true)

Click this button to encrypt password and private key:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/store_2.jpg?raw=true)

Now, you can see your password encrypted and your private key encrypted with your textplain password key:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/store_3.jpg?raw=true)

Let's store this data into our local blockchain:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/store_4.jpg?raw=true)

Confirm Metamask transaction:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/store_5.jpg?raw=true)

Confirmation:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/store_6.jpg?raw=true)

Hardhat log:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/store_7.jpg?raw=true)


### Retrieve Password Hashed stored in blockchain


Enter your username, this is sufficient:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/password_1.jpg?raw=true)

Click this button to read from blockchain storage:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/password_2.jpg?raw=true)

If the username is registered, your hashed password will appear in the corresponding field:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/password_3.jpg?raw=true)


### Retrieve encrypted Private Key stored in blockchain


To consult your encrypted private key, you must enter your username and password:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/aespk_1.jpg?raw=true)

Click on the following button:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/aespk_2.jpg?raw=true)

If the username and password are correct, your encrypted private key will be displayed on the screen:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/aespk_3.jpg?raw=true)


### To conclude, recover your forgotten Private Key  


To recover your REAL private key, you must enter your username and password:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/pk_1.jpg?raw=true)

Click on this button:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/pk_2.jpg?raw=true)

And... If everything matches, your private key will be returned to you to recover your funds:

![alt text](https://github.com/ivanmmurciaua/store-pk-with-user-and-password/blob/main/images/tutorial/pk_3.jpg?raw=true)


**The end**

## Possible improvements:

- Change Username
- Change Password
- Change Private Key

**Happy _buidling_!**
