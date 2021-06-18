import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    HeaderView: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center'
    },
    HeaderTitleView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    HeaderTitle: {
        color: 'white',
        fontSize: 50,
        fontWeight: '400',
    }

})

export default styles