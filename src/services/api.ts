import axios from "axios";

const api = axios.create({
	baseURL: "http://10.0.2.2:3000",
	url: "http://localhost:3000"
});
/**
 * baseURL: "http://localhost:3000" Mac OS
 * baseURL: "http://10.0.2.2:3000" emulador do android
 * baseURL: "http://10.0.3.2:3000" android
 * baseURL: "http://192.168.15.22:3000" USB ou algum outro emulador tem que passar o IP da maquina
 */


export default api;
