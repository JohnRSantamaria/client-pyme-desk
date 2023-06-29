import { Ciudad } from '@/types';

export interface Usuarios {
	id: number;
	nombre: string;
	celular: string;
	correo: string;
	direccion: string;
	ciudad: Ciudad;
}
