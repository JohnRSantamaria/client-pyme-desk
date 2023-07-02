// import { convertirFechaHora } from '@/helpers/convertirFechaHora';
// import { PropiedadesPedido, TipoProducto } from '@/types';
// import Producto from './Producto';
// import Observaciones from './Observaciones';
// import { BsCaretDownFill } from 'react-icons/bs';
// import { BsCaretUpFill } from 'react-icons/bs';
// import { BiMoneyWithdraw } from 'react-icons/bi';
// import { MdPeople } from 'react-icons/md';
// import { Collapse } from 'react-collapse';
// import useUpdatePedido from '@/hooks/usePatchPedidos';
// import { useCallback, useEffect, useState } from 'react';
// import DEstado from './pedidoDropDowns/DEstado';

// import Swal from 'sweetalert2';

// const Pedido: React.FC<PropiedadesPedido> = ({
// 	id,
// 	productos,
// 	fecha,
// 	estado,
// 	pagado,
// 	regla_envio,
// 	observaciones,
// 	cliente,
// 	productos_nombres,
// 	cliente_nombre,
// 	open = false,
// 	toogle
// }) => {
// 	const modifiedProductos = productos.map((producto: any, index: number) => ({
// 		...producto,
// 		producto: productos_nombres[index]
// 	}));

// 	const [estadoFilter, setEstadoFilter] = useState<
// 		'' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado' | undefined
// 	>('');

// 	useEffect(() => {
// 		if (estadoFilter) {
// 			Swal.fire({
// 				title: 'Esta seguro?',
// 				text: `La para la orden numero ${id} cambiara el estado a "${estadoFilter}" `,
// 				icon: 'warning',
// 				showCancelButton: true,
// 				confirmButtonColor: '#3085d6',
// 				cancelButtonColor: '#d33',
// 				confirmButtonText: 'Proceder',
// 				cancelButtonText: 'Cancelar'
// 			}).then((result) => {
// 				if (result.isConfirmed) {
// 					updatePedido({ id: id, estado: estadoFilter });
// 				}
// 			});
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [estadoFilter]);

// 	const { updatePedido, loading, error } = useUpdatePedido();

// 	useCallback(async () => {
// 		const result = await updatePedido({ id: 'some-id', estado: 'en ruta' });

// 		if (result) {
// 			console.log('Pedido actualizado con éxito');
// 		}
// 	}, [updatePedido]);

// 	return (
// 		<div className='w-full p-2 shadow-sm'>
// 			<header
// 				onClick={toogle}
// 				className='flex justify-between items-center'
// 			>
// 				<section className='flex justify-center items-center gap-2 Capitalize cursor-pointer text-primary dark:text-primaryDark'>
// 					<span>
// 						<MdPeople />
// 					</span>
// 					<span>{cliente_nombre}</span>
// 				</section>
// 				<section className='flex select-none'>
// 					<span className='sm:hidden'>{convertirFechaHora(fecha)}</span>
// 					<span className='px-2 text-primary dark:text-primaryDark'>
// 						{open ? <BsCaretUpFill /> : <BsCaretDownFill />}
// 					</span>
// 				</section>
// 			</header>
// 			<Collapse isOpened={open}>
// 				<section className='flex flex-col'>
// 					{productos.map((product: TipoProducto) => (
// 						<Producto
// 							key={product.id}
// 							cantidad={product.cantidad}
// 							producto={product.producto}
// 						/>
// 					))}
// 				</section>
// 				{observaciones && (
// 					<Observaciones
// 						key={crypto.randomUUID()}
// 						observaciones={observaciones}
// 					/>
// 				)}
// 			</Collapse>
// 			<footer className='flex flex-row  justify-between items-center '>
// 				<span className='flex items-center gap-2'>
// 					<DEstado
// 						setEstadoFilter={setEstadoFilter}
// 						paramEstado={estado}
// 					/>
// 					<span>{regla_envio}</span>
// 				</span>
// 				<span className='flex items-center gap-2 mx-2'>
// 					{pagado ? (
// 						<p className='text-green-600 font-semibold'>
// 							<BiMoneyWithdraw />
// 						</p>
// 					) : (
// 						<p className='text-red-600 font-semibold'>
// 							<BiMoneyWithdraw />
// 						</p>
// 					)}
// 				</span>
// 			</footer>
// 		</div>
// 	);
// };
// export default Pedido;

/**************************** */

import React, { useCallback, useEffect, useState } from 'react';
import { convertirFechaHora } from '@/helpers/convertirFechaHora';
import { Estado, PropiedadesPedido, TipoProducto } from '@/types';
import Producto from './Producto';
import Observaciones from './Observaciones';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { MdPeople } from 'react-icons/md';
import { Collapse } from 'react-collapse';
import DEstado from './pedidoDropDowns/DEstado';

// Tipos de las propiedades del componente.

const Pedido: React.FC<PropiedadesPedido> = ({
	id,
	productos,
	fecha,
	estado,
	pagado,
	regla_envio,
	observaciones,
	cliente,
	productos_nombres,
	cliente_nombre,
	open = false,
	toogle
}) => {
	const modifiedProductos = productos.map(
		(producto: PropiedadesPedido, index: number) => ({
			...producto,
			producto: productos_nombres[index]
		})
	);

	return (
		<div className='w-full p-2 shadow-sm'>
			<header
				onClick={toogle}
				className='flex justify-between items-center'
			>
				<section className='flex justify-center items-center gap-2 Capitalize cursor-pointer text-primary dark:text-primaryDark'>
					<span>
						<MdPeople />
					</span>
					<span>{cliente_nombre}</span>
				</section>
				<section className='flex select-none'>
					<span className='sm:hidden'>{convertirFechaHora(fecha)}</span>
					<span className='px-2 text-primary dark:text-primaryDark'>
						{open ? <BsCaretUpFill /> : <BsCaretDownFill />}
					</span>
				</section>
			</header>
			<Collapse isOpened={open}>
				<section className='flex flex-col'>
					{modifiedProductos.map((product: TipoProducto) => (
						<Producto
							key={product.id}
							cantidad={product.cantidad}
							producto={product.producto}
						/>
					))}
				</section>
				{observaciones && (
					<Observaciones
						key={crypto.randomUUID()}
						observaciones={observaciones}
					/>
				)}
			</Collapse>
			<footer className='flex flex-row justify-between items-center'>
				<span className='flex items-center gap-2'>
					<DEstado
						paramEstado={estado}
						id={id}
					/>
					<span>{regla_envio}</span>
				</span>
				<span className='flex items-center gap-2 mx-2'>
					<p className={`font-semibold ${pagado ? 'text-green-600' : 'text-red-600'}`}>
						<BiMoneyWithdraw />
					</p>
				</span>
			</footer>
		</div>
	);
};

export default Pedido;
