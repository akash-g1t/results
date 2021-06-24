import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
} from 'react-native';
import routes from '../../rootNavigation/routes'
import Header from '../../Components/CutsomHeader';
import styles from './styles';

const AddMember = ({navigation}) => {
  const [users, setUsers] = useState([])
  useEffect(async () => {
    var storageUsers = await AsyncStorage.getItem('users');
    storageUsers = JSON.parse(storageUsers);
    if (storageUsers) {
      setUsers(storageUsers)
    }
    console.log('users are:', users);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.input}>
      <Text style={styles.inputTitle}>{item.name}</Text>
      <Text style={styles.inputTitle}>{item.points}</Text>
      <Text style={styles.inputTitle}>{item.gender}</Text>
      <Text style={styles.inputTitle}>{item.admin}</Text>
    </View>
  );

  return (
    <View>
      <Header title="Results" navigation={navigation} />
      <View style={styles.main}>
        <FlatList data={users} renderItem={renderItem} keyExtractor={item => item.id} />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.AddMember)}>
            <Text style={styles.buttonText}>Got To Results</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddMember;
