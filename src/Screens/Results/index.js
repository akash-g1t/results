import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../Components/CutsomHeader';
import styles from './styles';

function AddMember({navigation}) {
  return (
      <View>
        <Header title="Results" navigation={navigation} />
        <View style={styles.main}>
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
}

export default AddMember;
