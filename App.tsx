import React from "react";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import RoutesApp from "./src/routes";
import { StatusBar } from "expo-status-bar";


export default function App() {
	const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});


	if(!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar style="light" backgroundColor="#312E38" translucent />
			<RoutesApp />
		</>
	);
}

