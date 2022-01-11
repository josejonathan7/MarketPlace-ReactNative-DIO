import React from "react";
import LottieView from "lottie-react-native";
import { Container, EmptyCartContainer, EmptyCartText } from "./style";
import EmptyCartAnimation from "../../../assets/17990-empty-cart.json";

export function EmptyCart() {

	return (
		<Container>
			<EmptyCartContainer>
				<LottieView
					source={{uri: EmptyCartAnimation}}
					resizeMode="contain"
					autoPlay
					loop
				/>
			</EmptyCartContainer>
			<EmptyCartText>
				Seu carrinho está vazio!
			</EmptyCartText>
		</Container>
	);
}
