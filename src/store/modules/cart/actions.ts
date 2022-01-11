import { Product } from "../../../interfaces/product";

export function addCartRequest(id: string) {
	return {
		type: "@cart/ADD_REQUEST",
		id
	};
}

export function addToCartSuccess (product: Product) {
	return {
		type: "@cart/ADD_SUCCESS",
		product
	};
}

export function removeFromCart(id: string) {
	return {
		type: "@cart/REMOVE",
		id,
	};
}


export function updateAmountSuccess (id: string, amount: number) {
	return {
		type: "@cart/UPDATE_AMOUNT_SUCCESS",
		id,
		amount
	};
}
