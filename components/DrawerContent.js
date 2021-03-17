import React, { useContext } from 'react';
import { Text, TouchableOpacity, View , StyleSheet, Image} from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from './Context';

import {DrawerActions} from '@react-navigation/native'

const DrawerContent = (props) => {

    const { SignOut } = useContext(AuthContext);

    // const navigation = useNavigation();


    const LogOut = () => {
        //props.navProps.navigation.reset([NavigationAction.navigate({ routeName: 'Login' })], 0);
        props.navProps.navigation.dispatch(DrawerActions.closeDrawer())
        SignOut()
    }

    return (
       //<DrawerContentScrollView style={{flex:1}}>
           <View style={Styles.container}>

                <DrawerContentScrollView style={{flex:1}} {...props.navProps}>
                <View style={Styles.mainContent}>
                    <View>

                        {
                            props.userLoginState.profileImage ? (
                                <Image 
                            source={{uri: props.userLoginState.profileImage}}
                            style={Styles.profileImageStyle}
                            />
                            ) : (
                                <Image 
                            source={require('../assets/profilePic.jpeg')}
                            style={Styles.profileImageStyle}
                            />
                            )
                        }

                        <Text style={{fontSize: 20 }}>{props.userLoginState.userName}</Text>
                    </View>

                    <View style={{marginTop:30}}>

                        <TouchableOpacity style={Styles.navStyles} onPress={() =>  {props.navProps.navigation.navigate('Dashboard')}}>
                            <Text style={{fontSize: 20 }}>DashBoard</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.navStyles} onPress={() =>  {props.navProps.navigation.navigate('AddFeedback')}}>
                            <Text style={{fontSize: 20 }}>Add Feedback</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.navStyles} onPress={() => LogOut()}>
                    <Text style={{fontSize:20}}>Logout</Text>
                </TouchableOpacity>
                    </View>

                </View>
                </DrawerContentScrollView>



                
           </View>
      // </DrawerContentScrollView>
    );
}


const Styles = StyleSheet.create({
    container : {
        flex:1,
    },
    mainContent : {
       
      marginLeft:10
    },
    bottomContent : {
       
        justifyContent:'center',
        alignItems:'center',
        borderTopColor: 'black',
       
     
    },
    profileImageStyle : {
        marginTop: 20,
      
        height: 80,
        width: 80,
        borderRadius: 1,
        
    },
    navStyles : {
        marginTop: 10,
        backgroundColor:'white',
        padding:10,
        marginRight:45,
      
        
    }
})

export default DrawerContent;
