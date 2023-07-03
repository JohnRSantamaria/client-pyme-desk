export type ErrorInfo = {
	field: string;
	message: string;
};
type ValidacionResponse = {
	isValid: boolean;
	errors: ErrorInfo[];
};

export function validaciones(
	valueUsuario: number | string,
	valueRegla: number | string,
	valueProducto: number | string,
	cantidad: number
): ValidacionResponse {
	const errors: ErrorInfo[] = [];

	if (valueUsuario === 0)
		errors.push({ field: 'cliente', message: 'Seleccione un Cliente valido' });
	if (valueRegla === 0)
		errors.push({ field: 'regla', message: 'Seleccione un Metodo de envio valido' });
	if (valueProducto === 0)
		errors.push({ field: 'producto', message: 'Seleccione un Producto valido' });
	if (cantidad <= 0 || cantidad >= 11)
		errors.push({
			field: 'cantidad',
			message: 'La cantidad debe ser mayor a 0 y menor a 10'
		});

	return {
		isValid: errors.length === 0,
		errors
	};
}
