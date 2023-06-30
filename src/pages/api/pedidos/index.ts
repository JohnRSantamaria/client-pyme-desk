import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<Usuarios>) => {
	if (req.method === 'GET') {
		const { data } = await axios.get('https://server-pyme-desk.onrender.com/api/pedidos');
		return res.status(200).json(data);
	}
};

export default handler;
