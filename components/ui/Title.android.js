import { StyleSheet, Text } from 'react-native';
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
		// borderBottomWidth: Platform.OS === 'android' ? 2 : 0,
		// borderBottomWidth: Platform.select({ios:2 , android: 0}),
		borderBottomWidth: 2,
		borderColor: Colors.yellow500,
		marginHorizontal: 24,
		maxWidth: '88%',
		width: 335,
	},
});
