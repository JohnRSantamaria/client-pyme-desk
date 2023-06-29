export type ChartData = {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor: string;
		borderColor: string;
	}[];
};
export type Ciudad =
	| 'Barranquilla'
	| 'Cartagena'
	| 'Bucaramanga'
	| 'Pereira'
	| 'Santa Marta'
	| 'Ibagué'
	| 'Manizales'
	| 'Cali'
	| 'Bogotá'
	| 'Medellín';

export type ResponseType = Usuarios | { Message: string };

type PageType = number | string;
