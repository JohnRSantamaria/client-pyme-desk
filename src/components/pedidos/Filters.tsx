import { BsFilterRight } from 'react-icons/bs';
//context
import { PedidoContext } from '@/context/PedidoContext';
import { useContext, useState } from 'react';
import { Collapse } from 'react-collapse';
import DropDownPedidos from './DropDownPedidos';
import DropDownEstado from './DropDownEstado';

import { BsFillHandbagFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Filters = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const {
		pagadoFilter,
		setPagadoFilter,
		setReglaEnvioFilter,
		setCurrentPage,
		setEstadoFilter
	} = useContext(PedidoContext);

	const handleFilterClick = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			setPagadoFilter('');
			setReglaEnvioFilter('');
			setEstadoFilter('');
			setCurrentPage(1);
		}
	};

	const handleNewOreder = () => {
		router.push('pedidos/nuevo-pedido');
	};

	//Filtros
	const handlePaymentClick = () => {
		setCurrentPage(1);
		setPagadoFilter(!pagadoFilter);
	};

	return (
		<header className='flex flex-col justify-center w-full gap-2'>
			<main className='flex justify-end gap-4 items-center text-3xl mr-2'>
				<div>
					<button
						onClick={handleNewOreder}
						className='flex justify-center items-center gap-1 bg-white hover:bg-gray-100 text-base text-gray-800 font-semibold  py-1 px-2 border border-gray-300 rounded shadow dark:bg-zinc-900 dark:text-light dark:hover:bg-zinc-800'
					>
						Agregar <BsFillHandbagFill />
					</button>
				</div>
				<div
					onClick={handleFilterClick}
					className=' flex justify-end items-center hover:text-primary dark:hover:text-primaryDark cursor-pointer'
				>
					<BsFilterRight />
				</div>
			</main>
			<Collapse isOpened={isOpen}>
				<section className='flex justify-end items-center flex-wrap gap-2 border-zinc-400 xs:flex-col xs:items-end'>
					{/* pago */}
					<span
						onClick={handlePaymentClick}
						className='flex justify-center items-center gap-1 bg-white hover:bg-gray-100 text-base text-gray-800 font-semibold  py-1 px-2 border border-gray-300 rounded shadow dark:bg-zinc-900 dark:text-light dark:hover:bg-zinc-800'
					>
						{pagadoFilter ? 'Pagados' : 'Sin Pago'}
					</span>
					{/* reglas de envios */}
					<span className='cursor-pointer'>
						<DropDownPedidos setReglaEnvioFilter={setReglaEnvioFilter} />
					</span>
					{/* estado */}
					<span className='cursor-pointer'>
						<DropDownEstado setEstadoFilter={setEstadoFilter} />
					</span>
				</section>
			</Collapse>
		</header>
	);
};
export default Filters;
