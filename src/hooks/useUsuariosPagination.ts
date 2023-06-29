import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Usuarios } from '@/interfaces/fetchUsuariosResponse';
import { PageType } from '@/types';

// Puedes usar un tipo más específico aquí si necesitas validaciones adicionales.

export const useUsuariosPagination = (page: PageType) => {
	const [isLoading, setIsLoading] = useState(true);
	const [usuarios, setUsuarios] = useState<Usuarios>();
	const [count, setCount] = useState(0);

	useMemo(() => {
		setIsLoading(true); // Configura isLoading a true cada vez que page cambia.
		axios.get(`/api/clientes/${page}`).then(({ data }) => {
			setUsuarios(data.results);
			setCount(Math.ceil(data.count / 9));
			setIsLoading(false);
		});
		// Asegúrate de agregar page como dependencia.
	}, [page]);

	return { isLoading, usuarios, count };
};
