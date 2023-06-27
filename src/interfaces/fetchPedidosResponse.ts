export interface Pedidos {
	id: number;
	productos: Producto[];
	fecha: Date;
	estado: string;
	pagado: boolean;
	regla_envio: string;
	observaciones: string;
	cliente: number;
}

export interface Producto {
	id: number;
	cantidad: number;
	producto: number;
}
