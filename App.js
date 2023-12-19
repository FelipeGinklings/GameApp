import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
	return (
		<View style={styles.rootScreen }>
			<StartGameScreen />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f'
  }
});
