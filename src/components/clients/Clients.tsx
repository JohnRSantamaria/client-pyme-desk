import AnimatedText from '../AnimateText';
import Client from './Client';
import DropDownUsers from './DropDownUsers';
import PaginationNav from '../pagination/PaginationNav';
import useFetchClientes from '@/hooks/useFetchClientes';
import LoaderComponent from '../svgs/Loader';
import { useRouter } from 'next/router';
import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';

const Clients = () => {
	const { data, totalPages, currentPage, changePage, setCityFilter, isLoading } =
		useFetchClientes();

	const router = useRouter();

	const handleClickAddClient = () => {
		router.push('clientes/nuevo-cliente');
	};

	return (
		<>
			<AnimatedText
				text='Nuestros clientes'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<main className='flex flex-col justify-between items-center w-full min-h-[calc(100vh-200px)] '>
				<section className='flex flex-col justify-start items-center w-full min-h-[500px] auto pt-2 border-light dark:border-dark shadow-2xl'>
					<article className='flex justify-end items-center w-full h-12 border-b gap-4 pr-4 rounded-1xl border-gray-500 sm:justify-center'>
						<button
							onClick={handleClickAddClient}
							className='bg-white hover:bg-gray-100 text-base text-gray-800 font-semibold  py-1 px-2 border border-gray-300 rounded shadow dark:bg-zinc-900 dark:text-light dark:hover:bg-zinc-800'
						>
							Agregar Cliente
						</button>
						<DropDownUsers setBuscarCiudad={setCityFilter} />
					</article>
					{isLoading ? (
						<LoaderComponent />
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

export default Clients;
