export interface Resumen {
	numero_de_pedidos: number;
	numero_de_clientes: number;
	ingresos_del_ultimo_mes: number;
	ciudad_con_mas_pedidos: CiudadConMasPedidos;
	producto_mas_vendido: ProductoMasVendido;
}

export interface CiudadConMasPedidos {
	cliente__ciudad: string;
	total: number;
}

export interface ProductoMasVendido {
	producto__nombre: string;
	total: number;
}
