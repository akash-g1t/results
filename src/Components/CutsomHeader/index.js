import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from './styles'

const Header = ({title, navigation}) => {

    const toggleDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.HeaderView}>
        <TouchableOpacity onPress={toggleDrawer} >
            <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
            />
        </TouchableOpacity>

        <View style={styles.HeaderTitleView}>
            <Text style={styles.HeaderTitle}>{ title }</Text>
        </View>
        </View>

    )
}

export default Header