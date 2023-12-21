import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

// My Screens
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(true);

	const pickedNumberHandler = (pickedNumberHandler) => {
		setUserNumber(pickedNumberHandler);
    setGameIsOver(false); 
	};

	const gameOverHandler = () => {
		setGameIsOver(true);
	};

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen></GameOverScreen>;
	}

	return (
		<ImageBackground
			source={require('./assets/images/background.png')}
			style={styles.rootScreen}
		>
			<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
		</ImageBackground>
	);
};

export default App;

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
