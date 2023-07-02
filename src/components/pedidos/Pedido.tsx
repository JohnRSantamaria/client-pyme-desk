import { convertirFechaHora } from '@/helpers/convertirFechaHora';
import { PropiedadesPedido, TipoProducto } from '@/types';
import Producto from './Producto';
import Observaciones from './Observaciones';
import { BsCaretDownFill } from 'react-icons/bs';
import { BsCaretUpFill } from 'react-icons/bs';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { MdPeople } from 'react-icons/md';
import { Collapse } from 'react-collapse';
import useUpdatePedido from '@/hooks/usePatchPedidos';
import { useCallback } from 'react';

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
	for (let i = 0; i < productos.length && i < productos_nombres.length; i++) {
		productos[i].producto = productos_nombres[i];
	}

	const { updatePedido, loading, error } = useUpdatePedido();

	const handleSubmit = useCallback(async () => {
		const result = await updatePedido({ id: 'some-id', estado: 'en ruta' });

		if (result) {
			console.log('Pedido actualizado con éxito');
		}
	}, [updatePedido]);

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
					{productos.map((product: TipoProducto) => (
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
			<footer className='flex flex-row  justify-between items-center '>
				<span className='flex gap-2'>
					<span>{estado}</span>

					<span>{regla_envio}</span>
				</span>
				<span className='flex items-center gap-2 mx-2'>
					{pagado ? (
						<p className='text-green-600 font-semibold'>
							<BiMoneyWithdraw />
						</p>
					) : (
						<p className='text-red-600 font-semibold'>
							<BiMoneyWithdraw />
						</p>
					)}
				</span>
			</footer>
		</div>
	);
};
export default Pedido;
