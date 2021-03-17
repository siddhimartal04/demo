import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './RegistrationScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from './Context'

const LoginScreen = ({navigation}) => {

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [nameErrMsg, setNameErrMsg] = useState(null);
    const [emailErrMsg, setEmailErrMsg] = useState(null);
    const [passErrMsg, setPassErrMsg] = useState(null);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [PassError, setPassError] = useState(false);


    const { SignIn } = useContext(AuthContext)

    const handleUserName = (value) => {
        if (value.trim() === '') {
            setNameErrMsg('Enter First Name');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if (value.length < 3 || value.length > 10) {
            setNameErrMsg('Length should be between 3 to 10');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if (!isNaN(value)) {
            setNameErrMsg('Name cannot be numberic');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if (!isNameValid(value)) {
            setNameErrMsg('Invalid First Name');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if ((value.split(' ')).length > 1) {
            setNameErrMsg('Username cannot contain spaces');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else {
            
            setNameError(false);
            setUserName(value)
            return value;
        }
    }

    const handleEmail = (value) => {
        if (value.trim() === '') {
            setEmailErrMsg('Enter Email');
            setEmailError(true);
            setEmail(value)
            return false;
        }
        else if (!isEmailValid(value)) {
            setEmailErrMsg('Invalid Email');
            setEmailError(true);
            setEmail(value)
            return false;
        }
        else if ((value.split(' ')).length > 1) {
            setEmailErrMsg('Email cannot contain spaces');
            setEmailError(true);
            setEmail(value)
            return false;
        }
        else {
            
            setEmailError(false);
            setEmail(value)
            return value;
        }
    }

    const handlePassword = (value) => {
        const minPassLength = 5;
        const maxPassLength = 8;
    
        if (value.trim() === '') {
            setPassErrMsg('Enter Password');
            setPassError(true);
            setPassword(value);
            return false;
        }
        else if (value.length < minPassLength || value.length > maxPassLength) {
            setPassErrMsg('Length 5-8');
            setPassError(true);
            setPassword(value);
            return false;
        }
        else if (!checkPassword(value)) {
            setPassErrMsg('Invalid Password');
            setPassError(true);
            setPassword(value);
            return false;
        }
        else {
            setPassError(false);
            setPassword(value);
            return value;
        }
    }


    const  isNameValid = (userName) =>{
        return userName.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;.,-:[\]]{2,}$/);
    }
    const  isEmailValid = (email) =>{
        return email.match(/^[A-Za-z]{1}[A-Za-z0-9_.]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/);
    }

    const checkPassword = (password) => {
        return password.match(/^(?=.*?[A-Za-z])(?=.*?[0-9])[A-Za-z0-9]+$/);
           
    }

    const handleSubmit = () => {
        if(!(emailError || PassError) && (password != null) && (email != null)) {
            SignIn(email,password)
           // navigation.navigate('Dashboard')
        }else {
             alert('All fields are compulsory')
}
    }

    // const checkUserNamePresent = (val) => {
    //     if(val == "") {
    //         setNameError(true);
    //     }
    // }

    const checkEmailPresent = (val) => {
        if(val == "") {
            setEmailError(true)
        }
    }


    const checkPassPresent = (val) => {
        if(val == "") {
            setPassError(true)
        }
    }

    

    return (
        <ScrollView style={styles.container}>
        <KeyboardAvoidingView >

            <View>
            <StatusBar backgroundColor="#48CCCD" />
            {/* Header------- */}
         
            <View style={{margin:30, flex:1}}>
                <View style={styles.header}>
                <Icon name="rocket" size={30} color="#900" />
                    <Text style={{fontSize:40 , color:'black',marginTop:10}}>Login</Text>
                </View>

                {/* Login Inputs */}

                <View style={styles.inputContainer}>
                    {/* <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, color:'black',marginTop:40}}>Username</Text>
                    </View>

                    <TextInput
                    style={styles.inputStyles}
                    placeholder="Username"
                    onChangeText={val => handleUserName(val)}
                    onEndEditing = {e => checkUserNamePresent(e.nativeEvent.text)}
                    value={userName}
                    />
                    { nameError &&
                        <Text style={{marginTop:5,color:'red',fontSize:18}}>{nameErrMsg}</Text>
                    } */}


<View style={styles.inputContainer}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                    
                    <Text style={{fontSize:20, color:'black',marginTop:25}}>Email</Text>


                    </View>

                    <TextInput
                    style={styles.inputStyles}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={val => handleEmail(val)}
                    onEndEditing = {e => checkEmailPresent(e.nativeEvent.text)}
                    value={email}
                    />
                    { emailError &&
                        <Text style={{marginTop:5,color:'red',fontSize:18}}>{emailErrMsg}</Text>
                    }
                </View>

                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                        <Text style={{fontSize:20, marginTop:25,color:'black'}}>Password</Text>
{/* <Icon name="rocket" size={30}/> */}
                        {/* <PasswordInputText
          getRef={input => this.input = input}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        /> */}

                    </View>
                    <TextInput
                        style={styles.inputStyles}
                        placeholder="Password"
                        onChangeText={val => handlePassword(val)}
                        onEndEditing = {e => checkPassPresent(e.nativeEvent.text)}
                        value = {password}
                        secureTextEntry
                    />
                    {   PassError &&
                        <Text style={{marginTop:5,color:'red',fontSize:18 }}>{passErrMsg}</Text>
                    }
        
                    <TouchableOpacity style={styles.submitButton}
                    onPress={()=>handleSubmit()}
                    >
                        <Text style={{fontSize:20, color:'white'}}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:20, color:'black',textAlign:'center',marginTop:10}}>New to NeoScrum?</Text>

                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{fontSize:20, color:'white'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>  
        
        </KeyboardAvoidingView>
         </ScrollView>
    );
}


const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: 'white',
      paddingLeft:20,
      paddingRight:20,
      
    },
    header : {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer : {
        flex: 0.7,
        width: "100%",
    },
    inputStyles : {
        borderColor: 'grey',
        padding: 10,
        fontSize:20,
        marginTop:10,
        borderBottomWidth: 2,
       
        backgroundColor: 'white',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:5
        },
        shadowOpacity:0.12,
        shadowRadius:60
    },
    submitButton : {
        marginTop:25,
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#48CCCD',
        borderRadius:10,
        opacity:1
    }
  });
  

export default LoginScreen;