import { useEffect, useState } from 'react';
import axios from 'axios';
import { Usuarios } from '@/interfaces/fetchUsuariosResponse';

export const useUsuarios = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [usuarios, setUsuarios] = useState<Usuarios>();

	useEffect(() => {
		if (usuarios === undefined) {
			axios.get('/api/clientes').then(({ data }) => setUsuarios(data));
			setIsLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return { isLoading, usuarios };
};
