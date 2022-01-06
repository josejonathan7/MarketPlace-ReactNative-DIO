import "intl";
import "intl/locale-data/jsonp/en";

export default function formateValue (value: number) {

	return Intl.NumberFormat("pt-br", {
		style: "currency",
		currency: "BRL"
	}).format(value);

}
