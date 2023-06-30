import { DatosClientesInterface } from '@/interfaces/clienteInterface/Clienteprops';
import axios from 'axios';

export async function enviarDatos(datos: DatosClientesInterface) {
	try {
		const response = await axios.post('/api/clientes', datos);

		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
