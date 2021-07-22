import React from 'react';
import { StyleSheet, Text, View, StatusBar  } from 'react-native';

export default function Service() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        height: 30,
        border: 3,
        borderColor: "#000"
      }}>
        <Text>At Service</Text>
      </View>
      
    </View>
  );
}
