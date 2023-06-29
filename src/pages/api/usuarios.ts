import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Obtén los parámetros de la consulta

	const { page = 1, ciudad = '' } = req.query;
	try {
		// Construye la URL basada en los parámetros de consulta
		let url = `https://server-pyme-desk.onrender.com/api/usuarios/?page=${page}`;
		if (ciudad) {
			url += `&ciudad=${ciudad}`;
		}

		// Realiza la petición a la API externa
		const response = await axios.get(url);

		// Envía la respuesta
		res.status(200).json(response.data);
	} catch (error: any) {
		// Maneja los errores
		res.status(error.response?.status || 500).json(error.response?.data || {});
	}
}
