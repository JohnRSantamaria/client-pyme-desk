import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Resumen } from '@/interfaces/fetchResumenResponse';

export const useResumen = () => {
	const isFistRender = useRef(true);
	const [isLoading, setIsLoading] = useState(true);
	const [resumen, setResumen] = useState<Resumen>();

	useEffect(() => {
		if (isFistRender.current) {
			axios.get('/api/resumen').then(({ data }) => setResumen(data));
			setIsLoading(false);
			isFistRender.current = false;
		}
	}, []);

	return { isLoading, resumen };
};
