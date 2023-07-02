import { FC, Fragment, MouseEvent, useState, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
//Context
import { PedidoContext } from '@/context/PedidoContext';

const reglas = ['', 'recoge', 'domicilio'] as const;

type Reglas = (typeof reglas)[number];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

interface DropDownReglasEnvioProps {
	setReglaEnvioFilter: React.Dispatch<React.SetStateAction<'' | 'domicilio' | 'recoge'>>;
}

const DropDownReglasEnvio: FC<DropDownReglasEnvioProps> = ({ setReglaEnvioFilter }) => {
	const [regla, setRegla] = useState<string>('');
	const { setCurrentPage } = useContext(PedidoContext);

	const handleClickCities = (event: MouseEvent<HTMLSpanElement>) => {
		const regla =
			(event.currentTarget.getAttribute('data-regla') as '' | 'recoge' | 'domicilio') ||
			'';
		setCurrentPage(1);
		setReglaEnvioFilter(regla);
		setRegla(regla);
	};

	return (
		<Menu
			as='div'
			className='relative inline-block text-left'
		>
			<div>
				<Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-light dark:bg-dark dark:hover:bg-zinc-800'>
					{regla === '' ? <p>Envio</p> : regla}
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
						{reglas.map((regla: Reglas, index: number) => (
							<Menu.Item key={regla + index}>
								{({ active }) => (
									<span
										data-regla={regla}
										onClick={handleClickCities}
										className={classNames(
											active
												? 'bg-gray-100 text-gray-900 dark:bg-zinc-200 dark:text-zinc-900'
												: 'text-gray-700 dark:text-slate-300',
											'block px-4 py-2 text-sm cursor-pointer'
										)}
									>
										{regla === '' ? <p>Todas</p> : regla}
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
export default DropDownReglasEnvio;
