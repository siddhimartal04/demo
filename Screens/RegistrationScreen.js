import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const RegistrationScreen = ({navigation}) => {
    const [photo, setPhoto] = useState('../assets/profilePic.jpeg')



        const [userName, setUserName] = useState(null);
        const [password, setPassword] = useState(null);
        const [nameErrMsg, setNameErrMsg] = useState(null);
        const [passErrMsg, setPassErrMsg] = useState(null);
        const [nameError, setNameError] = useState(false);
        const [PassError, setPassError] = useState(false);



    const handleUserName = (value) => {
        if (value.trim() === '') {
            setNameErrMsg('Enter First Name');
            setNameError(true);
            return false;
        }
        else if (value.length < 3 || value.length > 12) {
            setNameErrMsg('Length 3 to 12 only');
            setNameError(true);
            return false;
        }
        else if (!isNaN(value)) {
            setNameErrMsg('cannot enter numbers');
            setNameError(true);
            return false;
        }
        else if (!isNameValid(value)) {
            setNameErrMsg('Invalid First Name');
            setNameError(true);
            return false;
        }
        else if ((value.split(' ')).length > 1) {
            setNameErrMsg('Cannot Contain Spaces in between');
            setNameError(true);
            return false;
        }
        else {
            //setNameErrMsg('Valid Name','#firstmsg');
            setNameError(false);
            return true;
        }
    }

    const handlePassword = (value) => {
        const minPassLength = 5;
        const maxPassLength = 8;
    
        if (value.trim() === '') {
            setPassErrMsg('Enter Password');
            setPassError(true)
            return false;
        }
        else if (value.length < minPassLength || value.length > maxPassLength) {
            setPassErrMsg('Length 5-8');
            setPassError(true)
            return false;
        }
        else if (!checkPassword(value)) {
            setPassErrMsg('Invalid Password');
            setPassError(true)
            return false;
        }
        else {
            setPassError(false);
            return true;
        }
    }


    const  isNameValid = (userName) =>{
        return userName.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;.,-:[\]]{2,}$/);
    }

    const checkPassword = (password) => {
        const passRegx = /^(?=.*\d)(?=.*[a-z]).{4,8}$/;
        return passRegx.test(password);    
    }


    return (
        <ScrollView style={styles.container}>
        <KeyboardAvoidingView >

            

            <StatusBar backgroundColor="skyblue" />
            {/* Header------- */}
         
            <View style={{margin:20, flex:1}}>
                <View style={styles.header}>
                    <Text style={{fontSize:40 , color:'black'}}>Register Here</Text>
                </View>

                {/* Login Inputs */}

                
                <View style={styles.inputContainer}>

                        {/* <Image 
                        source={{uri: photo}}
                        style={{width:100, height:100,alignSelf:'center',borderRadius:50,resizeMode:'cover'}}
                        /> */}


                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                                        
                        <Text style={{fontSize:25, color:'black'}}>Username</Text>

                        { nameError &&
                            <Text style={{alignSelf:'center',marginRight:10,color:'red',fontSize:15}}>{nameErrMsg}</Text>
                        }
                    </View>

                    <TextInput
                    style={styles.inputStyles}
                    placeholder="Username"
                    onChangeText={val => handleUserName(val)}
                    value={userName}
                    />

                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                        <Text style={{fontSize:25, marginTop:30,color:'black'}}>Password</Text>

                    {   PassError &&
                        <Text style={{alignSelf:'center',marginRight:10,color:'red',fontSize:15, marginTop:15 }}>{passErrMsg}</Text>
                    }

                    </View>
                    <TextInput
                        style={styles.inputStyles}
                        placeholder="Password"
                        onChangeText={val => handlePassword(val)}
                        value = {password}
                        secureTextEntry
                    />
                              

                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={{fontSize:20, color:'white'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    

                    <TouchableOpacity style={styles.submitButton} 
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{fontSize:20, color:'white'}}>
                            Already Have An Account?
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>

            
        
        </KeyboardAvoidingView>
        </ScrollView>

    );

}

const styles = StyleSheet.create({
    container : {
      flex: 1,
      marginLeft:20,
      marginRight:20,
    },
    header : {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer : {
        flex: 0.7,
        width: "100%",
        marginTop: 40
    },
    inputStyles : {
        borderColor: 'grey',
        padding: 10,
        fontSize:20,
        marginTop:10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    submitButton : {
        marginTop:40,
        padding: 12,
        alignItems: 'center',
        backgroundColor: 'skyblue',
        borderRadius:10,
        opacity:1
    },
    pickImage : {
        width: "50%",
        backgroundColor: 'purple',
        marginTop:20,
        padding:10,
        borderRadius:10
    },
    alreadyHaveAcc : {
        position:'absolute',
        bottom:10,
        right:10
    }
  });

export default RegistrationScreen;
