import { ProductoProps } from '@/interfaces/pediosInterface/ProductoPropsInterface';
import SpinLoader from '../svgs/SpinLoader';

const Producto: React.FC<ProductoProps> = ({ cantidad, producto }) => {
	return (
		<div className='px-2'>
			<span className='capitalize text-primary dark:text-primaryDark font-semibold'>
				{cantidad}
			</span>{' '}
			: <span className='capitalize'>{producto}</span>
		</div>
	);
};

export default Producto;
