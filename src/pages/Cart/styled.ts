import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";


export const Container = styled.SafeAreaView`
	flex: 1,
	padding: 30px;
	padding-top: ${getStatusBarHeight() + 17}px;
	align-items: center;
	background-color: #333;
`;
