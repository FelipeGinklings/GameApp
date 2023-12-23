import {
	StyleSheet,
	View,
	Image,
	Text,
	useWindowDimensions,
} from 'react-native';

// My components
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Highlight from '../components/ui/Highlight';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
	const { height } = useWindowDimensions();

	let imageSize = 300;
	let fontMarginSize = 24;
	let margin = 36;

	if (height < 400) {
		imageSize = 130;
		fontMarginSize = 22;
		margin = fontMarginSize;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
		margin: margin,
	};
	const summaryTextStyle = {
		fontSize: fontMarginSize,
		marginBottom: fontMarginSize,
	};

	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER!</Title>
			<View style={[styles.imageContainer, imageStyle]}>
				<Image
					style={styles.image}
					source={require('../assets/images/success.png')}
				/>
			</View>
			<Text style={[styles.summaryText, summaryTextStyle]}>
				Your phone needed{' '}
				<Highlight color={Colors.blue100}>{roundsNumber}</Highlight>{' '}
				rounds to guess the number{' '}
				<Highlight color={Colors.orange600}>{userNumber}</Highlight>.
			</Text>
			<View style={{ marginBottom: 10 }}>
				<PrimaryButton
					onPress={onStartNewGame}
					style={{ margin: 8, fontSize: 16 }}
				>
					Start New Game
				</PrimaryButton>
			</View>
		</View>
	);
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		// width: deviceWidth < 380 ? 150 : 300,
		// height: deviceWidth < 380 ? 150 : 300,
		// borderRadius: deviceWidth < 380 ? 75 : 150,
		borderWidth: 3,
		borderColor: Colors.yellow500,
		overflow: 'hidden',
	},
	image: {
		height: '100%',
		width: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		color: 'white',
		textAlign: 'center',
	},
});
