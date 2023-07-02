import { useState, useEffect } from 'react';
import axios from 'axios';
import { PedidoType } from '@/types';
//Context
import { PedidoContext } from '@/context/PedidoContext';
import { useContext } from 'react';

const useFetchOrders = (
	initialIdFilter = '',
	initialEstadoFilter = '',
	initialclienteFilter = ''
) => {
	const [data, setData] = useState<PedidoType[]>([]);
	const [totalPages, setTotalPages] = useState<number>(1);

	const [IdFilter, setIdFilter] = useState<string | number>(initialIdFilter);
	const [clienteFilter, setClienteFilter] = useState<string | number>(
		initialclienteFilter
	);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		pagadoFilter,
		setPagadoFilter,
		reglaEnvioFilter,
		setReglaEnvioFilter,
		currentPage,
		setCurrentPage,
		estadoFilter,
		setEstadoFilter
	} = useContext(PedidoContext);

	useEffect(() => {
		const fetchData = async (pageNumber: number) => {
			setIsLoading(true);

			try {
				const response = await axios.get(
					`/api/pedidos?page=${pageNumber}&id=${IdFilter}&estado=${estadoFilter}&pagado=${pagadoFilter}&regla_envio=${reglaEnvioFilter}&cliente=${clienteFilter}`
				);
				setData(response.data.results);
				const totalResults = response.data.count;
				const resultsPerPage = 9;
				setTotalPages(Math.ceil(totalResults / resultsPerPage));
			} finally {
				setIsLoading(false);
			}
		};

		fetchData(currentPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, IdFilter, pagadoFilter, reglaEnvioFilter, estadoFilter]);

	const changePage = (pageIndex: number) => {
		setCurrentPage(pageIndex + 1);
	};

	return {
		data,
		totalPages,
		currentPage,
		changePage,
		setIdFilter,
		setEstadoFilter,
		setPagadoFilter,
		setReglaEnvioFilter,
		setClienteFilter,
		isLoading
	};
};

export default useFetchOrders;
