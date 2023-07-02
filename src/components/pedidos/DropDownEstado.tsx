import { FC, Fragment, MouseEvent, useState, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
//Context
import { PedidoContext } from '@/context/PedidoContext';

const estados = ['', 'pendiente', 'en ruta', 'entregado', 'cancelado'] as const;

type Estados = (typeof estados)[number];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

interface DropDownEstadosProps {
	setEstadoFilter: React.Dispatch<
		React.SetStateAction<'' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado'>
	>;
}

const DropDownEstado: FC<DropDownEstadosProps> = ({ setEstadoFilter }) => {
	const [estado, setEstado] = useState<string>('');
	const { setCurrentPage } = useContext(PedidoContext);

	const handleClickCities = (event: MouseEvent<HTMLSpanElement>) => {
		const estado =
			(event.currentTarget.getAttribute('data-estado') as
				| ''
				| 'pendiente'
				| 'en ruta'
				| 'entregado'
				| 'cancelado') || '';
		setCurrentPage(1);
		setEstadoFilter(estado);
		setEstado(estado);
	};

	return (
		<Menu
			as='div'
			className='relative inline-block text-left'
		>
			<div>
				<Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-light dark:bg-dark dark:hover:bg-zinc-800'>
					{estado === '' ? <p>Estado</p> : <p className='capitalize'>{estado}</p>}
					<ChevronDownIcon
						className='-mr-1 h-5 w-5 text-primary dark:text-primaryDark'
						aria-hidden='true'
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800'>
					<div className='py-1'>
						{estados.map((estado: Estados, index: number) => (
							<Menu.Item key={estado + index}>
								{({ active }) => (
									<span
										data-estado={estado}
										onClick={handleClickCities}
										className={classNames(
											active
												? 'bg-gray-100 text-gray-900 dark:bg-zinc-200 dark:text-zinc-900'
												: 'text-gray-700 dark:text-slate-300',
											'block px-4 py-2 text-sm cursor-pointer'
										)}
									>
										{estado === '' ? (
											<p>Todos</p>
										) : (
											<p className='capitalize'>{estado}</p>
										)}
									</span>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};
export default DropDownEstado;
