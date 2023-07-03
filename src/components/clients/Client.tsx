import { ClientProps, FieldsProps } from '@/interfaces/clienteInterface/Clienteprops';
import FieldsClient from './FieldsClients';

const Client: React.FC<ClientProps> = ({ user }) => {
	return (
		<div className='p-2'>
			<FieldsClient
				data={user.nombre}
				title={'Nombre:'}
			/>
			<FieldsClient
				data={user.celular}
				title={'Celular:'}
			/>
			<FieldsClient
				data={user.ciudad}
				title={'Cuidad:'}
			/>
			<FieldsClient
				data={user.correo}
				title={'Correo:'}
			/>
			<FieldsClient
				data={user.direccion}
				title={'Dirección:'}
			/>
		</div>
	);
};

export default Client;
