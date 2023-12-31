import React, { useState } from 'react';
import AnimatedText from '../AnimateText';
import useFetchOrders from '@/hooks/useFetchOrders';
import PaginationNav from '../pagination/PaginationNav';
import Pedido from './Pedido';
import SpinLoader from '../svgs/SpinLoader';
import Filters from './Filters';

const PedidosComponent: React.FC = () => {
	const { changePage, currentPage, data, isLoading, totalPages } = useFetchOrders();

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
			<section className='flex flex-col justify-between items-center w-full'>
				<section className='flex flex-col justify-start items-center w-full min-h-[calc(100vh-240px)] shadow-lg'>
					<header className='grid grid-cols-1 place-items-end grid-flow-row gap-8 px-80 py-4 w-full 2xl:px-56 xl:px-40 lg:px-20 md:px-12 sm:px-2'>
						<Filters />
					</header>
					{isLoading ? (
						<section className=' flex items-center justify-center w-full mt-8'>
							<SpinLoader />
						</section>
					) : (
						<article className='grid grid-cols-1 place-items-center grid-flow-row gap-8 px-80 py-4 w-full 2xl:px-56 xl:px-40 lg:px-20 md:px-12 sm:px-2'>
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
				<footer className='mb-2 mt-4'>
					<PaginationNav
						gotoPage={changePage}
						canPreviousPage={currentPage > 1}
						canNextPage={currentPage < totalPages}
						pageCount={totalPages}
						pageIndex={currentPage - 1}
					/>
				</footer>
			</section>
		</>
	);
};

export default PedidosComponent;
