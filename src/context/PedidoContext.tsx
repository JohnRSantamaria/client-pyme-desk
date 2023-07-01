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
}

export const PedidoContext = createContext<PedidoContextProps>({
	pagadoFilter: '',
	setPagadoFilter: () => {}
});

export const PedidoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [pagadoFilter, setPagadoFilter] = useState<boolean | string>('');

	return (
		<PedidoContext.Provider value={{ pagadoFilter, setPagadoFilter }}>
			{children}
		</PedidoContext.Provider>
	);
};
