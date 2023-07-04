// useFormValidation.ts
import { ErrorInfo, validaciones } from '@/components/pedidos/pedidosForm/validaciones';
import { useState, useCallback } from 'react';

interface FormData {
	cliente: number | string;
	estado: string;
	regla_envio: string;
	pagado: boolean;
	productos: Array<{ producto: number | string; cantidad: number }>;
	observaciones: string;
}

export const useFormValidation = () => {
	const [errors, setErrors] = useState<ErrorInfo[]>([]);

	const handleSubmit = useCallback(
		(
			valueUsuario: number | string,
			valueRegla: number | string,
			valueProducto: number | string,
			cantidad: number,
			pagochecked: boolean,
			observaciones: string,
			onSuccess: (data: FormData) => void
		) => {
			const { errors, isValid } = validaciones(
				valueUsuario,
				valueRegla,
				valueProducto,
				cantidad
			);

			setErrors(errors);

			if (isValid) {
				const nuevoProducto = [{ producto: valueProducto, cantidad }];

				const data = {
					cliente: valueUsuario,
					estado: 'pendiente',
					regla_envio: valueRegla === 1 ? 'domicilio' : 'recoge',
					pagado: pagochecked,
					productos: nuevoProducto,
					observaciones: observaciones
				};

				onSuccess(data);
			}
		},
		[]
	);

	return { errors, handleSubmit };
};
