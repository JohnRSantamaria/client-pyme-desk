import React from 'react';
import AnimatedText from '../AnimateText';
import useFetchOrders from '@/hooks/useFetchOrders';
import PaginationNav from '../pagination/PaginationNav';
import Pedido from './Pedido';
import LoaderComponent from '../svgs/Loader';

const PedidosComponent = () => {
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

	return (
		<>
			<AnimatedText
				text='Nuestros Pedidos'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<main className='flex flex-col justify-between items-center w-full min-h-[calc(100vh-200px)] '>
				<section className='flex flex-col justify-between items-center w-full min-h-[500px] auto border-light dark:border-white shadow-2xl'>
					{isLoading ? (
						<LoaderComponent />
					) : (
						<article>
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
								/>
							))}
						</article>
					)}
					<button
						onClick={() => {
							setIdFilter(6);
						}}
					>
						Click para enviar
					</button>
				</section>
				<footer className='mb-2'>
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
