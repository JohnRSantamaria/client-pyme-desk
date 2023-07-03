import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';
import { Productos } from '@/interfaces/fetchProductosResponse';
import { OptionPedidosTypes } from '@/types';
import { useState, useEffect } from 'react';

const useOptionsPedidos = (
	usuarios: Usuarios | undefined,
	productos: Productos | undefined
) => {
	const [usuarioOptions, setUsuarioOptions] = useState<OptionPedidosTypes[]>([]);
	const [productoOptions, setProductoOptions] = useState<OptionPedidosTypes[]>([]);

	useEffect(() => {
		if (Array.isArray(usuarios)) {
			const usuarioOptions = [
				{ id: 0, caption: 'Seleccione al usuario' },
				...usuarios.map((usuario) => ({
					id: usuario.id,
					caption: usuario.nombre
				}))
			];
			setUsuarioOptions(usuarioOptions);
		}

		if (Array.isArray(productos)) {
			const productoOptions = [
				{ id: 0, caption: 'Seleccione un producto' },
				...productos.map((producto) => ({
					id: producto.id,
					caption: producto.nombre
				}))
			];
			setProductoOptions(productoOptions);
		}
	}, [usuarios, productos]);

	return { usuarioOptions, productoOptions };
};
export default useOptionsPedidos;
