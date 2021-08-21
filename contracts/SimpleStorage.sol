// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract SimpleStorage {
  struct SecureBox{
        
        // Hash
        string SHA;
        
        // Encrypted Pk
        string AES;
    }
    
    mapping (string => SecureBox) user_pass;
    
    function storeData(string memory _user, string memory _password, string memory _encrypted_pk) public {
        
        SecureBox storage sb =user_pass[_user]; 
        
        require(bytes(sb.SHA).length == 0, "User already stored");
        
        sb.SHA = _password; sb.AES = _encrypted_pk;
        
    }
    
    function getPassword(string memory _user) public view returns(string memory){
        
        SecureBox storage sb =user_pass[_user]; 
        
        require(bytes(sb.SHA).length != 0, "User not stored yet");
        
        return sb.SHA;
        
    }
    
    function getEncryptedPK(string memory _user, string memory _password) public view returns(string memory){
        
        SecureBox storage sb =user_pass[_user]; 
        
        require(bytes(sb.SHA).length != 0, "User not stored yet");
        require(keccak256(bytes(sb.SHA)) == keccak256(bytes(_password)), "Password Incorrect");
        
        return sb.AES;
        
    }
    
    function getUserList(string memory _user) public view returns(SecureBox memory){
        return user_pass[_user];
    }
}