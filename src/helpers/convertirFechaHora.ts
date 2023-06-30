export function convertirFechaHora(fechaHora: string): string {
	const fechaHoraISO = new Date(fechaHora);
	const hora = fechaHoraISO.toLocaleString('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	});
	const diaMes = fechaHoraISO.toLocaleDateString([], {
		day: '2-digit',
		month: '2-digit'
	});

	return `${hora}, ${diaMes}`;
}
