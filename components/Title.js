import { StyleSheet, Text } from 'react-native';

const Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#f2b95e',
		textAlign: 'center',
    paddingVertical: 15,
	},
});
