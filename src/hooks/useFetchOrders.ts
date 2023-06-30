import { useState, useEffect } from 'react';
import axios from 'axios';
import { PedidoType } from '@/types';

const useFetchOrders = (
	initialPage = 1,
	initialIdFilter = '',
	initialEstadoFilter = '',
	initialPagadoFilter = '',
	initialReglaEnvioFilter = '',
	initialclienteFilter = ''
) => {
	const [data, setData] = useState<PedidoType[]>([]);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [currentPage, setCurrentPage] = useState<number>(initialPage);

	const [IdFilter, setIdFilter] = useState<string | number>(initialIdFilter);
	const [estadoFilter, setEstadoFilter] = useState<
		'' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado'
	>(initialEstadoFilter as '' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado');
	const [pagadoFilter, setPagadoFilter] = useState<boolean | string>(initialPagadoFilter);
	const [reglaEnvioFilter, setReglaEnvioFilter] = useState<'' | 'domicilio' | 'recoge'>(
		initialReglaEnvioFilter as '' | 'domicilio' | 'recoge'
	);
	const [clienteFilter, setClienteFilter] = useState<string | number>(
		initialclienteFilter
	);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async (pageNumber: number, resetPage: boolean = false) => {
			setIsLoading(true);
			if (resetPage) {
				pageNumber = 1;
				setCurrentPage(1);
			}
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

		fetchData(currentPage, IdFilter !== '');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, IdFilter]);

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
