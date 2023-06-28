import { useEffect, useState } from 'react';
import axios from 'axios';
import { Resumen } from '@/interfaces/fetchResumenResponse';

export const useResumen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [resumen, setResumen] = useState<Resumen>();

	useEffect(() => {
		if (resumen === undefined) {
			axios.get('/api/resumen').then(({ data }) => setResumen(data));
			setIsLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isLoading, resumen };
};
