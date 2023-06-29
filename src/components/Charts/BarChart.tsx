import { useState, useMemo } from 'react';

import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';

import { useUsuarios } from '@/hooks/useUsuarios';
import formattingData from '@/helpers/formattingDataUsers';
import { ChartData } from '@/types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarsPrueva() {
	const emptyChartData: ChartData = {
		labels: [],
		datasets: [
			{
				label: '',
				data: [],
				backgroundColor: '',
				borderColor: ''
			}
		]
	};
	const [chartData, setChartData] = useState<ChartData>(emptyChartData);

	const { usuarios } = useUsuarios();

	useMemo(() => {
		if (Array.isArray(usuarios)) {
			const cityCounts = formattingData(usuarios);

			const data: ChartData = {
				labels: Object.keys(cityCounts),
				datasets: [
					{
						label: 'Número de Usuarios por Ciudad',
						data: Object.values(cityCounts),
						backgroundColor: 'rgba(75, 192, 192, 0.6)',
						borderColor: 'rgba(75, 192, 192, 1)'
					}
				]
			};
			setChartData(data);
		}
	}, [usuarios]);

	return <Bar data={chartData} />;
}

export default BarsPrueva;
