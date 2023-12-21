import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 28,
		// fontSize: 24,
		fontWeight: 'bold',
		color: Colors.secondary500,
		textAlign: 'center',
		paddingVertical: 15,
		borderBottomWidth: 2,
		borderColor: Colors.secondary600,
    marginHorizontal: 24
	},
});
