import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePicker from 'react-native-image-crop-picker';
import { AuthContext } from './Context'
import { useContext } from 'react';

const RegistrationScreen = ({navigation}) => {
    const [image, setImage] = useState(null)
  const [images, setImages] = useState(null)

  const pickSingle = (cropit, circular = true, mediaType) => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => {
        console.log('received image', image);
        setImage({
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
        })
        setImages(null);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  const renderAsset = (image) => {
    return renderImage(image);
  }

  const renderImage = (image) => {
    return (
      <Image 
        style={{
          width: 120, 
          height: 120, 
         
          resizeMode: 'contain', 
          borderRadius: 100
        }} 
        source={image}
      />
    );
  }

   // const [photo, setPhoto] = useState(null)

    // const handleChooseImage = () => {

    //     let options = {}

    //     ImagePicker.launchImageLibrary(options ,(response) => {
    //        // console.log(response.uri);
    //         if (response.uri) {
    //             setPhoto(response.uri)
    //         }
    //     });

    // }
    


        const [userName, setUserName] = useState(null);
        const [password, setPassword] = useState(null);
        const [nameErrMsg, setNameErrMsg] = useState(null);
        const [passErrMsg, setPassErrMsg] = useState(null);
        const [nameError, setNameError] = useState(false);
        const [PassError, setPassError] = useState(false);

        const { SignUp } = useContext(AuthContext);


    const handleUserName = (value) => {
        if (value.trim() === '') {
            setNameErrMsg('Enter User Name');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if (value.length < 3 || value.length > 12) {
            setNameErrMsg('Length 3 to 12 only');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if (!isNaN(value)) {
            setNameErrMsg('Cannot enter numbers');
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
            setNameErrMsg('Cannot Contain Spaces in between');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else {
            //setNameErrMsg('Valid Name','#firstmsg');
            setNameError(false);
            setUserName(value)
            return true;
        }
    }

    
    const handlePassword = (value) => {
        const minPassLength = 5;
        const maxPassLength = 8;
    
        if (value.trim() === '') {
            setPassErrMsg('Enter Password');
            setPassError(true);
            setPassword(value)
            return false;
        }
        else if (value.length < minPassLength || value.length > maxPassLength) {
            setPassErrMsg('Length 5-8');
            setPassError(true);
            setPassword(value)
            return false;
        }
        else if (!checkPassword(value)) {
            setPassErrMsg('Invalid Password');
            setPassError(true);
            setPassword(value)
            return false;
        }
        else {
            setPassError(false);
            setPassword(value);
            return true;
        }
    }


    const  isNameValid = (userName) =>{
        return userName.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;.,-:[\]]{2,}$/);
    }

    const checkPassword = (password) => {
        return password.match(/^(?=.*?[A-Za-z])(?=.*?[0-9])[A-Za-z0-9]+$/);   
    }

    const handleRegister = () => {
        if(!(nameError || PassError) && (password != null) && (userName != null) && photo != null){
            // console.log(password);
            // console.log(userName);
            SignUp(userName,password)
            // navigation.push('Dashboard',photo)
        }else {
            alert('Enter Valid Details')
        }
    }

    const checkUserNamePresent = (val) => {
        if(val == "") {
            setNameError(true)
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

            

            <StatusBar backgroundColor="#48CCCD" />
            {/* Header------- */}
         
            <View style={{margin:20, flex:1}}>
                <View style={styles.header}>
                    <Text style={{fontSize:40 , color:'black'}}>Sign Up</Text>
               
                </View>
                {image? renderAsset(image): null}
        {images ? images.map((i) => (
          <View key={i.uri}>{this.renderAsset(i)}</View>
        ))
        : null}
                {/* Login Inputs */}

                
                <View style={styles.inputContainer}>




                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                                        
                        <Text style={{fontSize:20, color:'black',marginTop:10}}>Username</Text>


                    </View>


                    <TextInput
                    style={styles.inputStyles}
                    placeholder="Username"
                    onChangeText={val => handleUserName(val)}
                    onEndEditing = {e => checkUserNamePresent(e.nativeEvent.text)}
                    value={userName}
                    />
                    { nameError &&
                            <Text style={{marginTop:5,color:'red',fontSize:15}}>{nameErrMsg}</Text>
                        }

                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                        <Text style={{fontSize:20, marginTop:25,color:'black'}}>Password</Text>



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
                        <Text style={{color:'red',fontSize:15, marginTop:10 }}>{passErrMsg}</Text>
                    }

                    {/* <TouchableOpacity 
                    style={styles.pickImage}
                    onPress={handleChooseImage}
                    >
                        <Text style={{fontSize:18, color:'white'}}>
                            Pick Profile Image
                        </Text>
                    </TouchableOpacity>
                               */}
 <View style={styles.body}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => pickSingle(true, true)}
        >
          <Text style={{fontSize:20, color:'white'}}>Select Image</Text>
        </TouchableOpacity>
      </View>
                    <TouchableOpacity style={styles.submitButton}
                    onPress={handleRegister}
                    >
                        <Text style={{fontSize:20, color:'white'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    

                    <TouchableOpacity style={styles.submitButton} 
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{fontSize:20, color:'white'}}>
                            Already have an Account?
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
        marginTop: 40
    },
    inputStyles : {
        borderColor: 'grey',
        padding: 10,
        fontSize:20,
        marginTop:2,
        borderBottomWidth: 2,
       
        backgroundColor: 'white',
    },
    submitButton : {
        marginTop:25,
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#48CCCD',
        borderRadius:10,
        opacity:1
    },

    alreadyHaveAcc : {
        position:'absolute',
        bottom:10,
        right:10
    }
  });

export default RegistrationScreen;