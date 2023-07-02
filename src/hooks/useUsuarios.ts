import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUsuarios = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [usuarios, setUsuarios] = useState<any[] | undefined>(() => {
		const storedUsers = window.localStorage.getItem('users');
		if (storedUsers) {
			return JSON.parse(storedUsers);
		}
		return undefined;
	});

	useEffect(() => {
		if (usuarios === undefined) {
			console.log('render');
			axios.get('/api/usuarios/all').then(({ data }) => {
				setIsLoading(false);
				try {
					window.localStorage.setItem('users', JSON.stringify(data)); // Convertir a cadena JSON antes de guardar en el Local Storage
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
