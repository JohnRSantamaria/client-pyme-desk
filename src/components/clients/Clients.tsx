import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AnimatedText from '../AnimateText';
import Client from './Client';
import { Usuarios } from '@/interfaces/fetchUsuariosResponse';
import DropDownUsers from './DropDownUsers';
import PaginationNav from '../pagination/PaginationNav';

const Clients = () => {
	const [data, setData] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [cityFilter, setCityFilter] = useState('');

	const fetchData = async (
		pageNumber: number,
		city: string,
		resetPage: boolean = false
	) => {
		if (resetPage) {
			pageNumber = 1;
			setCurrentPage(1);
		}
		const response = await axios.get(`/api/usuarios?page=${pageNumber}&ciudad=${city}`);
		setData(response.data.results);
		const totalResults = response.data.count;
		const resultsPerPage = 9;
		setTotalPages(Math.ceil(totalResults / resultsPerPage));
	};

	useEffect(() => {
		fetchData(currentPage, cityFilter, cityFilter !== '');
	}, [currentPage, cityFilter]);

	const changePage = (pageIndex: number) => {
		setCurrentPage(pageIndex + 1);
	};

	return (
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
					<DropDownUsers setBuscarCiudad={setCityFilter} />
				</article>
				<article className='grid grid-cols-3 grid-flow-row gap-16 p-8 w-full 2xl:grid-cols-2 md:grid-cols-1 md:'>
					{Array.isArray(data) &&
						data.map((user: Usuarios) => {
							return (
								<Client
									key={user.id}
									user={user}
								/>
							);
						})}
				</article>
			</section>
			<section>
				<PaginationNav
					gotoPage={changePage}
					canPreviousPage={currentPage > 1}
					canNextPage={currentPage < totalPages}
					pageCount={totalPages}
					pageIndex={currentPage - 1}
				/>
			</section>
		</>
	);
};

export default Clients;
