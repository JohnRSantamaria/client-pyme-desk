import React, { useState } from 'react';
import AnimatedText from '../AnimateText';
import useFetchOrders from '@/hooks/useFetchOrders';
import PaginationNav from '../pagination/PaginationNav';
import Pedido from './Pedido';
import SpinLoader from '../svgs/SpinLoader';
import { PropiedadesPedido } from '@/types';

const PedidosComponent: React.FC = () => {
	const {
		changePage,
		setIdFilter,
		setClienteFilter,
		setEstadoFilter,
		setPagadoFilter,
		setReglaEnvioFilter,
		currentPage,
		data,
		isLoading,
		totalPages
	} = useFetchOrders();

	const [open, setOpen] = useState<number | false>(false);

	const toogle = (index: number) => {
		if (open === index) {
			return setOpen(false);
		}
		setOpen(index);
	};

	return (
		<>
			<AnimatedText
				text='Nuestros Pedidos'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<main className='flex flex-col justify-between items-center w-full min-h-[calc(100vh-200px)] '>
				<section className='flex flex-col justify-between items-center w-full min-h-[500px] auto border-light dark:border-white shadow-2xl'>
					{isLoading ? (
						<SpinLoader />
					) : (
						<article className='grid grid-cols-1 place-items-center grid-flow-row gap-16 px-80 py-4 w-full 2xl:px-56 xl:px-40 lg:px-20 md:px-12 sm:px-2'>
							{data.map((order) => (
								<Pedido
									key={order.id}
									id={order.id}
									productos={order.productos}
									fecha={order.fecha}
									estado={order.estado}
									pagado={order.pagado}
									regla_envio={order.regla_envio}
									observaciones={order.observaciones}
									cliente={order.cliente}
									productos_nombres={order.productos_nombres}
									cliente_nombre={order.cliente_nombre}
									open={open === order.id}
									toogle={() => order.id !== undefined && toogle(order.id)}
								/>
							))}
						</article>
					)}
				</section>
				<footer className='my-2'>
					<PaginationNav
						gotoPage={changePage}
						canPreviousPage={currentPage > 1}
						canNextPage={currentPage < totalPages}
						pageCount={totalPages}
						pageIndex={currentPage - 1}
					/>
				</footer>
			</main>
		</>
	);
};

export default PedidosComponent;
