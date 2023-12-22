import { Text } from 'react-native';

const Highlight = ({ children, color }) => {
	return (
		<Text style={{ fontFamily: 'open-sans-bold', color: color }}>
			{children}
		</Text>
	);
};

export default Highlight;
