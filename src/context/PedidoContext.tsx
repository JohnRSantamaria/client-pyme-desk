import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState
} from 'react';
import { textSpanIsEmpty } from 'typescript';

interface PedidoContextProps {
	pagadoFilter: boolean | string;
	setPagadoFilter: Dispatch<SetStateAction<boolean | string>>;
	reglaEnvioFilter: '' | 'domicilio' | 'recoge';
	setReglaEnvioFilter: React.Dispatch<React.SetStateAction<'' | 'domicilio' | 'recoge'>>;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const PedidoContext = createContext<PedidoContextProps>({
	pagadoFilter: '',
	setPagadoFilter: () => {},
	reglaEnvioFilter: '',
	setReglaEnvioFilter: () => {},
	currentPage: 1,
	setCurrentPage: () => {}
});

export const PedidoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [pagadoFilter, setPagadoFilter] = useState<boolean | string>('');
	const [reglaEnvioFilter, setReglaEnvioFilter] = useState<'' | 'domicilio' | 'recoge'>(
		''
	);
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<PedidoContext.Provider
			value={{
				pagadoFilter,
				setPagadoFilter,
				reglaEnvioFilter,
				setReglaEnvioFilter,
				currentPage,
				setCurrentPage
			}}
		>
			{children}
		</PedidoContext.Provider>
	);
};
