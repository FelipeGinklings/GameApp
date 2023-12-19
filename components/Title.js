import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

const Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 26,
		// fontSize: 24,
		fontWeight: 'bold',
		color: Colors.secondary500,
		textAlign: 'center',
		paddingVertical: 15,
		// borderWidth: 2,
		// borderColor: '#efa537',
	},
});
