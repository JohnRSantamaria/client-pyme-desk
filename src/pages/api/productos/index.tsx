import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const URL = 'https://server-pyme-desk.onrender.com/api/productos/?page_size=100';
			const response = await axios.get(URL);
			const data = response.data.results;
			return res.status(200).json(data);
		} catch (error: unknown) {
			res
				.status((error as any).response?.status || 500)
				.json((error as any).response?.data || {});
		}
	}
};

export default handler;
