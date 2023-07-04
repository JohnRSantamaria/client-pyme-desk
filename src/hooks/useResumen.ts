import { useEffect, useState } from 'react';
import axios from 'axios';
import { Resumen } from '@/interfaces/fetchResumenResponse';

export const useResumen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [resumen, setResumen] = useState<Resumen>();

	useEffect(() => {
		if (resumen === undefined) {
			try {
				axios.get('/api/resumen').then(({ data }) => {
					setIsLoading(false);
					setResumen(data);
				});
			} catch (error) {
				console.log(error);
				console.error(error);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isLoading, resumen };
};
