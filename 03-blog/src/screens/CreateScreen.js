import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addBlogPost } = useContext(Context);

	return (
		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput style={styles.input} value={title} onChangeText={setTitle} />
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput style={styles.input} value={content} onChangeText={setContent} />
			<Button
				title='Add Blog Post'
				// We have a callback function below so that we don't navigate immediately (wait on addBlogPost function)
				onPress={() => {
					addBlogPost(title, content, () => {
						navigation.navigate('Index');
					});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CreateScreen;
