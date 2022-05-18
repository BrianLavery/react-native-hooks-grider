import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// Destructure from props
const HomeScreen = ({ navigation }) => {
  return (
    <View >
      <Text style={styles.text}>Simple menu for our apps</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List" 
      />
      <Button 
        onPress={() => navigation.navigate('Images')}
        title="Go to Image Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('CounterReducer')}
        title="Go to Counter Demo with useReducer" 
      />
      <Button 
        onPress={() => navigation.navigate('Colour')}
        title="Go to Colour Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('BoxExercise')}
        title="Go to Box Screen Exercise" 
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
