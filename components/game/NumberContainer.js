import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		padding: 24,
		margin: 24,
		borderRadius: 8,
		alignItems: 'center',
		alignContent: 'center',
	},
	numberText: {
		color: Colors.red500,
		fontSize: 36,
		fontFamily: 'open-sans-bold',
	},
});