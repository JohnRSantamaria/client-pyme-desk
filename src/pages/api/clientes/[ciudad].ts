import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<Usuarios>) => {
	const { ciudad } = req.query;

	console.log(ciudad);
	console.log('esta en la que tiene el param: ' + ciudad);

	if (req.method === 'GET') {
		const { data } = await axios.get(
			`https://server-pyme-desk.onrender.com/api/usuarios/?ciudad=${ciudad}`
		);
		return res.status(200).json(data);
	}
};

export default handler;
