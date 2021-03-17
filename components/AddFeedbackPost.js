import React, { useState } from 'react';
import { View,Text, Image , StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';

import { Formik } from 'formik';

const AddFeedbackPost = (props) => {



    const handleMessage = (value) => {
        alert(value.message);
        
        
    }

    return (
        <View  style={styles.container}>
                {
                    props.addFeedback.map(item => {
                        return (
                            <View key={item.id} style={styles.addFeedbackContainer} elevation={20}>
                                    <Image
                                    source={require('../assets/profilePic.jpeg')}
                                    style={styles.profileStyles}
                                    />
                                    <Text style={{fontSize:20, marginTop:10}}>{item.userName}</Text>
                                    

                                    <Formik
                                    initialValues={{message:''}}
                                    onSubmit={values=> {handleMessage(values);
                                    } }
                                    >

                                    {({handleChange, handleBlur,handleSubmit, values}) => (
                                        <View style={{width:'85%'}}>
                                        <TextInput
                                        elevation ={10}
                                        multiline = {true}
                                        numberOfLines = {6}
                                        maxLength = {100}
                                       
                                        
                                        
                                          
                                        placeholder="Write Your Feedback here..."
                                        style={styles.inputStyles}
                                        onChangeText={handleChange('message')}
                                        onBlur={handleBlur('message')}
                                        value={values.message}
                                        
                                        />
                                                <Text>
            Maximum characters 100                  {values.message.length}/100</Text>
                                        {/* <Button 
                                        title="Submit Feedback"
                                        color='purple'
                                        onPress={handleSubmit}
                                        /> */}

                                        <TouchableOpacity style={styles.feedbackButton}>
                                            <Text style={{color:'black',fontSize:20}}
                                            onPress={handleSubmit}
                                            >
                                                Submit 
                                            </Text>
                                        </TouchableOpacity>
                                        </View>
                                    )}
                                        
                                    </Formik>
                            </View>
                        )
                    })
                }
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    profileStyles: {
        height: 100,
        width:100,
        borderRadius:50
    },
    addFeedbackContainer: {
        width: '90%',
        justifyContent:'center',
        height: 500,
        alignItems:'center',
        backgroundColor: '#48CCCD',
        marginTop:10,
        marginLeft:19,
       
        marginBottom:20,
        padding:10,
        borderColor:'black',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        }
    },
    inputStyles : {
        padding: 10,
        width: '100%',
        borderColor: 'black',
        borderWidth:1.5,
        marginTop: 80,
        shadowColor: "#000000",
        backgroundColor: 'white',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height:70,
        shadowOffset: {
        height: 1,
        width: 1
        },
        marginBottom:20,
        fontSize:16
    },
    feedbackButton : {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop:40,
        padding: 8,
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10
    }
})

export default AddFeedbackPost;