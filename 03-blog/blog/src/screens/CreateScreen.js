import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(Context);

	return (
		<BlogPostForm
			onSubmit={(title, content) => {
				// We have a callback function below so that we don't navigate immediately (wait on addBlogPost function)
				addBlogPost(title, content, () => navigation.navigate('Index'));
			}}
		/>
	);
};

const styles = StyleSheet.create({});

export default CreateScreen;
