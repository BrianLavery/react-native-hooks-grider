import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// Destructure from props
const HomeScreen = ({ navigation }) => {
  return (
    <View >
      <Text style={styles.text}>Hi there</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List" 
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});

export default HomeScreen;
