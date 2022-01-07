import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigate } from "react-router-native";
import { CartButton, CartButtonText, CartPricing, CartTotalPrice, Container } from "./style";


export function FloatingCart () {
	const navigation = useNavigate();

	return (
		<Container>
			<CartButton onPress={() => navigation("Cart")}>
				<FeatherIcon name="shopping-cart" size={24} color="#F3F9FF" />
				<CartButtonText>2 Items</CartButtonText>
				<CartPricing>
					<CartTotalPrice>R$ 200,00</CartTotalPrice>
				</CartPricing>
				<FeatherIcon name="shopping-cart" size={24} color="#F3F9FF" />
			</CartButton>
		</Container>
	);
}
