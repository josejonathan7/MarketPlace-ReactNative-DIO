export function addCartRequest(id: string) {
	return {
		type: "@cart/ADD_REQUEST",
		id
	};
}

export function addToCartSuccess (product: any) {
	return {
		type: "@cart/ADD_SUCCESS",
		product
	};
}
