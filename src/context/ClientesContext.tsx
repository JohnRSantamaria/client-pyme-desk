import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState
} from 'react';

interface ClientesContextPros {
	pageNumber: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
}

export const ClientesContext = createContext<ClientesContextPros>({
	pageNumber: 1,
	setPageNumber: () => {}
});

export const ClientesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [pageNumber, setPageNumber] = useState<number>(1);

	return (
		<ClientesContext.Provider value={{ pageNumber, setPageNumber }}>
			{children}
		</ClientesContext.Provider>
	);
};
