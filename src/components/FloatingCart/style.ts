import styled from "styled-components/native";
import { FONTS } from "../../theme/fonts";


export const Container = styled.View`
	bottom: 0;
	position: absolute;
	background-color: #E83F5B;
	padding: 0 18px;
	border-radius: 10px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;

export const CartPricing = styled.Text`
	padding: 20px;
`;

export const CartTotalPrice = styled.Text`
	font-size: 16px;
	color: #F3F9FF;
	font-family: ${FONTS.BOLD};
`;

export const CartButton = styled.TouchableOpacity`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

export const CartButtonText = styled.Text`
	flex: 1;
	color: #F3F9FF;
	font-family: ${FONTS.BOLD};
	margin-left: 5px;
	margin-right: auto;
`;
