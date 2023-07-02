import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState
} from 'react';
import { Usuarios } from '@/interfaces/clienteInterface/Clienteprops';
import { Ciudad } from '@/types';

interface ClientesContextProps {
	pageNumber: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
	usuarios: Usuarios;
	setUsuarios: Dispatch<SetStateAction<Usuarios>>;
}

const defaultValue: ClientesContextProps = {
	pageNumber: 1,
	setPageNumber: () => {},
	usuarios: {
		id: 0,
		nombre: '',
		celular: '',
		correo: '',
		direccion: '',
		ciudad: '' as Ciudad
	},
	setUsuarios: () => {}
};

export const ClientesContext = createContext<ClientesContextProps>(defaultValue);

export const ClientesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [usuarios, setUsuarios] = useState<Usuarios>(defaultValue.usuarios);

	return (
		<ClientesContext.Provider
			value={{ pageNumber, setPageNumber, usuarios, setUsuarios }}
		>
			{children}
		</ClientesContext.Provider>
	);
};
