import AnimatedText from '../AnimateText';
import Tshirt from '../svgs/Tshirt';
import Customer from '../svgs/Customer';
import Money from '../svgs/Money';
import Truck from '../svgs/Truck';
import CityScape from '../svgs/CityScape';
import SalesItems from './SalesItemsProps';
import BarsPrueva from '../Charts/BarChart';
import { useResumen } from '@/hooks/useResumen';
import SpinLoader from '../svgs/SpinLoader';

const SalesSumary = () => {
	const { resumen, error } = useResumen();

	if (!resumen) {
		return (
			<section className='flex justify-center items-center '>
				<SpinLoader />
			</section>
		);
	}

	if (error) {
		return (
			<p>
				El servidor no esta diponible en este momento por favor espere uno minutos y
				recarge la pagina
			</p>
		);
	}

	const {
		numero_de_pedidos = 'No disponible',
		numero_de_clientes = 'No disponible',
		ingresos_del_ultimo_mes = 0,
		ciudad_con_mas_pedidos = { cliente__ciudad: 'No disponible', total: 0 },
		producto_mas_vendido = { producto__nombre: 'No disponible', total: 0 }
	} = resumen;

	return (
		<>
			<AnimatedText
				text='Panel de métricas'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<section className='flex flex-col w-full auto pt-16 shadow-lg mb-16'>
				<article className='grid grid-cols-3 grid-flow-row place-items-center gap-y-16 gap-x-2  2xl:grid-cols-2 lg:grid-cols-1 md:pb-16'>
					<SalesItems
						title={'Número de pedidos'}
						data={numero_de_pedidos}
					>
						<Truck className='text-primary dark:text-primaryDark' />
					</SalesItems>

					<SalesItems
						title={'Número de clientes'}
						data={numero_de_clientes}
					>
						<Customer className='text-primary dark:text-primaryDark' />
					</SalesItems>

					<SalesItems
						title={'Ingresos del último mes'}
						data={`$ ${ingresos_del_ultimo_mes}.0` || 0}
					>
						<Money className='text-primary dark:text-primaryDark' />
					</SalesItems>

					<SalesItems
						title={'Ciudad con más pedidos'}
						data={ciudad_con_mas_pedidos?.cliente__ciudad || 'No disponible'}
					>
						<CityScape className='text-primary dark:text-primaryDark' />
					</SalesItems>

					<SalesItems
						title={'Producto más vendido'}
						data={producto_mas_vendido?.producto__nombre || 'No disponible'}
					>
						<Tshirt className='text-primary dark:text-primaryDark' />
					</SalesItems>
				</article>
				<article className='flex items-start justify-center w-full h-auto py-8 px-48 2xl:px-32 lg:px-8 md:px-8 sm:px-8 xs:hidden'>
					<BarsPrueva />
				</article>
			</section>
		</>
	);
};

export default SalesSumary;
