import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState
} from 'react';

interface PedidoContextProps {
	pagadoFilter: boolean | string;
	setPagadoFilter: Dispatch<SetStateAction<boolean | string>>;
	reglaEnvioFilter: '' | 'domicilio' | 'recoge';
	setReglaEnvioFilter: React.Dispatch<React.SetStateAction<'' | 'domicilio' | 'recoge'>>;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	estadoFilter: '' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado';
	setEstadoFilter: React.Dispatch<
		React.SetStateAction<'' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado'>
	>;
	paramEstadoFilter: '' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado';
	setParamEstadoFilter: React.Dispatch<
		React.SetStateAction<'' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado'>
	>;
}

export const PedidoContext = createContext<PedidoContextProps>({
	pagadoFilter: '',
	setPagadoFilter: () => {},
	reglaEnvioFilter: '',
	setReglaEnvioFilter: () => {},
	currentPage: 1,
	setCurrentPage: () => {},
	estadoFilter: '',
	setEstadoFilter: () => {},
	paramEstadoFilter: '',
	setParamEstadoFilter: () => {}
});

export const PedidoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [pagadoFilter, setPagadoFilter] = useState<boolean | string>('');
	const [reglaEnvioFilter, setReglaEnvioFilter] = useState<'' | 'domicilio' | 'recoge'>(
		''
	);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [estadoFilter, setEstadoFilter] = useState<
		'' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado'
	>('');
	const [paramEstadoFilter, setParamEstadoFilter] = useState<
		'' | 'pendiente' | 'en ruta' | 'entregado' | 'cancelado'
	>('');

	return (
		<PedidoContext.Provider
			value={{
				pagadoFilter,
				setPagadoFilter,
				reglaEnvioFilter,
				setReglaEnvioFilter,
				currentPage,
				setCurrentPage,
				estadoFilter,
				setEstadoFilter,
				paramEstadoFilter,
				setParamEstadoFilter
			}}
		>
			{children}
		</PedidoContext.Provider>
	);
};
