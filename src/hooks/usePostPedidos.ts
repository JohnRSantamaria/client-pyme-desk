import axios from 'axios';
import { useState } from 'react';

export function usePostPedidos() {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [data, setData] = useState<any>(null);

	const enviar = async (datos: any) => {
		try {
			const response = await axios.post('/api/pedidos', datos);
			setData(response.data);
		} catch (error) {
			setError(error as Error);
		} finally {
			setIsLoading(false);
		}
	};

	return { enviar, isLoading, error, data };
}
