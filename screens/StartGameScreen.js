import { StyleSheet, Text, View, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
        color='#f2b95e'
        cursorColor={'#f2b95e'}
			/>

			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton> Confirm</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton> Reset</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: '#57a2aa',
		borderRadius: 12,
		shadowColor: 'black',
		// ANDROID
		elevation: 4,
		// IOS
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		shadowOpacity: 0.25,
	},

	textInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: '#f2b95e',
		borderBottomWidth: 2,
		color: '#ddb52f',
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	buttonsContainer: {
		paddingTop: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		flex: 1,
	},
});
