import { useEffect, useState } from 'react';
import axios from 'axios';

export interface ProductosInterface {
	id: string | number;
	nombre: string;
	precio: string;
}

export const useFetchProductos = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [productos, setProductos] = useState();

	useEffect(() => {
		if (productos === undefined) {
			axios.get('/api/productos').then(({ data }) => {
				setIsLoading(false);
				setProductos(data);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isLoading, productos };
};
