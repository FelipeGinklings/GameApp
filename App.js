import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
	return (
		<LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
			<StartGameScreen />
		</LinearGradient>
	);
};

export default App;

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
