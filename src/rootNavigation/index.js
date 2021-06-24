import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import routes from './routes'
import Home from '../Screens/Home'
import AddMember from '../Screens/AddMember'
import EditMember from '../Screens/EditMember'
import Male from '../Screens/Results/Male'
import Female from '../Screens/Results/Female'
import Admin from '../Screens/Results/Admin'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName={routes.Home}>
            <Drawer.Screen name={routes.Home} component={Home} />
            <Drawer.Screen name={routes.AddMember} component={AddMember} />
            <Drawer.Screen name={routes.Male} component={Male} />
            <Drawer.Screen name={routes.Female} component={Female} />
            <Drawer.Screen name={routes.Admin} component={Admin} />
            <Drawer.Screen name={routes.EditMember} component={EditMember} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation