import { useState } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Alert,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';

// My components
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState('');

	const { width, height } = useWindowDimensions();

	const numberInputHandler = (enteredText) => {
		setEnteredNumber(enteredText);
	};

	const resetInputHandler = () => {
		setEnteredNumber('');
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			// Show alert
			Alert.alert(
				'Invalid Number!',
				'Please enter a valid number between 1 and 99',
				[
					{
						text: 'Okay',
						style: 'destructive',
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}

		onPickNumber(chosenNumber);
	};

	const marginTopDistance = height < 400 ? 25 : 55;

	return (
		<ScrollView style={{ flex: 1 }}>
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
				<View
					style={[
						styles.rootContainer,
						{ marginTop: marginTopDistance },
					]}
				>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a Number</InstructionText>
						<TextInput
							style={styles.numberInput}
							maxLength={2}
							keyboardType="number-pad"
							autoCapitalize="none"
							autoCorrect={false}
							color={Colors.yellow400}
							cursorColor={Colors.yellow400}
							onChangeText={numberInputHandler}
							value={enteredNumber}
						/>

						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={confirmInputHandler}>
									{' '}
									Confirm
								</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={resetInputHandler}>
									{' '}
									Reset
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		alignItems: 'center',
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.yellow400,
		borderBottomWidth: 2,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContainer: {
		paddingTop: 10,
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
});
