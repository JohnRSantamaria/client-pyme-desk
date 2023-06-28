import { Usuarios } from '@/interfaces/fetchUsuariosResponse';

export default function formattingData(usuarios: Usuarios[]): { [key: string]: number } {
	const cityCounts: { [key: string]: number } = {};

	usuarios.forEach((usuario) => {
		if (cityCounts[usuario.ciudad]) {
			cityCounts[usuario.ciudad]++;
		} else {
			cityCounts[usuario.ciudad] = 1;
		}
	});
	return cityCounts;
}
