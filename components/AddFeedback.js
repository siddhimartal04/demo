import React from 'react';
import { useContext } from 'react';
import { ScrollView, StyleSheet , View,Text, Image, TouchableHighlight} from 'react-native';

import AddFeedbackPost from './AddFeedbackPost';

import { AuthContext } from './Context'

const AddFeedback = () => {

    const { SignOut } = useContext(AuthContext)

    const addFeedback = [
        {
            id: 1,
            userName: 'Siddhi',
            profileUri: '../assets/profilePic.jpeg',
        },
        {
            id: 2,
            userName: 'sayali',
            profileUri: '../assets/profilePic.jpeg',
        },
        {
            id: 3,
            userName: 'shraddha',
            profileUri: '../assets/profilePic.jpeg',
        },

    ]

    return (
        <ScrollView>
            {/* <View style={styles.header}>
                <View style={{margin:10 , justifyContent:'space-between', flexDirection:'row'}}> */}

                    {/* ProfileImage and User Name */}
{/* 
                    <View style={styles.headerLeft}>
                        <Image 
                        source={require('../assets/profilePic.jpeg')}
                        style={styles.profileImg}
                        />
                        <Text style={{fontSize:20}}>Siddhi</Text>                        
                    </View> */}

                    {/* Logout and Feedback Button */}
{/* 
                    <View style={styles.headerRight}>
                        <TouchableHighlight 
                        style={styles.logoutButton}
                        onPress={() => SignOut()}
                        >
                            <Text style={{fontSize:20, color:'black'}}>Logout</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View> */}

            {/* Add Feedback */}

            <View style={styles.addFeedbackContent}>
                {/* <Text style={{fontSize:25, textAlign:'center', marginBottom:20}}>Add Feedback</Text> */}

                <View>
                    <AddFeedbackPost addFeedback={addFeedback} />
                </View>

                
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    //Header
    header: {
        width:"100%",
        height:100,
        backgroundColor: '#48CCCD',
        justifyContent:'center',
      
        
    },
    profileImg : {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 50,
        marginRight: 8

    },
    headerLeft : {
        flexDirection: 'row',
        alignItems:'center',
        maxWidth:'30%'
    },
    headerRight: {
        flexDirection: 'row',
        alignItems:'center'
    },
    feedbackButton : {
        backgroundColor: '#48CCCD',
        padding: 8,
        marginRight:10,
        borderRadius:10
    },
    logoutButton : {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
    },
    // Add Feedback content
    addFeedbackContent: {
        flex: 1,
        margin:15,
        marginTop:25,
    }
})

export default AddFeedback;
