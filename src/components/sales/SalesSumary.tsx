import AnimatedText from '../AnimateText';
import { Resumen } from '@/interfaces/fetchResumenResponse';
import Tshirt from '../svgs/Tshirt';
import Customer from '../svgs/Customer';
import Money from '../svgs/Money';
import Truck from '../svgs/Truck';
import CityScape from '../svgs/CityScape';
import SalesItems from './SalesItemsProps';

interface SalesSumaryProps {
	resumen?: Resumen;
}

const SalesSumary: React.FC<SalesSumaryProps> = ({ resumen }) => {
	if (!resumen) {
		return <div>Resumen no disponible</div>;
	}

	const {
		numero_de_pedidos = 'No disponible',
		numero_de_clientes = 'No disponible',
		ingresos_del_ultimo_mes = 0,
		ciudad_con_mas_pedidos = { cliente__ciudad: 'No disponible' },
		producto_mas_vendido = { producto__nombre: 'No disponible' }
	} = resumen;

	return (
		<>
			<AnimatedText
				text='Panel de metricas'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>
			<section className='flex justify-center items-start w-full h-[700px] pt-16 border border-light shadow-2xl dark:border-dark  '>
				<div className='grid grid-cols-3 grid-flow-row place-items-center gap-y-16 gap-x-2 2xl:grid-cols-2 lg:grid-cols-1'>
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
						data={ingresos_del_ultimo_mes || 0}
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
				</div>
			</section>
		</>
	);
};

export default SalesSumary;