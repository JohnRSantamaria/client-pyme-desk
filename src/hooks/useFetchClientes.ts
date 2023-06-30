import { useState, useEffect } from 'react';
import axios from 'axios';
import { Usuarios } from '@/interfaces/fetchUsuariosResponse';

const useFetchClientes = (initialPage = 1, initialCityFilter = '') => {
	const [data, setData] = useState<Usuarios[]>([]);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [currentPage, setCurrentPage] = useState<number>(initialPage);
	const [cityFilter, setCityFilter] = useState<string>(initialCityFilter);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async (
			pageNumber: number,
			city: string,
			resetPage: boolean = false
		) => {
			setIsLoading(true);
			if (resetPage) {
				pageNumber = 1;
				setCurrentPage(1);
			}
			try {
				const response = await axios.get(
					`/api/usuarios?page=${pageNumber}&ciudad=${city}`
				);
				setData(response.data.results);
				const totalResults = response.data.count;
				const resultsPerPage = 9;
				setTotalPages(Math.ceil(totalResults / resultsPerPage));
			} finally {
				setIsLoading(false);
			}
		};

		fetchData(currentPage, cityFilter, cityFilter !== '');
	}, [currentPage, cityFilter]);

	const changePage = (pageIndex: number) => {
		setCurrentPage(pageIndex + 1);
	};

	return {
		data,
		totalPages,
		currentPage,
		cityFilter,
		changePage,
		setCityFilter,
		isLoading
	};
};

export default useFetchClientes;
