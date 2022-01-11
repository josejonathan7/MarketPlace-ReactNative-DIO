import React, { useMemo, useState } from "react";
import { View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector, useDispatch } from "react-redux";
import * as CartActions from "../../store/modules/cart/actions";
import { EmptyCart, Header } from "../../components";
import { useNavigate } from "react-router-native";
import { ActionButton, ActionContainer, Container, Product, ProductContainer, ProductImage, ProductList, ProductPrice, ProductPriceContainer, ProductQuantity, ProductSinglePrice, ProductTitle, ProductTitleContainer, SubTotalValue, TotalContainer, TotalProductsContainer, TotalProductsText } from "./styled";
import formateValue from "../../utils/formatValue";
import { Product as ProductType} from "../../interfaces/product";

interface Props extends ProductType {
	id: string;
}

interface RenderProps {
	item: Props
}

export default function Cart () {
	const dispatch = useDispatch();
	const products = useSelector(({ cart }) => cart);

	const navigate = useNavigate();

	const cartSize = useMemo(() => {
		return products.length || 0;
	}, [products]);

	const cartTotal = useMemo(() => {
		const cartAmount = products.reduce((acc: number, product: Props) => {
			const totalPrice = acc + (product.price * product.amount);
			return totalPrice;
		}, 0);

		return formateValue(cartAmount);

	}, [products]);

	function increment(product: Props) {
		dispatch(CartActions.updateAmountSuccess(product.id, product.amount+1));
	}

	function decrement(product: Props) {
		dispatch(CartActions.updateAmountSuccess(product.id, product.amount-1));
	}

	function removeFromCart(id: string) {
		dispatch(CartActions.removeFromCart(id));
	}



	return (
		<>
			<View style={{backgroundColor: "#333", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingTop: 17}}>
				<FeatherIcon name="chevron-left" size={24} color="#F3F9FF" style={{position: "relative", left: -100, top: 15}} onPress={() => navigate("/")} />
				<Header />
			</View>

			<Container>
				<ProductContainer>
					<ProductList
						data={products}
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						keyExtractor={(item: any) => item.id}
						ListFooterComponent={<View/>}
						ListEmptyComponent={<EmptyCart/>}
						ListFooterComponentStyle={{
							height: 80
						}}
						renderItem={({item}: RenderProps) => (
							<Product>
								<ProductImage source={{uri: item.image_url}} />
								<ProductTitleContainer>
									<ProductTitle>{item.title}</ProductTitle>
									<ProductPriceContainer>
										<ProductSinglePrice>
											{formateValue(item.price)}
										</ProductSinglePrice>
										<TotalContainer>
											<ProductQuantity>{`${item.amount}x`}</ProductQuantity>
											<ProductPrice>
												{formateValue(item.price * item.amount)}
											</ProductPrice>
										</TotalContainer>
									</ProductPriceContainer>
								</ProductTitleContainer>
								<ActionContainer>
									<ActionButton
										onPress={() => increment(item)}
									>
										<FeatherIcon name="plus" color="#E83F5B" size={16} />

									</ActionButton>
									<ActionButton
										onPress={() => item.amount > 1 ? decrement(item) : removeFromCart(item.id)}
									>
										<FeatherIcon name="minus" color="#E83F5B" size={16} />

									</ActionButton>
								</ActionContainer>
							</Product>
						)}
					/>

				</ProductContainer>
				<TotalProductsContainer>
					<FeatherIcon name="shopping-cart" color="#FFF" size={24} />
					<TotalProductsText>{cartSize} {cartSize === 1 ? "item" : "itens"}</TotalProductsText>
					<SubTotalValue>{cartTotal}</SubTotalValue>
				</TotalProductsContainer>
			</Container>
		</>
	);
}
