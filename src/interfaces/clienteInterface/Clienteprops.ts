import { Ciudad } from '@/types';

export interface ClientProps {
	user: Usuarios;
}
export interface FieldsProps {
	data: string;
	title: string;
}

export interface Usuarios {
	id: number;
	nombre: string;
	celular: string;
	correo: string;
	direccion: string;
	ciudad: Ciudad;
}

export interface DropDownUsersProps {
	setBuscarCiudad: (buscarCiudad: string) => void;
}

export interface DatosClientesInterface {
	nombre: string;
	celular: string;
	correo: string;
	direccion: string;
	ciudad?: string | undefined;
}
