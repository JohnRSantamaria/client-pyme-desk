import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const response = await axios.get(
				'https://server-pyme-desk.onrender.com/api/resumen/'
			);
			const data = response.data;

			res.status(200).json(data);
		} catch (error: any) {
			if (error.code === 'ERR_BAD_RESPONSE') {
				res.status(500).json({ message: error.message });
			}

			res
				.status((error as any).response?.status || 500)
				.json((error as any).response?.data || {});
		}
	}
};

export default handler;
