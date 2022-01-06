import React from "react";
import { Container, Image } from "./style";
import Logo from "../../../assets/favicon.png";

export function Header () {

	return (
		<Container>
			<Image source={Logo} />
		</Container>
	);
}
