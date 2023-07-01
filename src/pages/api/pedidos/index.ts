import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const {
			page = '1',
			id = '',
			estado = '',
			pagado = '',
			regla_envio = '',
			cliente = '0'
		} = req.query;

		const pageParam = parseInt(page as string, 10);
		const idParam = parseInt(id as string, 10);
		const clienteParam = parseInt(cliente as string, 10);
		const pagadoParam = pagado === 'true' ? true : pagado === 'false' ? false : undefined;

		try {
			let url = `https://server-pyme-desk.onrender.com/api/pedidos/?page=${pageParam}`;

			// Filtrar por ID
			if (idParam) {
				url += `&id=${idParam}`;
			}

			// Filtrar por estado
			if (estado) {
				url += `&estado=${estado}`;
			}

			// Filtrar por pagado
			if (pagadoParam !== undefined) {
				url += `&pagado=${pagadoParam}`;
			}

			// Filtrar por regla_envio
			if (regla_envio) {
				url += `&regla_envio=${regla_envio}`;
			}

			// Filtrar por cliente
			if (clienteParam) {
				url += `&cliente=${clienteParam}`;
			}

			const response = await axios.get(url);

			res.status(200).json(response.data);
		} catch (error: any) {
			res.status(error.response?.status || 500).json(error.response?.data || {});
		}
	}
}
