import { useState } from 'react';
import axios from 'axios';

interface Datos {
	Nombre: string;
	Celular: string;
	Email: string;
	Direccion: string;
	ciudad: string;
}

interface UseEnviarDatosResult {
	enviar: (datos: Datos) => Promise<void>;
	loading: boolean;
	error: Error | null;
	data: any;
}

export function useEnviarDatos(): UseEnviarDatosResult {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [data, setData] = useState<any>(null);

	const enviar = async (datos: Datos) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.post('/api/usuarios', datos);

			setData(response.data);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	};

	return { enviar, loading, error, data };
}
