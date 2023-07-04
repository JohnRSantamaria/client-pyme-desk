import { FC, Fragment, MouseEvent, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
//Context
import { PedidoContext } from '@/context/PedidoContext';
import { useContext } from 'react';
import useUpdatePedido from '@/hooks/usePatchPedidos';
// Sweet Alert
import Swal from 'sweetalert2';
//Buttons SweetAler2
const CONFIRM_BUTTON_COLOR = '#3085d6';
const CANCEL_BUTTON_COLOR = '#d33';
const BACK_GROUND_COLOR = '#E4E4E7';

const estados = ['pendiente', 'en ruta', 'entregado', 'cancelado'] as const;

type Estados = (typeof estados)[number];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

interface DropDownEstadosProps {
	paramEstado: string;
	id: number | undefined;
}

const DEstado: FC<DropDownEstadosProps> = ({ paramEstado, id }) => {
	const { updatePedido } = useUpdatePedido();

	const { setCurrentPage, setEstadoFilter } = useContext(PedidoContext);

	const handleClickCities = (event: MouseEvent<HTMLSpanElement>) => {
		const estado =
			(event.currentTarget.getAttribute('data-estado') as
				| 'pendiente'
				| 'en ruta'
				| 'entregado'
				| 'cancelado') || '';

		Swal.fire({
			title: 'Esta seguro?',
			text: 'Cambiara el estado de la orden: ' + id,
			icon: 'warning',
			iconColor: CANCEL_BUTTON_COLOR,
			background: BACK_GROUND_COLOR,
			showCancelButton: true,
			confirmButtonColor: CONFIRM_BUTTON_COLOR,
			cancelButtonColor: CANCEL_BUTTON_COLOR,
			confirmButtonText: 'Si, Cambiala!',
			cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Cambiada',
					icon: 'success',
					iconColor: CONFIRM_BUTTON_COLOR,
					confirmButtonColor: CONFIRM_BUTTON_COLOR,
					background: BACK_GROUND_COLOR
				});
				updatePedido({ id, estado: estado });
				setCurrentPage(1);
				setEstadoFilter(estado);
			}
		});
	};

	return (
		<Menu
			as='div'
			className='relative inline-block text-left'
		>
			<div>
				<Menu.Button className='inline-flex w-full justify-center rounded-md bg-slate-100 dark:bg-zinc-900 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-transparent hover:bg-gray-50 dark:text-light dark:hover:bg-zinc-800'>
					<span className='capitalize'>{paramEstado}</span>
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
				<Menu.Items className='absolute z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800'>
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
										<p className='capitalize'>{estado}</p>
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
export default DEstado;
