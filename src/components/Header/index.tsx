import React from "react";
import { Image } from "react-native";
import { Container } from "./style";
import Logo from "../../../assets/logo.png";

export function Header () {

	return (
		<Container>
			<Image source={Logo} style={{maxWidth: "100%", maxHeight: "100%"}} />
		</Container>
	);
}
