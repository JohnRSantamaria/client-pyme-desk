import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const response = await axios.get(
				'https://server-pyme-desk.onrender.com/api/resumen/'
			);
			const data = response.data;

			return res.status(200).json(data);
		} catch (error: unknown) {
			res
				.status((error as any).response?.status || 500)
				.json((error as any).response?.data || {});
		}
	}
};

export default handler;
