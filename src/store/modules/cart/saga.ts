import { all, takeLatest, select, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import formateValue from "../../../utils/formatValue";
import { addToCartSuccess, updateAmountSuccess } from "./actions";
import { Product } from "../../../interfaces/product";

interface Props extends Product {
	id: string
}

interface UpdateProps {
	id: string;
	amount: number
}

function* addToCart({id}) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const productExist = yield select(state => state.cart.find((product: Props) => product.id === id));

	const currentAmount = productExist ? productExist.amount : 0;
	const amount = currentAmount + 1;

	if(productExist){
		yield put(updateAmountSuccess(id, amount));
	}else {
		const response = yield call(api.get, `products/${id}`);

		const data = {
			...response.data,
			amount: 1,
			priceFormatted: formateValue(response.data.price)
		};

		yield put(addToCartSuccess(data));
	}
}

function* updateAmount({id, amount}: UpdateProps) {
	if(amount <= 0) return;

	yield put(updateAmountSuccess(id, amount));
}

export default all([
	takeLatest("@cart/ADD_REQUEST", addToCart),
	takeLatest("@cart/UPDATE_AMOUNT_SUCCESS", updateAmount)
]);
