import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
	return (
		<ImageBackground
			source={require('./assets/images/background.png')}
			resizeMode="cover"
			style={styles.rootScreen}
			imageStyle={styles.backgroundImage}
		>
			<StartGameScreen />
		</ImageBackground>
	);
};

export default App;

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
