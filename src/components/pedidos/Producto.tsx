import { ProductoProps } from '@/interfaces/pediosInterface/ProductoPropsInterface';

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
