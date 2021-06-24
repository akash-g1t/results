import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 5,
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

  },
  picker: {
    marginTop: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    // position: 'absolute',
    // bottom: -44
  },
  buttonWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  buttonText: {
    color: 'white',
  }
});

export default styles