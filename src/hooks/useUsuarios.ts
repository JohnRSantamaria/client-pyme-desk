import { useEffect, useState } from 'react';
import axios from 'axios';
import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';

export const useUsuarios = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [usuarios, setUsuarios] = useState<Usuarios>();

	useEffect(() => {
		if (usuarios === undefined) {
			console.log('render');
			axios.get('/api/usuarios/all').then(({ data }) => {
				setIsLoading(false);
				try {
					setUsuarios(data);
				} catch (error) {
					console.error(error);
				}
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isLoading, usuarios };
};
