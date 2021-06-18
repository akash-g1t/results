import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import routes from './routes'
import Home from '../Screens/Home'
import AddMember from '../Screens/AddMember'
import Results from '../Screens/Results'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName={routes.Home}>
            <Drawer.Screen name={routes.Home} component={Home} />
            <Drawer.Screen name={routes.AddMember} component={AddMember} />
            <Drawer.Screen name={routes.Results} component={Results} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation