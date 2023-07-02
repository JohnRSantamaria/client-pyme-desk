import { BsFilterRight } from 'react-icons/bs';
//context
import { PedidoContext } from '@/context/PedidoContext';
import { useContext, useState } from 'react';
import { Collapse } from 'react-collapse';
import DropDownPedidos from './DropDownPedidos';
import DropDownEstado from './DropDownEstado';

import { BsFillHandbagFill } from 'react-icons/bs';

export const Filters = () => {
	const [isOpen, setIsOpen] = useState(false);
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

	//Filtros
	const handlePaymentClick = () => {
		setCurrentPage(1);
		setPagadoFilter(!pagadoFilter);
	};

	return (
		<header className='flex flex-col justify-center w-full gap-2'>
			<main className='flex justify-end gap-4 items-center text-3xl mr-2'>
				<div>
					<button className='flex justify-center items-center gap-1 bg-transparent hover:bg-gray-100 text-base text-gray-800 font-semibold  py-1 px-2 rounded shadow dark:text-light dark:hover:bg-zinc-800 hover:text-primary dark:hover:text-primaryDark'>
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
				<section className='flex justify-end flex-wrap items-center p-2 gap-2 border-y border-zinc-400 xs:flex-col xs:items-end '>
					<span
						onClick={handlePaymentClick}
						className='cursor-pointer'
					>
						<span className='border-1 ring-1 ring-zinc-300 py-2 px-3 rounded-md bg-white dark:bg-dark hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold shadow'>
							{pagadoFilter ? 'Pagados' : 'Sin Pago'}
						</span>
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
