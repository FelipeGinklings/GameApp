import { StyleSheet, Text, View, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
	return (
		<View>
			<TextInput />

			<PrimaryButton> Rest</PrimaryButton>
			<PrimaryButton> Confirm</PrimaryButton>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({});
