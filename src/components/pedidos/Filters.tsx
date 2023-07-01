import { BsFilterRight } from 'react-icons/bs';
//context
import { PedidoContext } from '@/context/PedidoContext';
import { useContext, useState } from 'react';
import { Collapse } from 'react-collapse';

export const Filters = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { pagadoFilter, setPagadoFilter } = useContext(PedidoContext);

	const handleFilterClick = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			setPagadoFilter('');
		}
	};

	const handleClick = () => {
		setPagadoFilter(!pagadoFilter);
	};

	return (
		<>
			<section
				onClick={handleFilterClick}
				className='flex justify-end items-center text-primary dark:text-primaryDark text-3xl'
			>
				<BsFilterRight />
			</section>
			<Collapse isOpened={isOpen}>
				<section className='flex justify-center  p-2'>
					<button onClick={handleClick}>
						{pagadoFilter ? <p>Pagado</p> : <p>No Pagos</p>}
					</button>
				</section>
			</Collapse>
		</>
	);
};
