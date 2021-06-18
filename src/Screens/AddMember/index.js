import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, ScrollView} from 'react-native';
import Header from '../../Components/CutsomHeader';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';

function AddMember({navigation}) {
  const [user, setUser] = useState({
    title: '',
    points: null,
    gender: 'male',
    admin: 0,
  });

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
    <ScrollView style={styles.container}>
      <View>
        <Header title="Add Member" navigation={navigation} />
        <View style={styles.flatlist}>
          {/* <FlatList data={inputList} renderItem={renderItem} /> */}
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Enter Name</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={text => setUser({...user, title: text})}
              placeholder="Enter Name"
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Enter Points</Text>
            <TextInput
              style={styles.inputField}
              keyboardType="numeric"
              onChangeText={text => setUser({...user, points: text})}
              placeholder="Enter Name"
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Select Gender</Text>
            {/* <TextInput style={styles.inputField} onChangeText={text =>setUser({...user, gender: text})} placeholder="Enter Name" /> */}

            <RNPickerSelect
              placeholder={'Select Gender'}
              items={genderChoiceList}
              value={user.gender}
              onValueChange={value => {
                console.log('value', value);
                setUser({
                  ...user,
                  gender: value,
                });
              }}
              style={styles.inputField}
              //   useNativeAndroidPickerStyle={false}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Admin</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={text => setUser({...user, admin: text})}
              placeholder="Enter Name"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default AddMember;
