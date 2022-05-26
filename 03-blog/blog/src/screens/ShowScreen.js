import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	const id = navigation.getParam('id');

	const blogPost = state.find((blogPost) => blogPost.id === id);

	return (
		<View>
			<Text>Title: {blogPost.title}</Text>
			<Text>Content: {blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
				<EvilIcons name='pencil' size={35} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({});

export default ShowScreen;
