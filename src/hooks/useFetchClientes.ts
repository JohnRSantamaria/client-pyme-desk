import { useState, useEffect } from 'react';
import axios from 'axios';
import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';
//context
import { ClientesContext } from '@/context/ClientesContext';
import { useContext } from 'react';

export const useFetchClientes = (initialCityFilter = '') => {
	const [data, setData] = useState<Usuarios[]>([]);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [cityFilter, setCityFilter] = useState<string>(initialCityFilter);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { pageNumber, setPageNumber } = useContext(ClientesContext);

	useEffect(() => {
		const fetchData = async (pageNumber: number, city: string) => {
			setIsLoading(true);
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

		fetchData(pageNumber, cityFilter);
	}, [pageNumber, cityFilter]);

	const changePage = (pageIndex: number) => {
		setPageNumber(pageIndex + 1);
	};

	return {
		data,
		totalPages,
		currentPage: pageNumber,
		cityFilter,
		changePage,
		setCityFilter,
		isLoading
	};
};
