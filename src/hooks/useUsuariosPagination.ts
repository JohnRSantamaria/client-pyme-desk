import { useEffect, useState } from 'react';
import axios from 'axios';
import { Usuarios } from '@/interfaces/fetchUsuariosResponse';
import { SearchType } from '@/types';

interface ApiResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Usuarios[];
}

export const useUsuariosPagination = async () => {
	const [data, setData] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [cityFilter, setCityFilter] = useState('');

	useEffect(() => {
		fetchData(currentPage, cityFilter);
	}, [currentPage, cityFilter]);

	const fetchData = async (pageNumber: any, city: any) => {
		const response = await axios.get(`/api/usuarios?page=${pageNumber}&ciudad=${city}`);
		setData(response.data.results);
		const totalResults = response.data.count;
		const resultsPerPage = response.data.results.length;
		setTotalPages(Math.ceil(totalResults / resultsPerPage));
	};

	return { data, totalPages };
};
