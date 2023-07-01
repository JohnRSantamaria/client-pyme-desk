import { convertirFechaHora } from '@/helpers/convertirFechaHora';
import { PedidoType } from '@/types';
import Producto from './Producto';
import Observaciones from './Observaciones';

const Pedido: React.FC<PedidoType> = ({
	productos,
	fecha,
	estado,
	pagado,
	regla_envio,
	observaciones,
	cliente,
	productos_nombres,
	cliente_nombre
}) => {
	for (let i = 0; i < productos.length && i < productos_nombres.length; i++) {
		productos[i].producto = productos_nombres[i];
	}

	return (
		<div className='w-full border'>
			<header className='flex justify-between items-center'>
				<span className='Capitalize cursor-pointer text-primary dark:text-primaryDark'>
					{cliente_nombre}: {cliente}
				</span>
				<span className='select-none'>{convertirFechaHora(fecha)}</span>
			</header>
			<section className='flex flex-col bg-zinc-800'>
				<h2>Productos</h2>
				{productos.map((product) => (
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
			<footer className='flex flex-row  justify-between items-center '>
				<span className='flex gap-2'>
					Pagó:
					{pagado ? (
						<p className='text-green-600 font-semibold'>Si</p>
					) : (
						<p className='text-red-600 font-semibold'>No</p>
					)}
				</span>
				<span className='flex gap-2'>
					<span>Estado:</span>
					<span>{estado}</span>
					<span>Regla de envio:</span>
					<span>{regla_envio}</span>
				</span>
			</footer>
		</div>
	);
};
export default Pedido;
