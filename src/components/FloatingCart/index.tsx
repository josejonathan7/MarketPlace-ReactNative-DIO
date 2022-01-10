import React, { useMemo } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-native";
import formateValue from "../../utils/formatValue";
import { CartButton, CartButtonText, CartPricing, CartTotalPrice, Container } from "./style";


export function FloatingCart () {
	const navigation = useNavigate();

	const products: [] = useSelector(({cart}) => cart);

	const cartSize = useMemo(() => {
		return products.length || 0;
	}, [products]);

	const cartTotal = useMemo(() => {
		const cartAmount = products.reduce((acc: number, product: { price: number; amount: number; }) => {
			const totalPrice = acc + (product.price * product.amount);

			return totalPrice;
		}, 0);

		return formateValue(cartAmount);
	}, [products]);

	return (
		<Container>
			<CartButton onPress={() => navigation("Cart")}>
				<FeatherIcon name="shopping-cart" size={24} color="#F3F9FF" />
				<CartButtonText>{cartSize} {cartSize === 1 ? "item" : "itens"}</CartButtonText>
				<CartPricing>
					<CartTotalPrice>{cartTotal}</CartTotalPrice>
				</CartPricing>
				<FeatherIcon name="shopping-cart" size={24} color="#F3F9FF" />
			</CartButton>
		</Container>
	);
}
