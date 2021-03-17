
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
export default class TabNavigator extends Component {
    render() {
        return(
            <Tab.Navigator>
                <Tab.Screen name='Home' component={StackNavigator} />
                <Tab.Screen name='TabA' component={TabA} />
            </Tab.Navigator>
        )
    }
}