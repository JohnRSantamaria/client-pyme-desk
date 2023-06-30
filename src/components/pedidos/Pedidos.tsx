import React from 'react';
import AnimatedText from '../AnimateText';
import useFetchOrders from '@/hooks/useFetchOrders';
import PaginationNav from '../pagination/PaginationNav';
import Pedido from './Pedido';

const PedidosComponent = () => {
	const { changePage, currentPage, data, isLoading, totalPages } = useFetchOrders();

	return (
		<>
			<AnimatedText
				text='Nuestros Pedidos'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<main className='flex flex-col justify-between items-center w-full min-h-[calc(100vh-200px)] '>
				<section className='flex flex-col justify-between items-center w-full min-h-[650px] auto border-light dark:border-white shadow-2xl'>
					<article>
						{data.map((order) => (
							<Pedido key={order.id} />
						))}
					</article>
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
