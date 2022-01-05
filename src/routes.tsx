import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";

import Catalog from "./pages/Catalog";

export default function RoutesApp () {
	return (
		<NativeRouter>
			<Routes>
				<Route path="/" element={<Catalog/>} />
			</Routes>
		</NativeRouter>
	);
}
