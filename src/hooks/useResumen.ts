import { useEffect, useState } from 'react';
import axios from 'axios';
import { Resumen } from '@/interfaces/fetchResumenResponse';

export const useResumen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [resumen, setResumen] = useState<Resumen>();
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		if (resumen === undefined) {
			try {
				axios
					.get('/api/resumen')
					.then(({ data }) => {
						setIsLoading(false);
						setResumen(data);
					})
					.catch((error) => {
						if (error.code === 'ERR_BAD_RESPONSE') {
							//El servidor se cae siempre porque es gratis
							setError(true);
						}
					});
			} catch (error) {
				console.error(error);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isLoading, resumen, error };
};
