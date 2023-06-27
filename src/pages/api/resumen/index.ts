import { Resumen } from '@/interfaces/fetchResumenResponse';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<Resumen>) => {
	if (req.method === 'GET') {
		const response = await axios.get(
			'https://server-pyme-desk.onrender.com/api/resumen/'
		);
		const data = response.data;

		return res.status(200).json(data);
	}
};

export default handler;
