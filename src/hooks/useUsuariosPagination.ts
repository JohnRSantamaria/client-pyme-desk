import { useEffect, useState } from 'react';
import axios from 'axios';
import { Usuarios } from '@/interfaces/fetchUsuariosResponse';
import { PageType } from '@/types';

interface ApiResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Usuarios[];
}

export const useUsuariosPagination = (page: PageType = 1) => {
	const [isLoading, setIsLoading] = useState(true);
	const [usuarios, setUsuarios] = useState<Usuarios[]>();
	const [count, setCount] = useState(0);
	const [next, setNext] = useState<string | null>(null);
	const [previous, setPrevious] = useState<string | null>(null);

	useEffect(() => {
		if (!usuarios) {
			setIsLoading(true);
			axios
				.get(`/api/clientes`)
				.then((response) => {
					const data: ApiResponse = response.data;
					setUsuarios(data.results);
					setCount(data.count);
					setNext(data.next);
					setPrevious(data.previous);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error('Error fetching usuarios:', error);
					setIsLoading(false);
				});
		}
	}, [usuarios, page]);

	return { isLoading, usuarios, count, next, previous };
};
