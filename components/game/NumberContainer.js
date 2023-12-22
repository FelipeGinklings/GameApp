import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		paddingBottom: deviceWidth < 380 ? 16 : 24,
    paddingTop: deviceWidth < 380 ? 32 : 48,
		borderRadius: 8,
		alignItems: 'center',
		alignContent: 'center',
	},
	numberText: {
		color: Colors.red500,
		fontSize: 40,
		fontFamily: 'open-sans-bold',
	},
});
