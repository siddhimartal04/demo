
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator()
export default class DrawerNavigator extends Component {
    render() {
        return(
            <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
                <Drawer.Screen name='Home' component={TabNavigator} />
            </Drawer.Navigator>
        )
    }
}