import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
	const [userNumber, setUserNumber] = useState();

	const pickedNumberHandler = (pickedNumberHandler) => {
		setUserNumber(pickedNumberHandler);
	};

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}

	return (
		<ImageBackground
			source={require('./assets/images/background.png')}
			resizeMode="cover"
			style={styles.rootScreen}
			imageStyle={styles.backgroundImage}
		>
			{screen}
		</ImageBackground>
	);
};

export default App;

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
