import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DashBoard from './DashBoard'
import moment from 'moment';
const FeedbackPost = (props) => {


    return (
        <View style={styles.container}>
            {
                props.feedback.map(item => {
                    return (
                        <View style={styles.post} key={item.id}>
                            {/* Post Header */}
                            <View style={styles.postHeader}>
                                <Text style={{fontSize:23}}>Feedback              {moment().startOf('day').fromNow()}</Text>
                                
                            </View>
                            <View style={styles.feedbackText}>
                                <Text style={{fontSize:18,}} >{item.comment}</Text>
                            </View>
                            <View style={styles.feedbackText}>
                                
                            
                            
                                <Text style={{fontSize:17,marginLeft:95,marginTop:55}} >{item.date}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    post: {
        height: 250,
        width:"100%",
        backgroundColor: 'white',
        marginBottom:20,
        borderWidth:1,
        borderColor: 'black'
    },
    postHeader : {
        padding:10,
        backgroundColor: '#48CCCD',
        margin: 8
    },
    feedbackText : {
        padding:10,
        margin: 10
    }
})

export default FeedbackPost;