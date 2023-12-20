import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const GameScreen = ({ userNumber }) => {
	const initialGuess = generateRandomBetween(
		minBoundary,
		maxBoundary,
		userNumber
	);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	let maxBoundary = 100;
	let minBoundary = 1;

	const nextGuessHandler = (direction) => {
		// direction => 'lower' or 'greater'
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know that this i wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
			generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRndNumber);
	};

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View>
					<PrimaryButton
						onPress={nextGuessHandler().bind(this, 'greater')}
					>
						+
					</PrimaryButton>
					<PrimaryButton
						onPress={nextGuessHandler().bind(this, 'lower')}
					>
						-
					</PrimaryButton>
				</View>
			</View>
			{/* <View>LOG ROUNDS</View> */}
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 40,
	},
});
