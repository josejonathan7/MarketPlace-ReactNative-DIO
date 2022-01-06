import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { FONTS } from "../../theme/fonts";

export const Container = styled.View`
	flex: 1;
	padding-top: ${getStatusBarHeight() + 17}px;
	align-items: center;
	background-color: #313746;
`;

export const ProductContainer = styled.SafeAreaView`
	flex: 1;
	flex-direction: row;
	margin-top: 40px;
	border-radius: 5px;
`;

export const ProductList = styled(FlatList).attrs({
	numColumns: 1
})`
	flex: 1;
	padding: 40px 20px;
`;

export const Product = styled.View`
	flex: 1;
	margin: 8px;
	background-color: #626878;
	padding: 32px 12px;
	border-radius: 25px;
`;

export const ProductImage = styled.Image`
	width: 90%;
	height: 220px;
	align-self: center;
`;

export const ProductTitle = styled.Text`
	color: #B9C0D2;
	font-size: 14px;
	font-family: ${FONTS.BOLD};
	margin-top: 10px;
	line-height: 40px;
	letter-spacing: 3.5px;
	text-align: center;
`;

export const PriceContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: auto;
	padding: 24px 32px 4px;
`;

export const ProductPrice = styled.Text`
	color: #F3F9FF;
	font-size: 22px;
	font-family: ${FONTS.BOLD};
`;

export const ProductButton = styled.TouchableOpacity`
	background-color: #4F5564;
	padding: 4px 8px;
	border-radius: 100px;
	align-items: center;
	flex-direction: row
`;

export const ProductButtonText = styled.Text`
	color: #B9C0D2;
	font-family: ${FONTS.BOLD};
	font-size: 12px;
	padding: 0 4px;
	text-transform: uppercase;
`;
