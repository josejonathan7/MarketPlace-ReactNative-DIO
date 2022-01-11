import produce from "immer";
import { Product } from "../../../interfaces/product";

interface Props extends Product {
	id: string;
}

interface PropProductType {
	product: Product
}

export default function cart (state = [], action) {

	switch (action.type) {

	case "@cart/ADD_SUCCESS":
		return produce(state, (draft: Product[]) => {
			const { product }: PropProductType = action;
			draft.push(product);
		});

	case "@cart/REMOVE":
		return produce(state, (draft: Props[]) => {
			const productIndex = draft.findIndex(p => p.id === action.id);

			if(productIndex >= 0) draft.splice(productIndex, 1);
		});

	case "@cart/UPDATE_AMOUNT_SUCCESS":
		return produce(state, (draft: Props[]) => {
			const productIndex = draft.findIndex(p => p.id === action.id);

			if(productIndex >= 0){
				draft[productIndex].amount = Number(action.amount);
			}
		});

	default:
		return state;
	}
}
