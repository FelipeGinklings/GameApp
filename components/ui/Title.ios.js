import { StyleSheet, Text, Platform } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 28,
		color: Colors.red500,
		textAlign: 'center',
		paddingVertical: 5,
		borderColor: Colors.yellow500,
		marginHorizontal: 24,
		maxWidth: '88%',
		width: 335,
	},
});
