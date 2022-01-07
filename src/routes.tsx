import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";

import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

export default function RoutesApp () {
	return (
		<NativeRouter>
			<Routes>
				<Route path="/" element={<Catalog/>} />
				<Route path="/Cart" element={<Cart />} />
			</Routes>
		</NativeRouter>
	);
}
