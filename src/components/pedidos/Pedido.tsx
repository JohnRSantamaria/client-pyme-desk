import React from 'react';
import { convertirFechaHora } from '@/helpers/convertirFechaHora';
import { PropiedadesPedido, TipoProducto } from '@/types';
import Producto from './Producto';
import Observaciones from './Observaciones';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
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
		<div className='w-full p-2 shadow-md dark:shadow-lg rounded-md '>
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
					<h3>Pedido: </h3>
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
					<p
						className={`flex justify-center items-center font-semibold ${
							pagado ? 'text-green-600' : 'text-red-600'
						}`}
					>
						<BsCurrencyDollar />
					</p>
				</span>
			</footer>
		</div>
	);
};

export default Pedido;
