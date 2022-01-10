import { all, takeLatest, select, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import formateValue from "../../../utils/formatValue";
import { addToCartSuccess } from "./actions";

interface IteratorResult<T> {
    done: boolean;
    value: T;
}

interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
}

function* addToCart({id}) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const productExist = yield select(state => state.cart.find((product: { id: any; }) => product.id === id));

	if(productExist){

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

export default all([takeLatest("@cart/ADD_REQUEST", addToCart)]);
