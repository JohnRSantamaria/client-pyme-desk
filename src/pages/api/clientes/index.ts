import { DatosClientesInterface } from '@/interfaces/datosClientesInterface';
import { Usuarios } from '@/interfaces/fetchUsuariosResponse';
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
		console.log('esta en la que no tiene param');
		const { data } = await axios.get(
			'https://server-pyme-desk.onrender.com/api/usuarios'
		);
		return res.status(200).json(data);
	}
	if (req.method === 'POST') {
		// Aquí puedes manejar los datos que recibes
		const datos: DatosClientesInterface = req.body;

		const response = await axios.post(
			'https://server-pyme-desk.onrender.com/api/usuarios/',
			datos
		);
		// Y luego debes enviar una respuesta
		res.status(response.status).json({ message: 'Datos recibidos correctamente' });
	} else {
		// Si el método no es POST, envía un error
		res.status(405).json({ message: 'Método no permitido' });
	}
};

export default handler;
