
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export default class StackNavigator extends Component {
    render() {
        return(
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='StackScreen' component={StackScreen} />
            </Stack.Navigator>
        )
    }
}