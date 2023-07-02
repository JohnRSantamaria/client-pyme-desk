// import axios from 'axios';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// 	if (req.method === 'GET') {
// 		const {
// 			page = '1',
// 			id = '',
// 			estado = '',
// 			pagado = '',
// 			regla_envio = '',
// 			cliente = '0'
// 		} = req.query;

// 		const pageParam = parseInt(page as string, 10);
// 		const idParam = parseInt(id as string, 10);
// 		const clienteParam = parseInt(cliente as string, 10);
// 		const pagadoParam = pagado === 'true' ? true : pagado === 'false' ? false : undefined;

// 		try {
// 			let url = `https://server-pyme-desk.onrender.com/api/pedidos/?page=${pageParam}`;

// 			// Filtrar por ID
// 			if (idParam) {
// 				url += `&id=${idParam}`;
// 			}

// 			// Filtrar por estado
// 			if (estado) {
// 				url += `&estado=${estado}`;
// 			}

// 			// Filtrar por pagado
// 			if (pagadoParam !== undefined) {
// 				url += `&pagado=${pagadoParam}`;
// 			}

// 			// Filtrar por regla_envio
// 			if (regla_envio) {
// 				url += `&regla_envio=${regla_envio}`;
// 			}

// 			// Filtrar por cliente
// 			if (clienteParam) {
// 				url += `&cliente=${clienteParam}`;
// 			}
// 			const response = await axios.get(url);

// 			res.status(200).json(response.data);
// 		} catch (error: any) {
// 			res.status(error.response?.status || 500).json(error.response?.data || {});
// 		}
// 	}
// 	if (req.method === 'PATCH') {
// 		const { id, estado } = req.query; // Obtén el `id` desde los parámetros de la URL

// 		try {
// 			const url = `https://server-pyme-desk.onrender.com/api/pedidos/${id}`;
// 			const response = await axios.patch(url, {
// 				estado: estado
// 			});
// 			console.log(response.data); // Opcional: muestra la respuesta del servidor en la consola

// 			res.status(200).json({ message: 'Solicitud PATCH enviada con éxito.' });
// 		} catch (error) {
// 			console.error(error);
// 			res.status(500).json({ error: 'Error al enviar la solicitud PATCH.' });
// 		}
// 	}
// }
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method, query } = req;

	if (method === 'GET') {
		const {
			page = '1',
			id = '',
			estado = '',
			pagado = '',
			regla_envio = '',
			cliente = '0'
		} = query;

		const params = new URLSearchParams({
			page: String(parseInt(page as string, 10))
		});

		if (id) params.append('id', String(parseInt(id as string, 10)));
		if (estado) params.append('estado', estado as string);
		if (pagado) params.append('pagado', pagado === 'true' ? 'true' : 'false');
		if (regla_envio) params.append('regla_envio', regla_envio as string);
		if (cliente) params.append('cliente', String(parseInt(cliente as string, 10)));

		try {
			const response = await axios.get(
				'https://server-pyme-desk.onrender.com/api/pedidos/',
				{
					params
				}
			);

			res.status(200).json(response.data);
		} catch (error: unknown) {
			res
				.status((error as any).response?.status || 500)
				.json((error as any).response?.data || {});
		}
	} else if (method === 'PATCH') {
		const { id } = query;
		const { estado } = req.body;

		try {
			const url = `https://server-pyme-desk.onrender.com/api/pedidos/${id}`;
			const response = await axios.patch(url, { estado });

			console.log(response.data);
			res.status(200).json({ message: 'Solicitud PATCH enviada con éxito.' });
		} catch (error: unknown) {
			console.error(error);
			res.status(500).json({ error: 'Error al enviar la solicitud PATCH.' });
		}
	} else {
		res.status(405).json({ error: 'Método HTTP no permitido.' });
	}
}
