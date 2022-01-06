import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	padding: 30px;
	background: #f5f5f5;
	padding-top: ${getStatusBarHeight() + 17}px;
`;
