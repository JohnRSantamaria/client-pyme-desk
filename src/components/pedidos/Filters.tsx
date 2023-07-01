import { BsFilterRight } from 'react-icons/bs';
//context
import { PedidoContext } from '@/context/PedidoContext';
import { useContext, useState } from 'react';
import { Collapse } from 'react-collapse';

export const Filters = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { pagadoFilter, setPagadoFilter, reglaEnvioFilter, setReglaEnvioFilter } =
		useContext(PedidoContext);

	const handleFilterClick = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			setPagadoFilter('');
			setReglaEnvioFilter('');
		}
	};

	console.log(reglaEnvioFilter);
	//Filtros
	const handlePaymentClick = () => {
		setPagadoFilter(!pagadoFilter);
	};
	const handleShippingRule = () => {
		setReglaEnvioFilter('domicilio');
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
				<section className='flex justify-center p-2 gap-2'>
					<span
						onClick={handlePaymentClick}
						className='cursor-pointer'
					>
						{pagadoFilter ? <p>Pagados</p> : <p>Sin Pago</p>}
					</span>
					<span
						onClick={handleShippingRule}
						className='cursor-pointer'
					>
						regla_de_envio
					</span>
				</section>
			</Collapse>
		</>
	);
};
