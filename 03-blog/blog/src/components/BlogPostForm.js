import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	return (
		<View>
			<Text style={styles.label}>Edit Title:</Text>
			<TextInput style={styles.input} value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
			<Text style={styles.label}>Edit Content:</Text>
			<TextInput style={styles.input} value={content} onChangeText={setContent} />
			<Button title='Save blog post' onPress={() => onSubmit(title, content)} />
		</View>
	);
};

// Use this so that we have values on it if we come from CreateScreen (which has no initialValues object)
BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: '',
	},
};

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 16,
		padding: 4,
		margin: 4,
	},
	label: {
		fontSize: 20,
		marginBottom: 4,
		marginLeft: 4,
	},
});

export default BlogPostForm;
