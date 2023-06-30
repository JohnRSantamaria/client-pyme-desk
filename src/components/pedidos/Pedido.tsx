import { PedidoType } from '@/types';

const Pedido: React.FC<PedidoType> = ({
	id,
	productos,
	fecha,
	estado,
	pagado,
	regla_envio,
	observaciones,
	cliente,
	productos_nombres,
	cliente_nombre
}) => {
	return <p>{cliente_nombre}</p>;
};
export default Pedido;
