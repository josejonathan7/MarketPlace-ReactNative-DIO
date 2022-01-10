import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Header, FloatingCart } from "../../components";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Container, PriceContainer, Product, ProductButton, ProductButtonText, ProductContainer, ProductImage, ProductList, ProductTitle, ProductPrice } from "./style";
import formateValue from "../../utils/formatValue";
import api from "../../services/api";
import * as CartActions from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";

interface Props {
	id: string;
	title: string;
	image_url: string;
	price: number;
}

interface RenderProps {
	item : Props;
}

interface BackResponse extends Props {
	quantity: number;
}

export default function Catalog () {
	const dispatch = useDispatch();
	const [products, setProducts] = useState<Props[]>([]);

	useEffect(() => {
		async function loadProduct() {
			console.log("c");
			const data = await api.get("/products").then(res => res.data).catch(error => {
				console.log(error);
				return error.message;
			});

			console.log(data);

			//setProducts(data);
		}

		loadProduct();

	}, []);

	function handleAddToCart(id: string) {
		dispatch(CartActions.addCartRequest(id));
	}

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
						<Product key={item.id}>
							<ProductImage source={{uri: item.image_url}} />
							<ProductTitle>{item.title}</ProductTitle>
							<PriceContainer>
								<ProductPrice>{formateValue(item.price)}</ProductPrice>
								<ProductButton onPress={() => handleAddToCart(item.id)}>
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
