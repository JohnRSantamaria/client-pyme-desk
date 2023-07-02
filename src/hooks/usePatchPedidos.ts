//https://server-pyme-desk.onrender.com/api/pedidos/29
import { useState } from 'react';
import axios from 'axios';

type UpdatePedidoParams = {
	id: string;
	estado: string;
};

const useUpdatePedido = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const updatePedido = async ({ id, estado }: UpdatePedidoParams) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.patch(`/api/pedidos?id=${id}`, { estado });
			return response.data;
		} catch (error: any) {
			setError(error);
			return null;
		} finally {
			setLoading(false);
		}
	};

	return { updatePedido, loading, error };
};

export default useUpdatePedido;
