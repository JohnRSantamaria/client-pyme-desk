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
