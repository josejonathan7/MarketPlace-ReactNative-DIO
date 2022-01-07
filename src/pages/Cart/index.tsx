import React from "react";
import { View } from "react-native";
import { Container } from "./styled";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Header } from "../../components";
import { useNavigate } from "react-router-native";

export default function Cart () {
	const navigate = useNavigate();

	return (
		<>
			<View style={{backgroundColor: "#333", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingTop: 17}}>
				<FeatherIcon name="chevron-left" size={24} color="#F3F9FF" style={{position: "relative", left: -100, top: 15}} onPress={() => navigate("/")} />
				<Header />
			</View>

			<Container>

			</Container>
		</>
	);
}
