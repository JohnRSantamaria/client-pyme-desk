import React from 'react';
import Head from 'next/head';
import AnimatedText from '../AnimateText';
import Client from './Client';
import { Usuarios } from '@/interfaces/fetchUsuariosResponse';
import DropDownUsers from './DropDownUsers';
import { useUsuariosPagination } from '@/hooks/useUsuariosPagination';
import Pagination from '../pagination/Pagination';
import L4 from '../svgs/Loader';

const Clients = () => {
	const { count, isLoading, next, previous, usuarios } = useUsuariosPagination();

	return isLoading ? (
		<L4 />
	) : (
		<>
			<header>
				<AnimatedText
					text='Nuestros clientes'
					className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
				/>
			</header>
			<section className='flex flex-col justify-evenly items-center w-full h-min-[500px] auto pt-2 border-light dark:border-dark shadow-2xl'>
				<article className='flex justify-end items-center w-full h-12 border-b gap-4 pr-4 rounded-1xl border-gray-500 sm:justify-center'>
					<button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-300 rounded shadow dark:bg-zinc-900 dark:text-light dark:hover:bg-zinc-800'>
						Agregar cliente
					</button>
					<DropDownUsers />
				</article>
				<article className='grid grid-cols-3 grid-flow-row gap-16 p-8 w-full 2xl:grid-cols-2 md:grid-cols-1 md:'>
					{Array.isArray(usuarios) &&
						usuarios.map((user: Usuarios, index: number) => {
							return (
								<Client
									key={index}
									user={user}
								/>
							);
						})}
				</article>
			</section>
			{/* 
			<Pagination
				count={count}
				setPage={setPage}
			/> */}
		</>
	);
};

export default Clients;
