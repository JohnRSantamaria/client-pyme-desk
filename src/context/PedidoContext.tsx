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
	setReglaEnvioFilter: Dispatch<SetStateAction<'' | 'domicilio' | 'recoge'>>;
}

export const PedidoContext = createContext<PedidoContextProps>({
	pagadoFilter: '',
	setPagadoFilter: () => {},
	reglaEnvioFilter: '',
	setReglaEnvioFilter: () => {}
});

export const PedidoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [pagadoFilter, setPagadoFilter] = useState<boolean | string>('');
	const [reglaEnvioFilter, setReglaEnvioFilter] = useState<'' | 'domicilio' | 'recoge'>(
		''
	);
	return (
		<PedidoContext.Provider
			value={{ pagadoFilter, setPagadoFilter, reglaEnvioFilter, setReglaEnvioFilter }}
		>
			{children}
		</PedidoContext.Provider>
	);
};
