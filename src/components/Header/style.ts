import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding-top: ${getStatusBarHeight() + 17}px;

`;

export const Image = styled.Image`
	width: 50%;
	height: 180px;
`;
