import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert,
} from 'react-native';
import Header from '../../Components/CutsomHeader';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';

const AddMember = ({navigation}) => {
  const [user, setUser] = useState({
    name: '',
    points: null,
    gender: 'male',
    admin: false,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const [errors, setErrors] = useState({
    name: false,
    points: false,
    allValid: true,
  });

  useEffect(async () => {
    var storageUsers = await AsyncStorage.getItem('users');
    if (storageUsers && storageUsers.length) {
      storageUsers = JSON.parse(storageUsers);
      storageUsers = storageUsers.filter(item => item.name);
      await AsyncStorage.setItem('users', storageUsers);
      console.log('Storage users are: ', storageUsers);
    } else {
      storageUsers = [];
      await AsyncStorage.setItem('users', storageUsers);

    }
    console.log('Storage users are: ', storageUsers);
  }, []);

  useEffect(() => {
    console.log('current inputs are : ', user);
  });

  const handleSubmit = async () => {
    // First Setting all errors False
    setErrors({
      name: false,
      points: false,
      allValid: true,
    });

    if (!user.name) {
      setErrors({
        ...errors,
        name: true,
        allValid: false,
      });
    } else if (!user.points) {
      setErrors({
        ...errors,
        points: true,
        allValid: false,
      });
    } else if (errors.allValid) {
      try {
        var previousUsers = await AsyncStorage.getItem('users');
        if (!previousUsers) {
          previousUsers = [];
        } else {
          previousUsers = JSON.parse(previousUsers);
        }
        console.log('previousUsers are: ', previousUsers);
        var newUser = {...user, id: Math.floor(Math.random() * 1000000)};
        previousUsers.push(newUser);
        await AsyncStorage.setItem('users', JSON.stringify(previousUsers));
        var previousUsers = await AsyncStorage.getItem('users');
        console.log('previousUsers are: ', previousUsers);

        Alert.alert('Saved!', 'New User Created!', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

        // Setting User fields blank
        setUser({
          name: '',
          points: null,
          gender: 'male',
          admin: false,
        });
      } catch (error) {
        console.log('error is: ', error);
      }
    }
  };

  const inputList = [
    {
      id: 1,
      title: 'Enter Name',
      state: 'title',
    },
    {
      id: 2,
      title: 'Enter Points',
      state: 'points',
    },
    {
      id: 3,
      title: 'Select Gender',
      state: 'gender',
    },
    {
      id: 4,
      title: 'Admin',
      state: 'admin',
    },
  ];

  const genderChoiceList = [
    {
      id: 1,
      label: 'Male',
      value: 'Male',
    },
    {
      id: 2,
      label: 'Female',
      value: 'Female',
    },
  ];

  const inputChange = (state, text) => {
    setUser({
      ...user,
      [state]: text,
    });
  };

  const renderItem = ({item}) => (
    <View style={styles.input}>
      <Text style={styles.inputTitle}>{item.title}</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={text => inputChange(item.state, text)}
        placeholder="Enter Name"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header title="Add Member" navigation={navigation} />
        <View style={styles.flatlist}>
          {/* <FlatList data={inputList} renderItem={renderItem} /> */}
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Enter Name</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={text => setUser({...user, name: text})}
              placeholder="Enter Name"
              value={user.name}
            />
            {errors.name && <Text style={{color: 'red'}}>Enter Points</Text>}
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Enter Name</Text>
            <TextInput
              style={styles.inputField}
              keyboardType="numeric"
              onChangeText={text => setUser({...user, points: text})}
              placeholder="Enter Name"
              value={user.points}
            />
            {errors.points && <Text style={{color: 'red'}}>Enter Points</Text>}
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Select Gender</Text>
            {/* <TextInput style={styles.inputField} onChangeText={text =>setUser({...user, gender: text})} placeholder="Enter Name" /> */}
            <View style={[styles.inputField, {zIndex: 2000}]}>
              <Picker
                style={styles.picker}
                // selectedValue={gender}
                selectedValue={user.admin}
                onValueChange={value => setUser({...user, gender: value})}>
                <Picker.item label="Male" value="male" />
                <Picker.item label="Female" value="female" />
              </Picker>
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Admin</Text>
            <View style={styles.inputField}>
              <Picker
                style={styles.picker}
                // selectedValue={gender}
                selectedValue={user.admin}
                onValueChange={value => setUser({...user, admin: value})}>
                <Picker.item label="No" value={false} />
                <Picker.item label="Yes" value={true} />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.submit}>
          <View style={styles.buttonWrap}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddMember;
