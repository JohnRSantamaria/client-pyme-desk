import { ProductoProps } from '@/interfaces/pediosInterface/ProductoPropsInterface';
import SpinLoader from '../svgs/SpinLoader';

const Producto: React.FC<ProductoProps> = ({ cantidad, producto }) => {
	return (
		<>
			<div>
				<span>{producto}</span> : <span>{cantidad}</span>
			</div>
		</>
	);
};

export default Producto;
