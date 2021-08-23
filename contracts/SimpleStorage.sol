// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/**
 * @title Secure PK Storing in Ethereum  
 * 
 * @author @Ivanovish10
 * 
 * @dev Draft on secure user and password storage to 
 *      retrieve your private key remotely
 */
contract SimpleStorage {
    
    /**
     * @dev This struct is for store password and PK both encrypted
     */
    struct SecureBox{
        // Password Hashed in SHA256
        string SHA;
        
        // Encrypted PK in AES algorithm
        string AES;
    }
    
    /**
     * @dev Mapping to store @user and his SecureBox
     * e.g. @Mike123 => { 46e...4a5, U2F...pPi }
     */
    mapping (string => SecureBox) user_pass;
    
    /**
     * @dev     This function stores in user_pass mappping, user and his SecureBox
     *          after checking if it is not already registered
     *
     * @param   _user         is the username
     * @param   _password     is the SHA512-password hashed
     * @param   _encrypted_pk is the AES-user private key encrypted
     */
    function storeData(string memory _user, string memory _password, string memory _encrypted_pk) public {
        
        SecureBox storage sb =user_pass[_user]; 
        
        require(bytes(sb.SHA).length == 0, "User already stored");
        
        sb.SHA = _password; sb.AES = _encrypted_pk;
    }
    
    /**
     * @dev     This function returns SHA512-password hashed stored 
     *          given username after checking if it is already registered
     *
     * @param   _user is the username
     */
    function getPassword(string memory _user) public view returns(string memory){
        
        SecureBox storage sb =user_pass[_user]; 
        
        require(bytes(sb.SHA).length != 0, "User not stored yet");
        
        return sb.SHA;
    }

    /**
     * @dev     This function returns SHA512-password hashed given username
     *          after checking if it is already registered & the password is correct
     *
     * @param   _user     is the username to check & search
     * @param   _password is the SHA512-password hashed to check & search
     */
    function getEncryptedPK(string memory _user, string memory _password) public view returns(string memory){
        
        SecureBox storage sb =user_pass[_user]; 
        
        require(bytes(sb.SHA).length != 0, "User not stored yet");
        require(keccak256(bytes(sb.SHA)) == keccak256(bytes(_password)), "Password Incorrect");
        
        return sb.AES;
    }

    /**
     * @dev     IN REVISION - Returns SecureBox given a user
     *
     * @param   _user is the username to check
     */
    function getUserList(string memory _user) public view returns(SecureBox memory){
        return user_pass[_user];
    }
}