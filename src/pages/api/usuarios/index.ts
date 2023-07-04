import { DatosClientesInterface } from '@/interfaces/clienteInterface/Clienteprops';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { page = 1, ciudad = '' } = req.query;
		try {
			let url = `https://server-pyme-desk.onrender.com/api/usuarios/?page=${page}`;
			if (ciudad) {
				url += `&ciudad=${ciudad}`;
			}
			const response = await axios.get(url);
			res.status(200).json(response.data);
		} catch (error: unknown) {
			res
				.status((error as any).response?.status || 500)
				.json((error as any).response?.data || {});
		}
	} else if (req.method === 'POST') {
		try {
			const datos: DatosClientesInterface = req.body;

			const response = await axios.post(
				'https://server-pyme-desk.onrender.com/api/usuarios/',
				datos
			);

			res.status(response.status).json({ message: 'Datos recibidos correctamente' });
		} catch (error: unknown) {
			res
				.status((error as any).response?.status || 500)
				.json((error as any).response?.data || {});
		}
	}
}
