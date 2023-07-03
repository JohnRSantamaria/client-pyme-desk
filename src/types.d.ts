export type ChartData = {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor: string;
		borderColor: string;
	}[];
};

export type ResponseType = Usuarios | { Message: string };

export type SearchType = number | string;

export type DatosUsuario = {
	nombre: string;
	celular: string;
	correo: string;
	direccion: string;
	ciudad?: string; // Utilizar 'ciudad' con 'c' minúscula
};

export type ErroresValidacion = {
	[K in keyof DatosUsuario]?: string;
};

export const ciudades = [
	'',
	'Barranquilla',
	'Cartagena',
	'Bucaramanga',
	'Pereira',
	'Santa Marta',
	'Ibagué',
	'Manizales',
	'Cali',
	'Bogotá',
	'Medellín'
] as const;

export type Ciudad = (typeof ciudades)[number];
// Types para pedido

export type PedidoType = {
	id?: number;
	productos: {
		id: number;
		cantidad: number;
		producto: number | string;
	}[];
	fecha: string;
	estado: string;
	pagado: boolean;
	regla_envio: string;
	observaciones: string;
	cliente: number;
	productos_nombres: string[];
	cliente_nombre: string;
};

export type PropiedadesPedido = {
	id: number | undefined;
	productos: TipoPedido['productos'];
	fecha: TipoPedido['fecha'];
	estado: TipoPedido['estado'];
	pagado: TipoPedido['pagado'];
	regla_envio: TipoPedido['regla_envio'];
	observaciones: TipoPedido['observaciones'];
	cliente: TipoPedido['cliente'];
	productos_nombres: TipoPedido['productos_nombres'];
	cliente_nombre: TipoPedido['cliente_nombre'];
	open: boolean;
	toogle: () => void;
};

export type TipoProducto = {
	id: number;
	cantidad: number;
	producto: number | string;
};

export type Estado = 'pendiente' | 'en ruta' | 'entregado' | 'cancelado' | '';
// Pedido Types
export type DatosPedidos = {
	cantidad: string | number;
	observaciones: string;
};
export type OptionPedidosTypes = {
	id: number;
	caption: string;
};
