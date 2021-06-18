import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'lightblue'
  },

  flatlist: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },

  input: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    height: 130,
    width: 310,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
  },

  inputTitle: {
    fontSize: 20

  },
  inputField: {
    marginTop: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    width: '100%'

  }
});

export default styles