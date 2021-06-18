import * as React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import styles from './styles'
import routes from '../../rootNavigation/routes'
import Header from '../../Components/CutsomHeader'

function Home({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <Header title="Welcome" navigation={navigation} />
            <View style={styles.main}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.AddMember)} >
                        <Text style={styles.buttonText}>Got To Results</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Home
