import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";
import { FONTS } from "../../theme/fonts";


export const Container = styled.SafeAreaView`
	flex: 1;
	padding-top: ${getStatusBarHeight() + 17}px;
	align-items: center;
	background-color: #333;
`;

export const ProductContainer = styled.View`
	flex: 1;
	flex-direction: row;
	margin-top: 60px;
	border-radius: 20px;
	background-color: #E83F5B;
`;

export const ProductList = styled(FlatList)`
	flex: 1;
	padding: 30px 10px;
`;

export const Product = styled.View`
	flex: 1;
	flex-direction: row;
	margin: 5px;
	background-color: #FFF;
	min-width: 350px;
	min-height: 130px;
	padding: 15px 10px;
	border-radius: 20px;
`;

export const ProductImage = styled.Image`
	width: 140px;
	height: 92px;
`;

export const ProductTitleContainer = styled.View`
	font-size: 16px;
	font-family: ${FONTS.REGULAR};
	margin: 10px 0 0 5px;
`;

export const ProductTitle = styled.Text`
	font-size: 14px;
	font-family: ${FONTS.BOLD};
`;

export const ProductPriceContainer = styled.View`
	flex-direction: column;
`;

export const TotalContainer = styled.View`
	flex-direction: row;
	margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
	font-size: 12px;
	color: #414756;
	margin-top: 8px;
	font-family: ${FONTS.REGULAR};
`;

export const ProductPrice = styled.Text`
	font-size: 16px;
	margin-top: 5px;
	color: #E83F5B;
	font-family: ${FONTS.BOLD};
`;

export const ProductQuantity = styled.Text`
	font-size: 16px;
	margin-top: 5px;
	margin-right: 10px;
	color: #E83F5B;
	font-family: ${FONTS.BOLD};
`;

export const ActionContainer = styled.View`
	align-self: flex-end;
	align-items: center;
	justify-content: space-between;
	margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
	background-color: rgba(232, 63, 91, 0.1);
	border-radius: 5px;
	padding: 12px;
	margin-bottom: 5px;
`;

export const TotalProductsContainer = styled.View`
	bottom: 0;
	position: absolute;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 36px 40px;
	border-radius: 10px;
	background-color: #E83F5B;
`;

export const TotalProductsText = styled.Text`
	flex: 1;
	margin-left: 15px;
	font-size: 16px;
	font-family: ${FONTS.BOLD};
	color: #FFF;
`;

export const SubTotalValue = styled.Text`
	font-size: 16px;
	color: #FFF;
	font-family: ${FONTS.BOLD};
`;
