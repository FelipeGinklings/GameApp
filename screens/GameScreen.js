import { useEffect, useState } from 'react';
import {
	StyleSheet,
	View,
	Alert,
	FlatList,
	useWindowDimensions,
	Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// My components
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

let maxBoundary = 100;
let minBoundary = 1;

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	const { width, height } = useWindowDimensions();

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userNumber, onGameOver]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	const nextGuessHandler = (direction) => {
		// direction => 'lower' or 'greater'
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRndNumber);
		setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
	};

	const guessRoundsListLength = guessRounds.length;

	// Vertical Mode Styles
	// screen
	let alignItemsDistance = '';
	let paddingVertical = 40;
	// listItems
	let widthPercent = '';

	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPress={nextGuessHandler.bind(this, 'greater')}
						>
							<Ionicons name="md-add" size={24} color={'white'} />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPress={nextGuessHandler.bind(this, 'lower')}
						>
							<Ionicons
								name="md-remove"
								size={24}
								color={'white'}
							/>
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</>
	);

	if (width > 500) {
    // Change screens style for better view
		alignItemsDistance = 'center';
		paddingVertical = 0;
		widthPercent = '100%';
    
		content = (
			<>
				<InstructionText style={{ marginTop: 15 }}>
					Higher or lower?
				</InstructionText>
				<View style={styles.buttonsContainerWide}>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPress={nextGuessHandler.bind(this, 'greater')}
						>
							<Ionicons name="md-add" size={24} color={'white'} />
						</PrimaryButton>
					</View>
					<NumberContainer>{currentGuess}</NumberContainer>
					<View style={styles.buttonContainer}>
						<PrimaryButton
							onPress={nextGuessHandler.bind(this, 'lower')}
						>
							<Ionicons
								name="md-remove"
								size={24}
								color={'white'}
							/>
						</PrimaryButton>
					</View>
				</View>
			</>
		);
	}

  // Game Screen Style
	const screenStyle = {
		flex: 1,
		alignItems: alignItemsDistance,
		paddingVertical: paddingVertical,
	};

	return (
		<View style={screenStyle}>
			<Title>Opponent's Guess</Title>
			{content}
			<FlatList
				style={[styles.listItems, { width: widthPercent }]}
				data={guessRounds}
				renderItem={(itemData) => (
					<GuessLogItem
						roundNumber={guessRoundsListLength - itemData.index}
						guess={itemData.item}
					>
						{' '}
					</GuessLogItem>
				)}
				keyExtractor={(item) => item}
				alwaysBounceVertical={false}
			></FlatList>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	instructionText: {
		marginBottom: 12,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 0.5,
	},
	listItems: {
		margin: 20,
	},
	buttonsContainerWide: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
