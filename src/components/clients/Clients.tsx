import AnimatedText from '../AnimateText';
import Client from './Client';
import DropDownUsers from './DropDownUsers';
import PaginationNav from '../pagination/PaginationNav';
import SpinLoader from '../svgs/SpinLoader';

import { useRouter } from 'next/router';
import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';
import { useFetchClientes } from '@/hooks/useFetchClientes';

import { BsFillPersonFill } from 'react-icons/bs';

const Clients = () => {
	const router = useRouter();
	const { data, totalPages, currentPage, changePage, setCityFilter, isLoading } =
		useFetchClientes();

	const handleClickAddClient = () => {
		router.push('clientes/nuevo-cliente');
	};

	return (
		<>
			<AnimatedText
				text='Nuestros clientes'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<section className='flex flex-col justify-between items-center w-full'>
				<section className='flex flex-col justify-start items-center w-full min-h-[calc(100vh-240px)] shadow-lg'>
					{/* Header*/}
					<header className='flex justify-end items-center w-full h-12 border-b gap-4 pr-4 rounded-1xl border-gray-500 sm:justify-evenly '>
						<button
							onClick={handleClickAddClient}
							className='flex justify-center items-center gap-1 bg-white hover:bg-gray-100 text-base text-gray-800 font-semibold  py-1 px-2 border border-gray-300 rounded shadow dark:bg-zinc-900 dark:text-light dark:hover:bg-zinc-800'
						>
							Agregar <BsFillPersonFill />
						</button>
						<DropDownUsers setBuscarCiudad={setCityFilter} />
					</header>
					{/* data */}
					{isLoading ? (
						<section className=' flex items-center justify-center w-full mt-8'>
							<SpinLoader />
						</section>
					) : (
						<article className='grid grid-cols-3 grid-flow-row gap-16 p-8 w-full 2xl:grid-cols-2 md:grid-cols-1'>
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
					)}
				</section>
				{/* paginacion */}
				<footer className='mt-8 mb-4'>
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

export default Clients;
