import { StyleSheet, View, Image, Text } from 'react-native';

// My components
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Highlight from '../components/ui/Highlight';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER!</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/success.png')}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone needed{' '}
				<Highlight color={Colors.blue100}>{roundsNumber}</Highlight>{' '}
				rounds to guess the number{' '}
				<Highlight color={Colors.orange600}>{userNumber}</Highlight>.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>
				Start New Game
			</PrimaryButton>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.yellow500,
		overflow: 'hidden',
		margin: 36,
	},
	image: {
		height: '100%',
		width: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		color: 'white',
		textAlign: 'center',
		marginBottom: 24,
	},
});
