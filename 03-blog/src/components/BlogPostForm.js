import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<React.Fragment>
			<Text>Edit Title:</Text>
			<TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
			<Text>Edit Content:</Text>
			<TextInput value={content} onChangeText={setContent} />
			<Button
				title='Add Blog Post'
				// We have a callback function below so that we don't navigate immediately (wait on addBlogPost function)
				onPress={() => {}}
			/>
		</React.Fragment>
	);
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
