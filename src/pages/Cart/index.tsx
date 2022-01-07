import React, { useMemo, useState } from "react";
import { View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Header } from "../../components";
import { useNavigate } from "react-router-native";
import { ActionButton, ActionContainer, Container, Product, ProductContainer, ProductImage, ProductList, ProductPrice, ProductPriceContainer, ProductQuantity, ProductSinglePrice, ProductTitle, ProductTitleContainer, SubTotalValue, TotalContainer, TotalProductsContainer, TotalProductsText } from "./styled";
import formateValue from "../../utils/formatValue";

interface Props {
	id: string;
	title: string;
	image_url: string;
	price: number;
	quantity: number;
}

interface RenderProps {
	item: Props
}

export default function Cart () {
	const [ products, setProducts ] = useState<Props[]>([
		{
			id: "1",
			title: "Assinatura Trimestral",
			image_url: "https://tse2.mm.bing.net/th?id=OIP.NCQPi_Lml6qO9yBSLoyRGgHaEK&pid=Api&P=0&w=294&h=165",
			quantity: 4,
			price: 150

		},
		{
			id: "2",
			title: "Assinatura Trimestral",
			image_url: "https://tse2.mm.bing.net/th?id=OIP.NCQPi_Lml6qO9yBSLoyRGgHaEK&pid=Api&P=0&w=294&h=165",
			quantity: 2,
			price: 70

		}
	]);
	const navigate = useNavigate();

	const cartSize = useMemo(() => {
		return products.length || 0;
	}, [products]);

	const cartTotal = useMemo(() => {
		const cartAmount = products.reduce((acc, product) => {
			const totalPrice = acc + (product.price * product.quantity);
			return totalPrice;
		}, 0);

		return formateValue(cartAmount);

	}, [products]);

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
						keyExtractor={(item: any) => item.id}
						ListFooterComponent={<View/>}
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
											<ProductQuantity>{`${item.quantity}x`}</ProductQuantity>
											<ProductPrice>
												{formateValue(item.price * item.quantity)}
											</ProductPrice>
										</TotalContainer>
									</ProductPriceContainer>
								</ProductTitleContainer>
								<ActionContainer>
									<ActionButton
										onPress={() => {}}
									>
										<FeatherIcon name="plus" color="#E83F5B" size={16} />

									</ActionButton>
									<ActionButton
										onPress={() => {}}
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
