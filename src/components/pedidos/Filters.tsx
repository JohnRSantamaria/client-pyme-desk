import { BsFilterRight } from 'react-icons/bs';
//context
import { PedidoContext } from '@/context/PedidoContext';
import { useContext, useState } from 'react';
import { Collapse } from 'react-collapse';
import DropDownPedidos from './DropDownPedidos';
import DropDownEstado from './DropDownEstado';

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
		<>
			<section
				onClick={handleFilterClick}
				className='flex justify-end items-center text-primary dark:text-primaryDark text-3xl border-b mr-2'
			>
				<BsFilterRight />
			</section>
			<Collapse isOpened={isOpen}>
				<section className='flex justify-center items-center p-2 gap-2 border'>
					<span
						onClick={handlePaymentClick}
						className='cursor-pointer'
					>
						{pagadoFilter ? <p>Pagados</p> : <p>Sin Pago</p>}
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
		</>
	);
};
