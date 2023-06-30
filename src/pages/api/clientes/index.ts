import {
	DatosClientesInterface,
	Usuarios
} from '@/interfaces/clienteInterface/Clienteprops';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface MessageResponse {
	message: string;
}

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<Usuarios | MessageResponse>
) => {
	if (req.method === 'GET') {
		const { data } = await axios.get(
			'https://server-pyme-desk.onrender.com/api/usuarios'
		);
		return res.status(200).json(data);
	}
	if (req.method === 'POST') {
		const datos: DatosClientesInterface = req.body;

		const response = await axios.post(
			'https://server-pyme-desk.onrender.com/api/usuarios/',
			datos
		);

		res.status(response.status).json({ message: 'Datos recibidos correctamente' });
	}

	res.status(405).json({ message: 'Método no permitido' });
};

export default handler;
