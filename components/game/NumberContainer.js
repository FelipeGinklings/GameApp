import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
	const { width } = useWindowDimensions();

	const paddingVerticalDistance = width > 500 ? 16 : 24;
	const paddingTopDistance = width > 500 ? 16 : 48;
	const paddingHorizontalDistance = width > 500 ? 48 : 0;

	return (
		<View
			style={[
				styles.container,
				{
					paddingVertical: paddingVerticalDistance,
					paddingTop: paddingTopDistance,
					paddingHorizontal: paddingHorizontalDistance,
				},
			]}
		>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
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
