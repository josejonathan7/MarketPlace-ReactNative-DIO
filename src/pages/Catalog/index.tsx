import React, { useState } from "react";
import { View } from "react-native";
import { Header, FloatingCart } from "../../components";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Container, PriceContainer, Product, ProductButton, ProductButtonText, ProductContainer, ProductImage, ProductList, ProductTitle, ProductPrice } from "./style";
import formateValue from "../../utils/formatValue";

interface Props {
	id: string;
	title: string;
	image_url: string;
	price: number;
}

interface RenderProps {
	item : Props;
}

export default function Catalog () {
	const [products, setProducts] = useState<Props[]>([
		{
			id: "1",
			title: "Assinatura Trimestral",
			image_url: "https://tse2.mm.bing.net/th?id=OIP.NCQPi_Lml6qO9yBSLoyRGgHaEK&pid=Api&P=0&w=294&h=165",
			price: 150

		}
	]);

	return (
		<Container >
			<Header />
			<ProductContainer>
				<ProductList
					data={products}
					keyExtractor={(item: any): string => item.key}
					ListFooterComponent={<View />}
					ListFooterComponentStyle={{
						height: 80
					}}
					renderItem={({item}: RenderProps) => (
						<Product>
							<ProductImage source={{uri: item.image_url}} />
							<ProductTitle>{item.title}</ProductTitle>
							<PriceContainer>
								<ProductPrice>{formateValue(item.price)}</ProductPrice>
								<ProductButton onPress={() => {}}>
									<ProductButtonText>
										Adiconar
									</ProductButtonText>
									<FeatherIcon size={30} color="#D1D7E9" name="plus-circle" />
								</ProductButton>
							</PriceContainer>
						</Product>
					)}
				/>
			</ProductContainer>
			<FloatingCart />
		</Container>
	);
}
