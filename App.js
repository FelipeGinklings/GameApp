import { useState } from 'react';
import {
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// My Screens
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const pickedNumberHandler = (pickedNumberHandler) => {
		setUserNumber(pickedNumberHandler);
		setGameIsOver(false);
	};

	const gameOverHandler = (numberOfRounds) => {
		setGameIsOver(true);
		setGuessRounds(numberOfRounds);
	};

	const startNewGameHandler = () => {
		setUserNumber(null);
		setGuessRounds(0);
	};

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundsNumber={guessRounds}
				onStartNewGame={startNewGameHandler}
			></GameOverScreen>
		);
	}

	return (
		<>
			<StatusBar style="light" />
			<ImageBackground
				source={require('./assets/images/background.png')}
				style={styles.rootScreen}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
