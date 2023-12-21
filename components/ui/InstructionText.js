import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const InstructionText = ({ children, style }) => {
	return <Text style={[styles.instructionText, style]}> {children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
	instructionText: {
    fontFamily: 'open-sans',
		color: Colors.secondary400,
		fontSize: 24,
		textAlign: 'center',
	},
});
