import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Services({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>

      {/* TabBar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Services')}
        >
          <Text style={styles.tabBarIcon}>"Go to Service"</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Company')}
        >
          <Text style={styles.tabBarIcon}>"Go to Company"</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
